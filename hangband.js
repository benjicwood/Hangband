var bands = new Array(20);
bands[0] = 'METALLICA';
bands[1] = 'GHOST';
bands[2] = 'GORILLAZ';
bands[3] = 'BIFFY CLYRO';
bands[4] = 'OASIS';
bands[5] = 'FOO FIGHTERS';
bands[6] = 'QUEEN';
bands[7] = 'THE BEACH BOYS';
bands[8] = 'PINK FLOYD';
bands[9] = 'SLIPKNOT';
bands[10] = 'BLACK SABBATH';
bands[11] = 'TOOL';
bands[12] = 'THE PRODIGY';
bands[13] = 'ARCTIC MONKEYS';
bands[14] = 'RADIOHEAD';
bands[15] = 'NINE INCH NAILS';
bands[16] = 'ENTER SHIKARI';
bands[17] = 'MUSE';
bands[18] = 'THE RAMONES';
bands[19] = 'FLEETWOOD MAC';

var answer = bands[Math.floor(Math.random() * bands.length)];
answer = answer.toUpperCase();

var length = answer.length;
var fails = 0;

var yes = new Audio('wav/yes.wav');
var no = new Audio('wav/no.wav');

var answer1 = '';

for (var i = 0; i < length; i++) {
  if (answer.charAt(i) === ' ') {
    answer1 = answer1 + ' ';
  } else { answer1 = answer1 + '-'; }
}

function writeanswer () {
  document.getElementById('stage').innerHTML = answer1;
}

window.onload = start;

var letters = new Array(25);
letters[0] = 'A';
letters[1] = 'B';
letters[2] = 'C';
letters[3] = 'D';
letters[4] = 'E';
letters[5] = 'F';
letters[6] = 'G';
letters[7] = 'H';
letters[8] = 'I';
letters[9] = 'J';
letters[10] = 'K';
letters[11] = 'L';
letters[12] = 'M';
letters[13] = 'N';
letters[14] = 'O';
letters[15] = 'P';
letters[16] = 'Q';
letters[17] = 'R';
letters[18] = 'S';
letters[19] = 'T';
letters[20] = 'U';
letters[21] = 'V';
letters[22] = 'W';
letters[23] = 'X';
letters[24] = 'Y';
letters[25] = 'Z';

function start () {
  var divContent = '';
  for (var i = 0; i <= 25; i++) {
    var element = 'lit' + i;
    divContent = divContent + '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
    if ((i + 1) % 7 === 0) { divContent = divContent + '<div style="clear:both;"></div>'; }
  }

  document.getElementById('alphabet').innerHTML = divContent;

  writeanswer();
}

String.prototype.setSign = function (index, sign) {
  if (index > this.length - 1) {
    return this.toString();
  } else {
    return this.substr(0, index) + sign + this.substr(index + 1);
  }
};

function check (x) {
  var scored = false;
  for (i = 0; i < length; i++) {
    if (answer.charAt(i) === letters[x]) { answer1 = answer1.setSign(i, letters[x]); scored = true; }
  } if (scored === true) {
    yes.play();
    var element = 'lit' + x;
    document.getElementById(element).style.background = '#003300';
    document.getElementById(element).style.color = '#00C000';
    document.getElementById(element).style.border = '3px solid #00C000';
    document.getElementById(element).style.cursor = 'default';
    writeanswer();
  } else {
    no.play();
    element = 'lit' + x;
    document.getElementById(element).style.background = '#330000';
    document.getElementById(element).style.color = '#C00000';
    document.getElementById(element).style.border = '3px solid #C00000';
    document.getElementById(element).style.cursor = 'default';
    document.getElementById(element).setAttribute('onclick', ';');

// fail
    fails++;
    var picture = 'img/s' + fails + '.jpg';
    document.getElementById('hangband').innerHTML = '<img src="' + picture + '" alt="" />';
  }

// win
  if (answer === answer1) {
    document.getElementById('alphabet').innerHTML = 'YOU WIN! IT\'S ' + answer + '!' + '<br /><br /><span class="reset" onclick="location.reload()">New Game?</span>';
  }
// loss
  if (fails >= 6) {
    document.getElementById('alphabet').innerHTML = 'YOU LOSE! IT\'S ' + answer + '!' + '<br /><br /><span class="reset" onclick="location.reload()">Try Again?</span>';
  }
}
