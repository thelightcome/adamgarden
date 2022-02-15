export const modelsData = [{
    id: "tree01",
    modelPath: "/assets/models/trees/Tree01/",
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
    fruits: []
  },
  {
    id: "apple",
    modelPath: "/assets/models/fruits/apple/",
    modelName: "apple.obj",
    model: null,
    modelChange: (meshes, obj, scene) => {
      meshes[0].name = obj.id;
      meshes[0].meshType = "fruit";
      meshes[0].rotation.x = -Math.PI / 2;
      return meshes[0];
    },
  },
  {
    id: "lemon",
    modelPath: "/assets/models/fruits/lemon/",
    modelName: "lemon.obj",
    model: null,
    modelChange: (meshes, obj, scene) => {
      meshes[0].name = obj.id;
      meshes[0].meshType = "fruit";
      return meshes[0];
    },
  },
];