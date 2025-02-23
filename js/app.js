window.onload = () =>{
    let button = document.getElementById("btn");
    button.addEventListener("click", result);
};

function result(){
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let male = document.querySelector("#male").checked;
    let female = document.querySelector("#female").checked;
    let child = document.querySelector("#child").checked;
    let output = document.querySelector("#output");
    let result = document.querySelector("#result");
    let bmi = weight/((height*height)/10000);
    if (male || female){
        if (bmi >= 25){
            result.innerHTML = "overweight";
        } else if (bmi < 25 && bmi >= 18.5){
            result.innerHTML = "normal weight";
        } else if (bmi < 18.5){
            result.innerHTML = "underweight";
        }
    } else if (child){
        if (bmi >= 85){
            result.innerHTML = "overweight";
        } else if (bmi < 85 && bmi >= 5){
            result.innerHTML = "normal weight";
        } else if (bmi < 5){
            result.innerHTML = "underweight";
        }
    }
    output.innerHTML = bmi.toFixed(2);
}