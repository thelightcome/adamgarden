import {
  initScene,
  setSkybox,
  setGrass,
  loadModels,
} from "./helpFuncs.js";

import {
  SCENE_OPTION
} from "./sceneOption.js";

import {
  modelsData
} from "./modelsData.js";

import {
  fruitData
} from "./data.js";

const main = document.querySelector(".main");
const startBtn = document.querySelector(".start");
const canvas = document.querySelector("#canvas");
const engine = new BABYLON.Engine(canvas, true);

main.classList.add("loaded");

const {
  scene,
} = initScene(engine, canvas, SCENE_OPTION);

setSkybox(scene, SCENE_OPTION);

setGrass(scene, SCENE_OPTION);

startBtn.addEventListener("click", () => {
  main.classList.remove("loaded");

  const grabFruitMusic = new BABYLON.Sound("grabFruitMusic", "/assets/music/grab.mp3", scene, null, {
    volume: 1
  });

  const gardenMusic = new BABYLON.Sound("gardenMusic", "/assets/music/garden.mp3", scene, null, {
    volume: 2,
    autoplay: true,
  });

  loadModels(modelsData, scene).then(() => {
    fruitData.apple.forEach((pos, posInd) => {
      setFruit(modelsData[1].model, pos, posInd, modelsData[0].model);
    });

    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN) {
        const ray = scene.createPickingRay(scene.pointerX, scene.pointerY, BABYLON.Matrix.Identity(), scene.activeCameras[0]);
        const pick = scene.pickWithRay(ray);
        if (pick.hit) {
          const pickedMesh = pick.pickedMesh;
          if (pickedMesh.meshType === "fruit") {
            animGrabFruit(pickedMesh, scene);
            grabFruitMusic.play();
          }

          // if (pickedMesh.meshType === "wrapbox") {
          //   setFruitHelper();
          // }
        }
      }
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    main.classList.add("hide");

    engine.resize();
    
    engine.runRenderLoop(function () {
      scene.render();
    });
  });
});

function setFruit(mesh, pos, index = 0, tree) {
  const clone = mesh.clone(mesh.name + "-i-" + index);
  clone.position = pos;
  clone.parent = tree;
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

function setFruitHelper() {
  const invertParentWorldMatrix = pickedMesh.getWorldMatrix().clone();
  const pos = BABYLON.Vector3.TransformCoordinates(pick.pickedPoint, invertParentWorldMatrix.invert());
  console.log(`new BABYLON.Vector3(${ pos.x }, ${ pos.y - 0.056 }, ${ pos.z })`);
  setFruit(modelsData[1].model, new BABYLON.Vector3(pos.x, pos.y - 0.056, pos.z), pos.x, modelsData[0].model);
}