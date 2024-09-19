let cost;
let percent;
let totalCost;
const button = document.getElementById("submitButton");
const tenButton = document.getElementById("tenPerc");
const fifteenButton = document.getElementById("fiftPerc");
const twentyButton = document.getElementById("twentPerc");
const twentyFiveButton = document.getElementById("twentyFivePerc");
const displayCost = document.getElementById("total");

const calculate = () => {
    cost = Number(document.getElementById("tipValue").value);
    percent = Number(document.getElementById("tipPercent").value);
    percent = percent / 100;
    totalCost = cost * percent + cost;
    displayCost.innerHTML = totalCost.toFixed(2);
};

const setCalculate = (setPercent) => {
    cost = Number(document.getElementById("tipValue").value);
    percent = Number(setPercent);
    percent = percent / 100;
    totalCost = cost * percent + cost;
    displayCost.innerHTML = totalCost.toFixed(2);
};


button.addEventListener("click", () => {
    calculate();
});

tenButton.addEventListener("click", () => {
    setCalculate(10);
});
fifteenButton.addEventListener("click", () => {
    setCalculate(15);
});
twentyButton.addEventListener("click", () => {
    setCalculate(20);
});
twentyFiveButton.addEventListener("click", () => {
    setCalculate(25);
});
