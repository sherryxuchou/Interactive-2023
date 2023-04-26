function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
  var string = h + ":" + m + ":" + s;
  var img = stringToImage(string);
  document.getElementById('clock').innerHTML = string + "<br>" + img;
  var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}

function stringToImage(s) {
  var temp = ""
  for (var i = 0; i < s.length; i++) {
    temp = temp + "<img src='" + img[s[i]] + "'/>"
  }
  return temp
}

var img = {
  "1": "images/mercury.png",
  "2": "images/venus.png",
  "3": "images/moon.png",
  "4": "images/mars.png",
  "5": "images/jupiter.png",
  "6": "images/saturn.png",
  "7": "images/uranus.png",
  "8": "images/neptune.png",
  "9": "images/pluto.png",
  "0": "images/chibi.png",
  ":": "images/wand.png"
}
