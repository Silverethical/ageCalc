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
    console.log(difference);
    let output = new Date(difference);
    console.log(output);


    let dayRemainder = difference % (1000*60*60*24);
    let totalDays = difference - dayRemainder;
    let dayCount = totalDays / (1000*60*60*24);
    // console.log(totalDays);
    console.log(dayCount);

let yearRemainder = dayCount % 365;
let totalYears =  dayCount - yearRemainder;
let yearCount = totalYears / 365;
console.log(yearCount);

    
    let monthRemainder = yearRemainder % 30;
    console.log(monthRemainder);
    let totalMonths = yearRemainder - monthRemainder;
    // console.log(totalMonths);
    let monthCount = totalMonths / 30;
    console.log(monthCount); 
    if (monthRemainder > 0){
        monthCount = monthCount - 1;
        let remainingDays = 30 - monthRemainder;
        console.log(remainingDays);
    }
  
    let result = document.createElement("div");
    result.classList.add("container");
    result.setAttribute('id','resultContainer')
    document.querySelector("body").appendChild(result);

    result.append(yearDiff +" years "+ monthDiff +" months " + dayDiff +" days ")

}