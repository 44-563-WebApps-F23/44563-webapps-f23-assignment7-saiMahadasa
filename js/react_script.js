
let reactTime = undefined;
let countdownVal = 3;

function recordTime() {
  reactTime = Date.now();
  console.log(`Reaction time recorded:  ${reactTime} `);
  let timestampInMilliseconds = reactTime ;
  const timestampInSeconds = timestampInMilliseconds / 1000;
  console.log('Reaction time recorded in seconds:', timestampInSeconds);
function convertTimestampToTime(reactTime) {
const date = new Date(reactTime);
const hours = date.getHours().toString().padStart(2, '0');
const minutes = date.getMinutes().toString().padStart(2, '0');
const seconds = date.getSeconds().toString().padStart(2, '0');
return `${hours}:${minutes}:${seconds}`;
}
timestampInMilliseconds = reactTime;
const formattedTime = convertTimestampToTime(timestampInMilliseconds);
console.log('Formatted time:', formattedTime);
document.getElementById("target").innerHTML = `Your Time : ${formattedTime}`;
}
function startTimer() {
  let counterElmnt = document.getElementById('counter');
  counterElmnt.textContent = 'Count : ';
  for (let i = 0; i < 8; i++) {
    setTimeout(function() {
        counterElmnt.innerHTML = 'Count : ' + i;
    }, i * 1000);
  }
  setTimeout(function() {
    if (reactTime === undefined) {
        counterElmnt.innerHTML = ` <div class="alert alert-danger" role="alert">
    Count : Too Slow
</div>`;
    } else {
      let endTime = Date.now();
      let elapsedTime = endTime - reactTime;
      counterElmnt.innerHTML = ` <div class="alert alert-success" role="alert">
      Count : Time was   ${elapsedTime }  milliseconds
</div>` ;
    }
  }, 8000);
}
