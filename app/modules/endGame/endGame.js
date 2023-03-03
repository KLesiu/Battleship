
const endGame=(whoIsWinner,playerScore,AIScore)=>{
    const preLoadDiv=document.querySelector('.preLoad div')
    preLoadDiv.style="display:none;"
    const preLoadWinner=document.querySelector('.showWinner')
    preLoadWinner.classList.remove('hidden')
    const winner=document.querySelector('#winner')
    const scorePlayer=document.querySelector('#scorePlayerPreLoad')
    const scoreAI=document.querySelector('#scoreAIPreLoad')
    winner.innerHTML=whoIsWinner
    scorePlayer.innerHTML=playerScore
    scoreAI.innerHTML=AIScore


}
export {endGame}