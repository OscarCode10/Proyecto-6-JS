const rangeScore = document.querySelector(".score")
let scoreNow = 0
const scoreLimit = 5

const htmlMap = Array.from(Array(scoreLimit)).map((item, i) =>{
    return `<div class="item item-${i}" data-pos="${i}" ></div>`
})

rangeScore.innerHTML = htmlMap.join("")

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e =>{
        // console.log("Funciona");
        const position = item.getAttribute("data-pos")

        document.querySelectorAll(".item").forEach(squareGrey => {
            if (squareGrey.classList.contains("selec")) {
                squareGrey.classList.remove("selec")                
            }
        })

        for (let i = 0; i <= position; i++) {
            const square = document.querySelector(`.item-${i}`);
            if (!square.classList.contains("selec")) {
                square.classList.add("selec")
            }
        }
        scoreNow = parseInt(position) + 1
    })
    item.addEventListener("click", (e) => {
        const position = item.getAttribute("data-pos")
        scoreNow = parseInt(position) + 1
        console.log(`Su calificación son ${scoreNow} estrellas`);
    })
});