// const buttonElement = document.getElementById("button");
// buttonElement.addEventListener("click", function change() {
//     let titleh1 = document.querySelector("h1").textContent;
//     console.log(titleh1);
// });

// let buttonElement = document.querySelector(".button");
// buttonElement.addEventListener("click", function change() {
//     let titleh1 = document.querySelector("h1").textContent;
//     console.log(titleh1);
// });

function change() {
    // let h1Title = document.querySelector("h1").textContent;
    // let h1Title = document.querySelector(".titleName").textContent;
    // let h1Title = document.querySelector("#titleId").textContent;
    let h1Title = document.querySelector("#titleId");
    console.log(h1Title);

    if (h1Title.textContent === "Holi coders!") {
        return h1Title.textContent = "Lorem, ipsum dolor.";
    }
    
    return h1Title.textContent = "Holi coders!";
    
}