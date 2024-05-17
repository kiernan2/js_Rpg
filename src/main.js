class Global{
  constructor () {this.charaList = [];}
}

const generatePlayer = () => {
  let chara = { Athlete: 0, Diplomat: 0, Engineer: 0, Sage: 0, Scientist: 0, Gambler: 0};
  let abilityArray = [8,6,6,6,6,4];
  shuffleArray(abilityArray);
  chara = changeState("Athlete")(abilityArray[0])(chara);
  chara = changeState("Diplomat")(abilityArray[1])(chara);
  chara = changeState("Engineer")(abilityArray[2])(chara);
  chara = changeState("Sage")(abilityArray[3])(chara);
  chara = changeState("Scientist")(abilityArray[4])(chara);
  chara = changeState("Gambler")(abilityArray[5])(chara);

  return(chara);
};

const addCharacter = (globalObject, chara) => {
  const charaNum = globalObject.charaList.length;
  globalObject.charaList[charaNum] = chara;
  return charaNum;
};

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const statusDisplay = (globalObject, charaNum) => {

  const statusDiv = document.createElement("div");
  const athleteText = document.createElement("p");
  const diplomatText = document.createElement("p");
  const engineerText = document.createElement("p");
  const sageText = document.createElement("p");
  const scientistText = document.createElement("p");
  const gamblerText = document.createElement("p");

  athleteText.innerHTML = `Athlete: ${globalObject.charaList[charaNum].Athlete}`;
  diplomatText.innerHTML = `Diplomat: ${globalObject.charaList[charaNum].Diplomat}`;
  engineerText.innerHTML = `Engineer: ${globalObject.charaList[charaNum].Engineer}`;
  sageText.innerHTML = `Sage: ${globalObject.charaList[charaNum].Sage}`;
  scientistText.innerHTML = `Scientist: ${globalObject.charaList[charaNum].Scientist}`;
  gamblerText.innerHTML = `Gambler: ${globalObject.charaList[charaNum].Gambler}`;

  statusDiv.appendChild(athleteText);
  statusDiv.appendChild(diplomatText);
  statusDiv.appendChild(engineerText);
  statusDiv.appendChild(sageText);
  statusDiv.appendChild(scientistText);
  statusDiv.appendChild(gamblerText);

  document.getElementById("Main").appendChild(statusDiv);
};

window.addEventListener("load", () => {
  const globalObject = new Global();
  console.log(globalObject.charaList.length);
  statusDisplay(globalObject, addCharacter(globalObject, generatePlayer()))
})
