function changeColor() {
    var colors = ["red", "blue", "yellow", "green", "pink", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("text").style.color = randomColor;
}