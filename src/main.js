class Global{
  constructor () {this.charaList = [];}
}

const generatePlayer = () => {
  let chara = { Athlete: 0, Diplomat: 0, Engineer: 0, Sage: 0, Scientist: 0, Gambler: 0};
  let abilityArray = [8,6,6,6,6,4];
  shuffleArray(abilityArray);

  chara.Athlete = abilityArray[0];
  chara.Diplomat = abilityArray[1];
  chara.Engineer = abilityArray[2];
  chara.Sage = abilityArray[3];
  chara.Scientist = abilityArray[4];
  chara.Gambler = abilityArray[5];

  return(chara);
};

const generateMonster = () => {
  let chara = { Athlete: 0, Diplomat: 0, Engineer: 0, Sage: 0, Scientist: 0, Gambler: 0};
  let abilityArray = [6,6,6,4,4,4];
  shuffleArray(abilityArray);

  chara.Athlete = abilityArray[0];
  chara.Diplomat = abilityArray[1];
  chara.Engineer = abilityArray[2];
  chara.Sage = abilityArray[3];
  chara.Scientist = abilityArray[4];
  chara.Gambler = abilityArray[5];

  return(chara);
};

const addStat = (globalObject, charaNum, stat, add) => {
  return globalObject.charaList[charaNum][stat] += add;
};

const setStat = (globalObject, charaNum, stat, newStat) => {
  return globalObject.charaList[charaNum][stat] = newStat;
};

const combatStats = (chara) => {
  const Attack = chara.Athlete * 3;
  const Agility = chara.Diplomat * 2;
  const Accuracy = chara.Engineer * 2;
  const Magic = chara.Sage * 3;
  const Resistance = chara.Scientist * 2.5;
  const Defense = chara.Gambler * 2.5;

  const charaStats = { Attack: Attack, Agility: Agility, Accuracy: Accuracy, Magic: Magic, Resistance: Resistance, Defense: Defense };

  return charaStats;
};

const addCharacter = (globalObject, chara) => {
  const charaNum = globalObject.charaList.length;
  globalObject.charaList[charaNum] = chara;
  return charaNum;
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

const battleGrid = (team1,team2) => {
  const combatant1 = combatStats(team1);
  const combatant2 = combatStats(team2);

  let hp1 = combatant1.Defense * 5;
  let hp2 = combatant2.Defense * 5;

  while (hp1 > 0 && hp2 > 0) {
    hp2 -= combatant1.Attack;
    hp1 -= combatant2.Attack;
  }

  if (hp1 <= 0 && hp2 <= 0)
  {
    return "Draw";
  }
  else if (hp1 > 0 || hp2 <= 0)
  {
    return "Win";
  }
  else if (hp1 <= 0 || hp2 > 0)
  {
    return "Loss";
  }
  else {
    return "Error";
  }
};

window.addEventListener("load", () => {
  const globalObject = new Global();
  statusDisplay(globalObject, addCharacter(globalObject, generatePlayer()));
  document.getElementById("Main").append(battleGrid(globalObject.charaList[0], generateMonster()));
});