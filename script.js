const weight = document.getElementById("weight");
const height = document.getElementById("height");
const btn = document.getElementById("btn-submit");

const result = document.getElementById("result");
const resultStatement = document.getElementById("result-statement");


function bmiFun() {
    const weightValue = weight.value
    const HeightValue = height.value / 100

    let bmi = weightValue / (HeightValue * HeightValue)
    bmi = Math.round(bmi)
    return bmi


}

btn.addEventListener("click", function () {
    const bmiReturn = bmiFun()
    result.innerHTML = bmiReturn;
    let statement;
    if (bmiReturn > 24.9) {
        statement = "OVER HEIGHT"
    }
    else if (bmiReturn < 24.9 && bmiReturn > 18.5) {
        statement = "HEALTHY"

    } else {
        statement = "UNDER HEIGHT"
    }

    resultStatement.innerHTML = `Your BMI STATUS is ${statement}`;

})

