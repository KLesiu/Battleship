const buildDom=()=>{
    const header=document.createElement("header")
    const h1Header=document.createElement("h1")
    h1Header.innerText="BattleShip"
    header.appendChild(h1Header)
    document.body.appendChild(header)
    const sectionPreLoad=document.createElement("section")
    sectionPreLoad.classList.add("preLoad")
    const divSectionPreLoad=document.createElement("div")
    const labelDivSectionPreLoad=document.createElement("label")
    labelDivSectionPreLoad.innerText="Type your name"
    const inputDivSectionPreLoad=document.createElement("input")
    inputDivSectionPreLoad.name="myName"
    const buttonDivSectionPreLoad=document.createElement("button")
    buttonDivSectionPreLoad.classList.add("submitMyName")
    buttonDivSectionPreLoad.innerText="START"
    divSectionPreLoad.appendChild(labelDivSectionPreLoad)
    divSectionPreLoad.appendChild(inputDivSectionPreLoad)
    divSectionPreLoad.appendChild(buttonDivSectionPreLoad)
    sectionPreLoad.appendChild(divSectionPreLoad)
    const sectionWinner=document.createElement('section')
    sectionWinner.classList.add('showWinner')
    sectionWinner.classList.add('hidden')
    sectionWinner.innerHTML=`<h1 id="winner"></h1>
    <h2>Player score:</h2>
    <h2>AI score:</h2>
    <h2 id="scorePlayerPreLoad"></h2>
    <h2 id="scoreAIPreLoad"></h2>
    <button class="playAgain">Play again</button>`
    sectionPreLoad.appendChild(sectionWinner)
    document.body.appendChild(sectionPreLoad)
    const main=document.createElement("main")
    const sectionPlayerMain=document.createElement("section")
    sectionPlayerMain.id="player"
    const divSectionPlayerMain=document.createElement("div")
    divSectionPlayerMain.classList.add("div-input")
    divSectionPlayerMain.innerHTML=`
    <span><h3 class="infoPlayer">Type coordinates for<h4 class="shipWidth">big ship</h4></h3></span>
    <h3 class="coordXInfo">X</h3>
    <input id="coordinateX" type="number" min="0" max="9" />
    <h3 class="coordYInfo">Y</h3>
    <input id="coordinateY" type="number" min="0" max="9" />
    <h4 class="positionInfoPlayer" style="width:100%;text-align:center;">Position(vertical,horizontal)</h4>
    <input style="width:30%;" id="position" type="text" />
    <button id="placeShip">Place ship</button>
    `
    sectionPlayerMain.appendChild(divSectionPlayerMain)
    const divGameBoardSectionPlayerMain=document.createElement("div")
    divGameBoardSectionPlayerMain.id="gameBoardPlayer"
    const divGameBoardHolderSectionPlayerMain=document.createElement("div")
    divGameBoardHolderSectionPlayerMain.id="divHolder"
    divGameBoardSectionPlayerMain.appendChild(divGameBoardHolderSectionPlayerMain)
    sectionPlayerMain.appendChild(divGameBoardSectionPlayerMain)
    main.appendChild(sectionPlayerMain)
    const sectionAIMain=document.createElement("section")
    sectionAIMain.id="ai"
    const h2SectionAIMain=document.createElement("h2")
    h2SectionAIMain.innerText="AI GameBoard"
   
    sectionAIMain.appendChild(h2SectionAIMain)
    const divGameBoardSectionAIMain=document.createElement("div")
    divGameBoardSectionAIMain.id="gameBoardAI"
    const divGameBoardHolderSectionAIMain=document.createElement("div")
    divGameBoardHolderSectionAIMain.id="divAIHolder"
    divGameBoardSectionAIMain.appendChild(divGameBoardHolderSectionAIMain)
    sectionAIMain.appendChild(divGameBoardSectionAIMain)
    main.appendChild(sectionAIMain)
    main.classList.add("hidden")
    const sectionScore=document.createElement('section')
    sectionScore.innerHTML=`<div class='scoreHolder'>
    <span><span><h2 id="yourName">YourName</h2></span><h2 class="playerScore">0</h2></span>
    <h2 class="aiScore"><span>AI</span><br/>0</h2></span>`
    sectionScore.style=`width:100vw;height:10vh`
    document.body.appendChild(main)
    document.body.appendChild(sectionScore)
}
export{buildDom}