import {
  fruitsData
} from "./fruitsData.js";

export const gardenList = [{
  name: "Apple",
  image: "./assets/images/fruit/apple.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Cherry",
  image: "./assets/images/fruit/cherry.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Cone",
  image: "./assets/images/fruit/cone.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Lemon",
  image: "./assets/images/fruit/lemon.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Lilac",
  image: "./assets/images/fruit/lilac.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Orange",
  image: "./assets/images/fruit/orange.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Pear",
  image: "./assets/images/fruit/pear.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Sakura",
  image: "./assets/images/fruit/sakura.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
  fruits: fruitsData.apple,
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
}, {
  name: "Multi",
  image: "./assets/images/fruit/multi.png",
  cameraOptions: {
    target: new BABYLON.Vector3(0, 3, 0),
    radius: 10,
  },
  skyOptions: {
    sunPosition: new BABYLON.Vector3(30, 60, -100),
    turbidity: 1,
    luminance: 1,
    rayleigh: 2
  },
  fogOptions: {
    fogMode: BABYLON.Scene.FOGMODE_EXP2,
    fogColor: new BABYLON.Color3(0.9, 0.9, 0.85),
    fogDensity: 0.01,
  },
  groundOptions: {
    diffuseTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
    },
    bumpTexture: {
      url: "./assets/images/grass_txt.jpg",
      uScale: 30,
      vScale: 30,
      parallaxScaleBias: 0.1
    },
    detailMap: {
      url: "./assets/images/grass_txt.jpg",
      diffuseBlendLevel: 0.1,
      bumpLevel: 1,
      roughnessBlendLevel: 0.25,
      uScale: 30,
      vScale: 30,
    },
  },
  audio: "./assets/music/garden.mp3",
  grabSound: "./assets/music/grab.mp3",
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
}, ];