
var ids = ["id1", "id2", "id3","id4", "id5", "id6","id7", "id8", "id9","id10", "id11", "id12","id13", "id14", 
"id15", "id16", "id17", "id18","id19", "id20", "id21","id22", "id23", "id24", "id25" ];
var checkCount = 0;
var penalty = 0;
var lastCheck = 0;
var treasureLocation = Math.floor(Math.random()*(25-0) - 0);
var trapLocation = Math.floor(Math.random()*(25-0)-0);
var trapLocation = 18;
var gameOver = false;

function check(position){
    if(gameOver){
      return;
    }

    var myimage= ids[position];

    var imageElmt = document.getElementById(myimage);

    if(position === treasureLocation){
      imageElmt.src = "./images/image3.webp";
      checkCount++;
      penalty++;
      document.getElementById("locations").textContent="Location Checked: " + checkCount;
      gameOver= true;
      penalty -=3;
    }
    else if(position === trapLocation) {
      imageElmt.src="./images/image4.webp";
      checkCount++;
      penalty++;
      document.getElementById("locations").textContent="Location Clicked : " + checkCount;
      gameOver = true;
      penalty +=4;
    }
    else{
      imageElmt.src="./images/image5.jpg";
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
   var lastColmn = Math.floor(lastCheck % 5);
  
   var rowDifference = Math.abs(treasureRow-lastRow);
   var colDifference = Math.abs(treasureColumn-lastColmn);
   var helpMessage = "";

  if ((rowDifference <= 1 && colDifference <= 1) && !(rowDifference === 1 && colDifference === 1)) {
      helpMessage = "Can smell it";
      penalty += 2;

  } else if (rowDifference + colDifference === 2) {
      helpMessage = "Close Matie";
      penalty += 2;

  } else {
      helpMessage = "Step Faster";
      penalty += 2;
  }
  document.getElementById("penalty").textContent = "Penalty: " + penalty;
  document.getElementById("help").textContent = helpMessage;
  }

 

    //bonus



function refresh() {
  window.location.reload("Refresh")
}