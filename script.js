let div = document.querySelector("div");
let inp = document.querySelector("input");

inp.addEventListener("mousemove", (e) => {
    let c = 1
    let h = e.target.value;
    let h1 = h / 60;
    let x = c * (1 - Math.abs(h1 % 2 - 1))
    let color = ``;
    let xM = Math.floor(255 * x);
    let cM = Math.floor(255 * c)
    if(0 <= h1 && h1 < 1) {
        color = `rgb(${cM}, ${xM}, 0)`
    } else if(h1 >= 1 && h1 < 2) {
        color = `rgb(${xM}, ${cM}, 0)`
    } else if(h1 >= 2 && h1 < 3){
        color = `rgb(0, ${cM}, ${xM})`
    } else if (h1 >= 3 && h1 < 4) {
        color = `rgb(0, ${xM}, ${cM})`
    } else if(h1 >= 4 && h1 < 5) {
        color = `rgb(${xM}, 0, ${cM})`
    } else if(h1 >= 5 && h1 <= 6) {
        color = `rgb(${cM}, 0, ${xM})`
    }
    document.body.style.backgroundColor = color
})

