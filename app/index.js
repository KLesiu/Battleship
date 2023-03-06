import { buildDom } from "./modules/dom/dom.js";
buildDom()
import { startGamePlayer } from "./modules/startGamePlayer/startPlayer.js";
startGamePlayer()
const divs=document.getElementsByClassName("gameBoardDiv")
const preLoad=document.querySelector('.preLoad')
const main=document.querySelector('main')

const buttonPlaceShip=document.querySelector("#placeShip")
buttonPlaceShip.addEventListener("click",placeShip)
import { placeShip } from "./modules/placeShip/placeShip.js";
const buttonReset=document.querySelector('.playAgain')
buttonReset.addEventListener("click",()=>{
    location.reload()
})
export {divs,preLoad,main}