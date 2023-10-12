let ids = ["id1", "id2", "id3","id4", "id5", "id6","id7", "id8", "id9","id10", "id11", "id12","id13", "id14", "id15", "id16", "id17", "id18","id19", "id20", "id21","id22", "id23", "id24", "id25" ];
let checkCount = 0;
let penalty = 0;
let lastCheck = 0;
let treasureLocation = 5;
let trapLocation = 18;
let gameOver = false;


function check(position){
    if(gameOver){
      return;
    }

    var myimage= ids[position];

    var imageElement = document.getElementById(myimage);

    if(position === treasureLocation){
      imageElement.src = "./images/image3.webp";
      checkCount++;
      penalty++;
      document.getElementById("locations").textContent="Location Checked: " + checkCount;
      gameOver= true;
      penalty -=3;
    }
    else if(position === trapLocation) {
      imageElement.src="./images/image4.webp";
      checkCount++;
      penalty++;
      document.getElementById("locations").textContent="Location Clicked : " + checkCount;
      gameOver = true;
      penalty +=4;
    }
    else{
      imageElement.src="./images/image5.jpg";
      checkCount++;
      penalty++;
      document.getElementById("locations").textContent="Location Checked: " + checkCount;

    }
    document.getElementById("penalty").textContent="Penalty is : " + penalty;
    lastCheck=position;
  }

  function help(){

   var treasureRow=Math.floor(treasureLocation/5);
   var treasureColumn=Math.floor(treasureLocation%5)
   var lastRow = Math.floor(lastCheck / 5);
   var lastCol = Math.floor(lastCheck % 5);
  
   var rowDiff = Math.abs(treasureRow-lastRow);
   var colDiff = Math.abs(treasureColumn-lastCol);
   var helpMessage = "";

  if ((rowDiff <= 1 && colDiff <= 1) && !(rowDiff === 1 && colDiff === 1)) {
      helpMessage = "Can smell it";
      penalty += 2;

  } else if (rowDiff + colDiff === 2) {
      helpMessage = "Close Matie";
      penalty += 2;

  } else {
      helpMessage = "Step Faster";
      penalty += 2;
  }
  document.getElementById("penalty").textContent = "Penalty: " + penalty;
  document.getElementById("help").textContent = helpMessage;
  }

  function refresh(){
      window.location.reload("Refresh")
    }