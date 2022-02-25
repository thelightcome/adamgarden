import {
  fruitsData
} from "./fruitsData.js";

export const gardenList = [{
  name: "Apple",
  image: "./assets/images/apple.png",
  modelPath: "./assets/models/trees/Tree01/",
  modelName: "tree01.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    const wrap = BABYLON.MeshBuilder.CreateBox("", {
      size: 0.1
    }, scene);
    wrap.name = obj.id;
    wrap.meshType = "wrapbox";
    meshes.forEach((elem) => {
      elem.parent = wrap;
    });
    return wrap;
  },
  fruits: fruitsData.apple,
  cameraTarget: new BABYLON.Vector3(0, 3, 0),
  cameraRadius: 10,
  skybox: "./assets/images/skybox/TropicalSunnyDay/skybox",
  ground: {
    url: "./assets/images/grass_txt.jpg",
    uScale: 200,
    vScale: 200
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
}, {
  name: "Lemon",
  image: "./assets/images/lemon.png",
  modelPath: "./assets/models/trees/Tree01/",
  modelName: "tree01.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    const wrap = BABYLON.MeshBuilder.CreateBox("", {
      size: 0.1
    }, scene);
    wrap.name = obj.id;
    wrap.meshType = "wrapbox";
    meshes.forEach((elem) => {
      elem.parent = wrap;
    });
    return wrap;
  },
  fruits: fruitsData.apple,
  cameraTarget: new BABYLON.Vector3(0, 3, 0),
  cameraRadius: 10,
  skybox: "./assets/images/skybox/TropicalSunnyDay/skybox",
  ground: {
    url: "./assets/images/grass_txt.jpg",
    uScale: 200,
    vScale: 200
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
}, {
  name: "Multi",
  image: "./assets/images/multi.jpg",
  modelPath: "./assets/models/trees/Tree01/",
  modelName: "tree01.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    const wrap = BABYLON.MeshBuilder.CreateBox("", {
      size: 0.1
    }, scene);
    wrap.name = obj.id;
    wrap.meshType = "wrapbox";
    meshes.forEach((elem) => {
      elem.parent = wrap;
    });
    return wrap;
  },
  fruits: fruitsData.apple,
  cameraTarget: new BABYLON.Vector3(0, 3, 0),
  cameraRadius: 10,
  skybox: "./assets/images/skybox/TropicalSunnyDay/skybox",
  ground: {
    url: "./assets/images/grass_txt.jpg",
    uScale: 200,
    vScale: 200
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
}, ];