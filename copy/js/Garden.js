const GROUND_SIZE = 200;
const CAMERA_ALPHA = 0;
const CAMERA_BETA = Math.PI / 2;
const CAMERA_RADIUS = 10;

export const Garden = class {
  constructor(canvas) {
    this.canvas = canvas;

    this.engine = new BABYLON.Engine(this.canvas, true);

    this.scene = new BABYLON.Scene(this.engine);
    this.scene.collisionsEnabled = true;

    new BABYLON.HemisphericLight("HemisphericLight", new BABYLON.Vector3(0, 1, 0), this.scene);

    this.camera = initCamera(this.scene, {
      alpha: CAMERA_ALPHA,
      beta: CAMERA_BETA,
      radius: CAMERA_RADIUS,
      target: new BABYLON.Vector3(0, 3, 0)
    });

    this.skybox = initSkybox(this.scene, {
      size: GROUND_SIZE
    });

    this.ground = initGround(this.scene, {
      size: GROUND_SIZE
    });

    this.animate = false;

    this.engine.resize();
    window.addEventListener("resize", () => {
      this.engine.resize();
    });

    this.tree = null;
    this.fruits = [];
    this.audio = null;
    this.grabSound = null;
    this.audioState = false;

    this.scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN) {
        const ray = this.scene.createPickingRay(this.scene.pointerX, this.scene.pointerY, BABYLON.Matrix.Identity(), this.scene.activeCameras[0]);
        const pick = this.scene.pickWithRay(ray);
        if (pick.hit) {
          const pickedMesh = pick.pickedMesh;
          if (pickedMesh.meshType === "fruit") {
            animGrabFruit(pickedMesh, this.scene);
            if (this.grabSound && this.audioState) this.grabSound.play();
          }
          // if (pickedMesh.meshType === "wrapbox") {
          //   setFruitHelper(pickedMesh, pick, this.fruits[0], this.tree);
          // }
        }
      }
    });
  }

  setCamera(target, radius = CAMERA_RADIUS) {
    this.camera.setTarget(target);
    this.camera.upperRadiusLimit = radius;
    this.camera.radius = radius;
    this.camera.rebuildAnglesAndRadius();
  }

  setSkybox(url) {
    this.skybox.material.reflectionTexture = new BABYLON.CubeTexture(url, this.scene);
    this.skybox.material.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  }

  setGround(url, uScale, vScale) {
    const grassTexture = new BABYLON.Texture(url, this.scene);
    grassTexture.uScale = uScale;
    grassTexture.vScale = vScale;
    this.ground.material.diffuseTexture = grassTexture;
  }

  startRender() {
    if (this.animate) return;
    this.animate = true;
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  stopRender() {
    if (this.animate) {
      this.animate = false;
      this.engine.stopRenderLoop();
    }
  }

  resetGarden() {
    this.stopRender();
    this.audioState = false;
    if (this.tree) {
      this.tree.dispose();
      this.tree = null;
      this.fruits.forEach(fruit => fruit.dispose());
      this.fruits = [];
      this.audio.dispose();
      this.audio = null;
      this.grabSound.dispose();
      this.grabSound = null;
    }
  }

  toggleAudio() {
    this.audioState = !this.audioState;
    if (this.audio) {
      if (this.audioState) this.audio.play();
      else this.audio.pause();
    }
  }

  async setGarden(gardenObject, fruitList) {
    await loadModels([gardenObject, ...fruitList], this.scene);

    this.tree = gardenObject.model;
    this.fruits = fruitList.map(fruit => fruit.model);

    gardenObject.fruits.forEach((pos, posInd) => {
      setFruit(this.fruits[Math.floor(Math.random() * fruitList.length)], pos, posInd, this.tree);
    });

    this.audio = new BABYLON.Sound("audio", gardenObject.audio, this.scene, null, {
      volume: 6,
      autoplay: this.audioState
    });
    this.grabSound = new BABYLON.Sound("grabSound", gardenObject.grabSound, this.scene, null, {
      volume: 5
    });

    this.setCamera(gardenObject.cameraTarget, gardenObject.cameraRadius);
    this.setSkybox(gardenObject.skybox);
    this.setGround(gardenObject.ground.url, gardenObject.ground.uScale, gardenObject.ground.vScale);
    this.startRender();
  }
}

function initCamera(scene, {
  alpha,
  beta,
  radius,
  target
} = {
  alpha: 0,
  beta: 0,
  radius: 10,
  target: new BABYLON.Vector3(0, 3, 0)
}) {
  const camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", alpha, beta, radius, target, scene);
  camera.checkCollisions = true;
  camera.noRotationConstraint = true;
  camera.upperRadiusLimit = radius;
  camera.lowerRadiusLimit = 1;
  camera.upperBetaLimit = Math.PI / 1.5;
  camera.lowerBetaLimit = Math.PI / 3;
  camera.angularSensibilityX = 4000;
  camera.angularSensibilityY = 4000;
  camera.panningSensibility = 0;
  camera.minZ = 0.001;
  // camera.minZ = 0.05;
  camera.wheelDeltaPercentage = 0.005;
  // camera.wheelDeltaPercentage = 0.05;
  camera.keysUp = [87];
  camera.keysDown = [83];
  camera.keysLeft = [65];
  camera.keysRight = [68];
  camera.attachControl(scene.getEngine().getRenderingCanvas());
  return camera;
}

function initSkybox(scene, {
  size
}) {
  const skyboxMaterial = new BABYLON.StandardMaterial("skyboxMaterial", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.disableLighting = true;
  const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {
    size: size,
  }, scene);
  skybox.infiniteDistance = true;
  skybox.material = skyboxMaterial;
  return skybox;
}

function initGround(scene, {
  size
}) {
  const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: size,
    height: size
  }, scene);
  ground.checkCollisions = true;
  ground.material = groundMaterial;
  ground.position.z = -0.1;
  return ground;
}

function animGrabFruit(mesh, scene) {
  const frameRate = 30;

  const ySlide = new BABYLON.Animation("xSlide", "position.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

  const keyFrames = [{
    frame: 0,
    value: mesh.position.y,
  }, {
    frame: 5,
    value: mesh.position.y + 0.3,
  }, {
    frame: frameRate,
    value: mesh.position.y - 2,
  }];

  ySlide.setKeys(keyFrames);
  ySlide.addEvent(new BABYLON.AnimationEvent(frameRate - 1, () => {
    mesh.dispose();
  }));

  mesh.animations.push(ySlide);

  scene.beginAnimation(mesh, 0, frameRate, true);
}

function loadModels(list, scene) {
  let length = list.length;

  return new Promise((res) => {
    list.forEach((obj) => {
      BABYLON.SceneLoader.ImportMesh("", obj.modelPath, obj.modelName, scene, function (newMeshes) {
        obj.model = obj.modelChange(newMeshes, obj, scene);
        length--;
        if (length === 0) {
          res();
        }
      });
    });
  });
}

function setFruit(mesh, pos, index = 0, tree) {
  const clone = mesh.clone(mesh.name + "-i-" + index);
  clone.position = pos.clone();
  clone.parent = tree;
}

export const setGrass = (scene, option) => {

  const grassPartsCount = 4000;
  const spriteManagerGrass = new BABYLON.SpriteManager("grassManager", "./assets/images/grass_part.png", grassPartsCount, {
    width: 100,
    height: 100
  }, scene);
  const spriteManagerGrass1 = new BABYLON.SpriteManager("grassManager1", "./assets/images/grass_part1.png", grassPartsCount, {
    width: 100,
    height: 133
  }, scene);
  const spriteManagerGrass2 = new BABYLON.SpriteManager("grassManager2", "./assets/images/grass_part2.png", grassPartsCount, {
    width: 100,
    height: 67
  }, scene);
  const spriteManagerGrass3 = new BABYLON.SpriteManager("grassManager3", "./assets/images/grass_part3.png", grassPartsCount, {
    width: 100,
    height: 75
  }, scene);
  const gardenWidth = option.groundWidth * 0.5;
  const gardenDepth = option.groundHeight * 0.5;
  for (let i = 0; i < grassPartsCount; i++) {
    const grass = new BABYLON.Sprite("grass", spriteManagerGrass);
    grass.width = 0.5;
    grass.height = 0.75;
    grass.position.x = BABYLON.Scalar.RandomRange(-gardenWidth, gardenWidth);
    grass.position.z = BABYLON.Scalar.RandomRange(-gardenDepth, gardenDepth);
    grass.position.y = 0.375;

    const grass1 = new BABYLON.Sprite("grass1", spriteManagerGrass1);
    grass1.width = 0.5;
    grass1.height = 0.75;
    grass1.position.x = BABYLON.Scalar.RandomRange(-gardenWidth, gardenWidth);
    grass1.position.z = BABYLON.Scalar.RandomRange(-gardenDepth, gardenDepth);
    grass1.position.y = 0.375;

    const grass2 = new BABYLON.Sprite("grass2", spriteManagerGrass2);
    grass2.width = 1;
    grass2.height = 0.5;
    grass2.position.x = BABYLON.Scalar.RandomRange(-gardenWidth, gardenWidth);
    grass2.position.z = BABYLON.Scalar.RandomRange(-gardenDepth, gardenDepth);
    grass2.position.y = 0.25;

    const grass3 = new BABYLON.Sprite("grass3", spriteManagerGrass3);
    grass3.width = 1;
    grass3.height = 0.75;
    grass3.position.x = BABYLON.Scalar.RandomRange(-gardenWidth, gardenWidth);
    grass3.position.z = BABYLON.Scalar.RandomRange(-gardenDepth, gardenDepth);
    grass3.position.y = 0.375;
  }
}

function getMainParent(mesh) {
  let parent = mesh;
  while (parent.parent !== null) {
    parent = parent.parent;
  }
  return parent;
}

function setFruitHelper(pickedMesh, pick, fruit, tree) {
  const invertParentWorldMatrix = pickedMesh.getWorldMatrix().clone();
  const pos = BABYLON.Vector3.TransformCoordinates(pick.pickedPoint, invertParentWorldMatrix.invert());
  console.log(`new BABYLON.Vector3(${ pos.x }, ${ pos.y - 0.056 }, ${ pos.z })`);
  setFruit(fruit, new BABYLON.Vector3(pos.x, pos.y - 0.056, pos.z), pos.x, tree);
}