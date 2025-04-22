//togloomiing buh gazart ashiglagdah global variable-iig end zarlay

//togloom dussan esehiig hadgalah tuluviin variable
var isNewGame;

//Ali toglogch dice shideh ve gdgig end hadgalna
var activePlayer;

// 2 toglogchiin tsugluulsan onoonuud
var scores;

//idevhtei toglogchiin tsugluulj bga eeljiin onoo
var roundScore;

//dice zurgiig uzuuleh elementiig DOM-s haij olood end hadgalna
var diceDom = document.querySelector(".dice");

//Togloomiig ehluulne
initGame();

//togloomiig shineer ehlehed beltgene
function initGame() {
  //togloom ehellee gedeg tuluvt oruulna

  isNewGame = true;

  // toglogchiin eeljiig hadgalah variable
  activePlayer = 0;
  //toglogchiin tsugluulsan onoog save-leh variable

  scores = [0, 0];

  //toglogchiin eeljindee tsugluulj bga onoog hadgalah variable
  roundScore = 0;

  //dice-iig ali talaar buusniig haruulah

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //toglogchiin neriig butsaaj gargah

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

//dice-g shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    console.log(diceNumber);

    //dice zurag web deer gargaj irne
    diceDom.style.display = "block";

    //buusan sanamsargui toond hargalzah dice-nii zurgiig web deer gargana
    diceDom.src = "dice-" + diceNumber + ".png";

    //toglogchiin eeljiin onoog uurchilnu
    if (diceNumber !== 1) {
      //1-s uur buugaad toog toglogchid nemne
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      //1buusan tul toglogchiin eeljiig solino

      switchToNextplayer();
    }
  } else {
    alert("Game is over. Press the button NEW GAME!");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //Ug toglogchiin tsugluulsn eeljiin onoog global onoon deer ni nemne
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //delgets deer onoog uurchilnu
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //ug toglogch ni hojson esehiig (100 onoonoos ih eseh) check hiih:
    if (scores[activePlayer] >= 10) {
      //togloomiig duussan tuluvt oruulna
      isNewGame = false;
      //winner gesen textiig nerniih ni orond gargana
      document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      //toglogchiin eeljiig solino
      switchToNextplayer();
    }
  } else {
    alert("Game is over!");
  }
});

function switchToNextplayer() {
  //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //toglogchiin eeljiig nugu toglogch ru shiljuulne

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //ulaan tsegiig shiljuuleh code
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //dice-g tur alga bolgono
  diceDom.style.display = "none";
}

//New game ehluuleh tovchnii event listener

document.querySelector(".btn-new").addEventListener("click", initGame);
