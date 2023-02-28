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
    document.body.appendChild(sectionPreLoad)
    const main=document.createElement("main")
    const sectionPlayerMain=document.createElement("section")
    sectionPlayerMain.id="player"
    const divSectionPlayerMain=document.createElement("div")
    divSectionPlayerMain.classList.add("div-input")
    divSectionPlayerMain.innerHTML=`<span><h2 id="yourName">Name</h2></span>
    <span><h3 class="infoPlayer">Type coordinates for<h4 class="shipWidth">big ship</h4></h3></span>
    <h3 class="coordXInfo">X</h3>
    <input id="coordinateX" type="number" />
    <h3 class="coordYInfo">Y</h3>
    <input id="coordinateY" type="number" />
    <h4 class="positionInfoPlayer" style="width:70%;text-align:center;">Position(vertical,horizontal)</h4>
    <input style="width:30%;" id="position" type="text" />
    <button id="placeShip">Place ship</button>
    <span>Score:<h2 class="playerScore">0</h2></span>`
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
    const spanSectionAIMain=document.createElement("span")
    spanSectionAIMain.innerHTML=`Score:<h2 class="aiScore">0</h2></span>`
    sectionAIMain.appendChild(h2SectionAIMain)
    sectionAIMain.appendChild(spanSectionAIMain)
    const divGameBoardSectionAIMain=document.createElement("div")
    divGameBoardSectionAIMain.id="gameBoardAI"
    const divGameBoardHolderSectionAIMain=document.createElement("div")
    divGameBoardHolderSectionAIMain.id="divAIHolder"
    divGameBoardSectionAIMain.appendChild(divGameBoardHolderSectionAIMain)
    sectionAIMain.appendChild(divGameBoardSectionAIMain)
    main.appendChild(sectionAIMain)
    main.classList.add("hidden")
    // sectionPreLoad.classList.add("hidden")
    document.body.appendChild(main)
}
export{buildDom}