
const endGame=(winner)=>{
    
    
    const sectionWinner=document.createElement('section')
    const divPreLoad=document.querySelector('.preLoad').firstChild
    sectionWinner.innerHTML=winner
    divPreLoad.classList.add('hidden')
    const sectionPreLoad=document.querySelector('.preLoad')
    sectionPreLoad.appendChild(sectionWinner)
}
export {endGame}