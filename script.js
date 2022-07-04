let calculateBtn = document.getElementById("submit");

calculateBtn.addEventListener("click",calcAge);

function calcAge(e){

    e.preventDefault();

    let birthday = document.getElementById("date").value;

    let birthDate = new Date(birthday);

    let currentDate = Date.now();

    console.log( birthDate);
    console.log(currentDate);

    let difference = currentDate - Number(birthDate);
    console.log(difference);
    let output = new Date(difference);
    console.log(output);
}