document.getElementById("top-bun").onclick = function() {
  document.getElementById("top-bun").classList.toggle("activated");
  document.getElementById("cheese").classList.toggle("activated");
  document.getElementById("tomato").classList.toggle("activated");
  document.getElementById("lettuce").classList.toggle("activated");
  document.getElementById("meat-patty").classList.toggle("activated");
  document.getElementById("bottom-bun").classList.toggle("activated");
  document.getElementById("burger-menu").classList.toggle("activated");
  document.getElementById("home-menu").classList.toggle("activated");
  document.getElementById("meetup-menu").classList.toggle("activated");
  document.getElementById("other-menu").classList.toggle("activated");
  document.getElementById("in-n-out").classList.toggle("activated");
  document.getElementById("hamburger-wiki").classList.toggle("activated");
  document.getElementById("meetup-sub-menu").classList.remove("activated");
  document.getElementById("title").classList.toggle("activated");
};

document.getElementById("meetup-menu").onclick = function() {
  document.getElementById("meetup-sub-menu").classList.toggle("activated");
};

function getDay() {
  var today = new Date();
  var day = today.getDay();
  var week = today.getDate();

  if (day == 3 && ((week > 6 && week < 13) || (week > 20 && week < 28))) {
    document.getElementById("title").innerHTML += "Tomorrow.";
  } else if (day == 3 && week > 28) {
    document.getElementById("title").innerHTML += "Elderberrys.";
  } else {
    document.getElementById("title").innerHTML += "Thursdays";
  }

  if (day == 4 && ((week > 7 && week < 14) || (week > 21 && week < 29))) {
    document.getElementById("title").innerHTML = "5:30 pm.";
  }
}