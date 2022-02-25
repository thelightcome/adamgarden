export const fruitsList = [{
  name: "Apple",
  type: ["Apple", "Multi"],
  modelPath: "./assets/models/fruits/apple/",
  modelName: "apple.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    return meshes[0];
  },
}, {
  name: "Cherry",
  type: ["Cherry", "Multi"],
  modelPath: "./assets/models/fruits/cherry/",
  modelName: "cherry.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    console.log(meshes)
    return meshes[0];
  },
}, {
  name: "Cone",
  type: ["Cone", "Multi"],
  modelPath: "./assets/models/fruits/cone/",
  modelName: "cone.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    return meshes[0];
  },
}, {
  name: "Lemon",
  type: ["Lemon", "Multi"],
  modelPath: "./assets/models/fruits/lemon/",
  modelName: "lemon.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    return meshes[0];
  },
}, {
  name: "Lilac",
  type: ["Lilac", "Multi"],
  modelPath: "./assets/models/fruits/lilac/",
  modelName: "lilac.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    return meshes[0];
  },
}, {
  name: "Orange",
  type: ["Orange", "Multi"],
  modelPath: "./assets/models/fruits/orange/",
  modelName: "orange.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    return meshes[0];
  },
}, {
  name: "Pear",
  type: ["Pear", "Multi"],
  modelPath: "./assets/models/fruits/pear/",
  modelName: "pear.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    return meshes[0];
  },
}, {
  name: "Sakura",
  type: ["Sakura", "Multi"],
  modelPath: "./assets/models/fruits/sakura/",
  modelName: "sakura.obj",
  model: null,
  modelChange: (meshes, obj, scene) => {
    meshes[0].name = obj.name;
    meshes[0].meshType = "fruit";
    return meshes[0];
  },
}, ];