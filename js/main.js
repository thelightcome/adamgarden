import {
  gardenList
} from "./gardenList.js";

import {
  fruitsList
} from "./fruitsList.js";

import {
  Garden
} from "./Garden.js";


const menuList = document.querySelector(".menu_list");

gardenList.forEach((garden) => {
  const div = document.createElement("div");
  div.classList.add("menu_item");
  div.setAttribute("data-type", garden.name);
  const img = document.createElement("img");
  img.src = garden.image;
  div.appendChild(img);
  menuList.appendChild(div);
});

const startBtn = document.querySelector(".start");
startBtn.addEventListener("click", () => {
  menuList.classList.add("active");
});

document.body.classList.remove("load");

const canvas = document.querySelector(".canvas");
const countItemValue = document.querySelector(".count_item .count_item_value");
const garden = new Garden(canvas, countItemValue);

let state = "menu";
let gardenObject = null;
let fruitObject = null;

const menuAudio = document.querySelector(".menu_audio");
let audioState = false;

const countItemImg = document.querySelector(".count_item img");

menuList.addEventListener("click", async (e) => {
  const menuItem = e.target.closest(".menu_item");
  if (menuItem) {
    if (audioState) garden.toggleAudio();
    const menuType = menuItem.dataset.type;
    gardenObject = gardenList.find(garden => garden.name === menuType);
    fruitObject = fruitsList.filter(fruit => fruit.type.find(type => type === menuType));
    document.body.classList.add("load");
    countItemImg.src = gardenObject.image;
    await garden.setGarden(gardenObject, fruitObject);
    if (!menuAudio.paused) menuAudio.pause();
    document.body.classList.remove("load");
    document.body.classList.add("started");
    state = "garden";
  }
});

const soundBtn = document.querySelector(".sound_btn");
soundBtn.addEventListener("click", () => {
  soundBtn.classList.toggle("active");
  audioState = !audioState;
  if (state === "menu") {
    if (menuAudio.paused) menuAudio.play();
    else menuAudio.pause();
  } else {
    garden.toggleAudio();
  }
});

const menuBtn = document.querySelector(".menu_btn");
menuBtn.addEventListener("click", () => {
  garden.resetGarden();
  document.body.classList.remove("started");
  state = "menu";
  if (audioState && menuAudio.paused) menuAudio.play();
});

const refreshBtn = document.querySelector(".refresh_btn");
refreshBtn.addEventListener("click", async () => {
  document.body.classList.add("load");
  garden.resetGarden();
  if (audioState) garden.toggleAudio();
  await garden.setGarden(gardenObject, fruitObject);
  document.body.classList.remove("load");
});