export const initScene = (engine, canvas, option) => {
  const scene = new BABYLON.Scene(engine);
  scene.collisionsEnabled = true;

  const camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", option.cameraAlpha, option.cameraBeta, option.cameraRadius, option.cameraTarget, scene);
  camera.checkCollisions = true;
  camera.noRotationConstraint = true;
  camera.upperRadiusLimit = option.cameraRadius;
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
  camera.attachControl(canvas);

  const hemiLight = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 1, 0), scene);

  return {
    scene,
    camera,
    hemiLight
  };
}

export const setSkybox = (scene, option) => {
  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.disableLighting = true;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../assets/images/skybox/TropicalSunnyDay/skybox", scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {
    size: option.groundWidth,
  }, scene);
  skybox.infiniteDistance = true;
  skybox.material = skyboxMaterial;
}

export const setGrass = (scene, option) => {
  const grassTexture = new BABYLON.Texture("../assets/images/grass_txt.jpg", scene);
  grassTexture.uScale = option.groundWidth / 4;
  grassTexture.vScale = option.groundHeight / 4;
  const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
  groundMaterial.diffuseTexture = grassTexture;
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: option.groundWidth,
    height: option.groundHeight
  }, scene);
  ground.checkCollisions = true;
  ground.material = groundMaterial;
  ground.position.z = -0.1;
  const grassPartsCount = 4000;
  const spriteManagerGrass = new BABYLON.SpriteManager("grassManager", "../assets/images/grass_part.png", grassPartsCount, {
    width: 100,
    height: 100
  }, scene);
  const spriteManagerGrass1 = new BABYLON.SpriteManager("grassManager1", "../assets/images/grass_part1.png", grassPartsCount, {
    width: 100,
    height: 133
  }, scene);
  const spriteManagerGrass2 = new BABYLON.SpriteManager("grassManager2", "../assets/images/grass_part2.png", grassPartsCount, {
    width: 100,
    height: 67
  }, scene);
  const spriteManagerGrass3 = new BABYLON.SpriteManager("grassManager3", "../assets/images/grass_part3.png", grassPartsCount, {
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

export const loadModels = (list, scene) => {
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

export const getMainParent = (mesh) => {
  let parent = mesh;
  while (parent.parent !== null) {
    parent = parent.parent;
  }
  return parent;
}