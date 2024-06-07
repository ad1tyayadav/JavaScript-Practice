const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    const h2 = document.querySelector("h2");
    let randColor = getRandColor();
    h2.innerText = (`RGB = ${randColor}`);

    let div = document.querySelector("div");
    div.style.backgroundColor = `rgb(${randColor}`;
});

function getRandColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    let color = (`${red} , ${green} , ${blue}`);
    return color;
};

