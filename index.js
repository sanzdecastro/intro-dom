function change() {
    // add red squares to the HTML when the button is clicked
    let squareContainer = document.querySelector("article");
    let newSquare = document.createElement("div");

    squareContainer.appendChild(newSquare).classList.add("redSquare");

}
