export const fruitsList = [{
    name: "Apple",
    type: ["Apple", "Multi"],
    modelPath: "./assets/models/fruits/apple/",
    modelName: "apple.obj",
    model: null,
    modelChange: (meshes, obj, scene) => {
      meshes[0].name = obj.name;
      meshes[0].meshType = "fruit";
      meshes[0].rotation.x = -Math.PI / 2;
      return meshes[0];
    },
  },
  {
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
  },
];