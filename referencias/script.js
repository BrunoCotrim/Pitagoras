document.getElementById("startBtn").addEventListener("click", function() {
  document.getElementById("identify").style.display = "block";
  document.getElementById("menu").style.display = "none";
});

document.getElementById("cancelBtn").addEventListener("click", function() {
  document.getElementById("identify").style.display = "none";
    document.getElementById("menu").style.display = "inline-block";
});

document.getElementById("okBtn").addEventListener("click", function() {
  var name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    document.getElementById("identify").style.display = "none";
    document.getElementById("container").style.display = "flex";
  }
});

var questionElements = document.getElementsByClassName("question");
for (var i = 0; i < questionElements.length; i++) {
  questionElements[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#00f";
    this.style.color = "#fff";
  });
  questionElements[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "#ffd700";
    this.style.color = "#000";
  });
}