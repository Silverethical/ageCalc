let calculateBtn = document.getElementById("submit");

calculateBtn.addEventListener("click",calcAge);

function calcAge(e){

    e.preventDefault();

    let birthday = document.getElementById("date").value;

    let birthDate = new Date(birthday);

    let currentDate = new Date();


    console.log( birthDate);
    console.log(currentDate);


    let yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
    console.log(yearDiff);
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    console.log(monthDiff);
    let dayDiff = currentDate.getDate() - birthDate.getDate();
    console.log(dayDiff);
    let hourDiff = currentDate.getHours() - birthDate.getHours();
    console.log(hourDiff);

    // let output = new Date(difference);
    // console.log(output);
}