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

    let difference = Number(currentDate) - Number(birthDate);
    let output = new Date(difference);
    console.log(output);


    let totalDays = difference / (1000*60*60*24);
    console.log(totalDays);

    let totalMonths = totalDays/ 30;
    console.log(totalMonths);

    let totalYears = totalMonths /12;
    console.log(totalYears);







    let result = document.createElement("div");
    result.classList.add("container");
    result.setAttribute('id','resultContainer')
    document.querySelector("body").appendChild(result);

    result.append(yearDiff +" years "+ monthDiff +" months " + dayDiff +" days ")

}