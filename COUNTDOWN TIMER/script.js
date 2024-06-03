const endDate = "30 May 2025 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.getElementsByTagName("input");


function clock() {
    let end = new Date(endDate);
    let now = new Date();

    let diff = Math.floor((end - now) / 1000);

    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

setInterval(
    () => {
        clock();
    },
    1000
);
