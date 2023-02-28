import { buildDom } from "./modules/dom/dom.js";
buildDom()
import { startGamePlayer } from "./modules/startGamePlayer/startPlayer.js";
startGamePlayer()
const buttonPlaceShip=document.querySelector("#placeShip")
buttonPlaceShip.addEventListener("click",placeShip)
import { placeShip } from "./modules/placeShip/placeShip.js";
