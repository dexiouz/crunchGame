//included welcome message
//included function to display input name in welcome message or 'player one' if no name is entered;
//included function to accept user name
//added function uses corresponding 'player name' to welcome user
//added function that outputs Message after the end of the game
//added function that shows corresponding 'name of user' at the end of each game             //started added different final messages for different scores

//function that accepts player name
function firstPrompt() {
  name = prompt(`Hi, am CRUNCHie\nwhats your name`, `Name`);
}

//function that uses corresponding 'player name' to welcome user
//function that uses corresponding 'player name' to welcome user
function nameInfo(userInfo) {
  if (userInfo == " " || userInfo == "Name") {
    userInfo = "Player one";
  } else {
    userInfo;
  }
  let welcomeMsg = alert(
    `${userInfo} WELCOME TO CRUNCHIE \n\n Correct the sentences and get 20 points each.\n If you fail you lose 10 points.\n I have medals for you too according to the points you make.\n N/B: Words are case sensitive.\n\n Goodluck! \n\n`
  );
}

//function to add or subtract points and display message
function checkIf(ans, arr) {
  if (ans === arr.join(" ")) {
    //if answer is the same
    result += 20;
    msg = `CORRECT!!!   \n "${ans}"   \n`;
    // if answer is not the same
  } else if (ans == "your answer") {
    result -= 10;
    msg = `NO ANSWER!!!`;
  } else if (ans !== arr.join(" ")) {
    result -= 10;
    msg = `WRONG ANSWER!!!   \n "${ans}"   \n`;
  }
  alert(`\n ${msg} \n You have ${result} points.\n\n`);
}

//function that shows corresponding 'name of user' at the end of each game
function finalUserInfo() {
  if (name == " " || name == "Name") {
    name = "Player One";
  } else if (name) {
    name = name;
  }
}

//function to display final point
function congratMsg(result) {
  let message;
  if (result <= 0 || result <= 60) {
    message = `${name}, are you here to joke? \n You owe me ${result} points.\n\n   CLAY medal!\n\n`;
  } else if (result >= 70 && result <= 100) {
    message = `Ooops!!! ${name} you tried shaa, \n => ${result} points \n => Additional ${
      totalScore - result
    }points to win your jackpot.\n\n   SILVER medal!\n\n`;
  } else if (result >= 110 && result <= 150) {
    message = `${name}, you are almost there!\n => ${result}! points\n => but you need additional ${
      totalScore - result
    }points to get this jackpot.\n\n =>    IVORY medal!\n\n`;
  } else if (result >= 160 && result <= 200) {
    message = `Jeez!!! ${name} you are getting smarter!\n => How about another ${
      totalScore - result
    }points and make this jackpot yours.\n\n   TOPAZ medal!\n\n`;
  } else if (result >= 210 && result <= 250) {
    message = `hurray!! ${name} I like your passion!.\n just add ${
      totalScore - result
    }points and make this jackpot yours.\n\n   DIAMOND medal!\n\n`;
  } else if (result >= 260 && result <= 290) {
    message = `You are nearly the boss, ${name}. \n with extra ${
      totalScore - result
    }points the jackpot is yours.\n\n   PLATINUM medal!\n\n `;
  } else {
    message = `Congratulations ${name} you won the jackpot, \n You have ${result} points.\n\n   GOLD medal!\n\n`;
  }
  alert(message);
}

//array that that contains all the sentences
let arrays = [
  ["think", "success"],
  ["who", "are", "you"],
  ["independent", "national", "electoral", "commission"],
  ["Chibueze", "Ikedi", "is", "CEO", "of", "learnfactory"],
  ["go", "and", "get", "your", "PVC"],
  // ['Mathew','Onoja', 'is', 'manager', 'at', 'learnfactory'],,
  // ['I', 'am', 'alive'],
  // ['do', 'you', 'believe', 'in', 'God', '?'],
  // ['how', 'old', 'are', 'you'],

  //['We', 'can', 'change', 'our', 'fortunes'],

  // ['you', 'have', 'a', 'right', 'to', 'vote'],
  // ['abstinence', 'is', 'the', 'key'],
  // ['permanent', 'voter\'s', 'card'],
  // ['be', 'phenomenal'],
  // ['Nigerian','youths', 'are', 'exceptional'],
  // ['The', 'world', 'does', 'not', 'reward', 'perfectionists'],

  // ['think', 'innovation', 'and', 'productivity'],

  // ["Machine", "learning", "is", "taking", "over"],
  // ['are', 'you', 'alive', '?'],
  // ["learn", "programming", "at", "learnfactory", "nigeria"],
  // ['What', 'is', 'your', 'name'],

  // ['make','everyday', 'count'],
  // ['I', 'will', 'change', 'the', 'world'],
  // ['Risk', 'everything', 'to', 'win', 'everything'],
  // ["javascript", "is", "a", "scripting", "language"],
  // ["LearnFactory", "is", "the", "software", "engineering", "company", "in", "Aba"],
  // ["Never", "compare", "your", "weakness", "to", "other", "people\'s", "strength"],
  // ['Your', 'best', 'childhood', 'may', 'not', 'have', 'been', 'perfect'],

  // ['You', 'do', 'not', 'have', 'to', 'eat', 'dinner', 'with', 'them'],
];

//initialize variables
let array;
let answer;
let msg;
let result = 0;
let countUp = 0;
let countDown = 0;
let totalScore = 300;

//function that splits AND puts words in different variables and joins them
function checkWord(array) {
  //steps
  // i saves [i] word in wordslice[i]
  let wordslice0 = array.slice(0, 1); //saves first word in wordslice0
  let wordslice1 = array.slice(1, 2); //saves second word in wordslice1
  let wordslice2 = array.slice(2, 3);
  let wordslice3 = array.slice(3, 4);
  let wordslice4 = array.slice(4, 5);
  let wordslice5 = array.slice(5, 6);
  let wordslice6 = array.slice(6, 7);
  let wordslice7 = array.slice(7, 8);
  let wordslice8 = array.slice(8, 9);
  let wordslice9 = array.slice(9, 10);
  let wordslice10 = array.slice(10, 11);
  let wordslice11 = array.slice(11, 12);
  let wordslice12 = array.slice(12, 13);
  let wordslice13 = array.slice(13, 14);
  let oddWord;

  //ii COndition For rearranging the words
  if (array.length == 2) {
    oddWord = `${wordslice1} ${wordslice0}`;
  } else if (array.length == 3) {
    oddWord = `${wordslice1} ${wordslice2} ${wordslice0}`;
  } else if (array.length == 4) {
    oddWord = `${wordslice2} ${wordslice0} ${wordslice3} ${wordslice1}`;
  } else if (array.length == 5) {
    oddWord = `${wordslice1} ${wordslice4} ${wordslice3} ${wordslice0} ${wordslice2}`;
  } else if (array.length == 6) {
    oddWord = `${wordslice4} ${wordslice1} ${wordslice5} ${wordslice3} ${wordslice0} ${wordslice2}`;
  } else if (array.length == 7) {
    oddWord = `${wordslice4} ${wordslice1} ${wordslice5} ${wordslice3} ${wordslice0} ${wordslice2}`;
  } else if (array.length == 8) {
    oddWord = `${wordslice2} ${wordslice1} ${wordslice5} ${wordslice6} ${wordslice0} ${wordslice4} ${wordslice3}`;
  } else if (array.length == 9) {
    oddWord = `${wordslice3} ${wordslice1} ${wordslice5} ${wordslice4} ${wordslice0} ${wordslice7} ${wordslice2}`;
  } else {
    oddWord = `${wordslice2} ${wordslice0} ${wordslice3} ${wordslice1} ${wordslice6} ${wordslice5} ${wordslice7} ${wordslice4} ${wordslice8} ${wordslice12} ${wordslice9} ${wordslice11} ${wordslice13} ${wordslice10}`;
  }

  //iii displays the scattered words
  let answer = prompt(`CORRECT THE SENTENCE:\n ${oddWord}`, `your answer`);

  //iv function to check if 'answer' entered by 'user' is the same with the original sentence;
  checkIf(answer, array);
}

//THIS IS WHERE IT ALL STARTS
//  STEPS
//1 function that accepts player name

firstPrompt();
//2 function uses corresponding 'player name' to welcome user
nameInfo(name);

//3 function that accepts the array that contains all the sentences and for each sentence of the array it does "checkWord";
arrays.forEach(checkWord);

//4 function that shows corresponding 'name of user' at the end of each game
finalUserInfo();

//5 function that outputs Message after the end of the game
congratMsg(result);
