let calculateBtn = document.getElementById("submit");

calculateBtn.addEventListener("click",calcAge);

function calcAge(e){

    e.preventDefault(); // prevent page from loading 

    let birthday = document.getElementById("date").value; // get the value of date input as birthday value

    let birthDate = new Date(birthday); // convert birthday value to the date 

    let currentDate = new Date(); // get the current date and time


    // find  differences between birth date and current date
    let yearDiff = currentDate.getFullYear() - birthDate.getFullYear();

    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
   
    let dayDiff = currentDate.getDate() - birthDate.getDate();
   
    let hourDiff = currentDate.getHours() - birthDate.getHours();
 
    let minuteDiff = currentDate.getMinutes() - birthDate.getMinutes();
   
    let secondDiff = currentDate.getSeconds() - birthDate.getSeconds();


    // if there is a negative value , turn it to a positive value by mathematical calculations
    if ( secondDiff < 0 ){
        minuteDiff = minuteDiff -1;
        secondDiff = 60 + secondDiff;
    } 
    if (minuteDiff < 0 ){
        hourDiff = hourDiff -1;
        minuteDiff = 60 + minuteDiff;
    } 
    if ( hourDiff < 0 ){
        dayDiff = dayDiff -1;
        hourDiff = 24 + hourDiff;
    } 
    if ( dayDiff < 0){
        monthDiff = monthDiff -1 ;
        dayDiff = 30 + dayDiff;
    }
    if( monthDiff < 0){
        yearDiff = yearDiff - 1;
        monthDiff = 12 + monthDiff;
    }

  
    // add result 
    let result = document.createElement("div");
    result.classList.add("container");
    result.setAttribute('id','resultContainer')
    document.querySelector("body").appendChild(result);

   

    result.append(
        `
        ${yearDiff} years, ${monthDiff} months, ${dayDiff} days,
        ${hourDiff} hours, ${minuteDiff} minutes and ${secondDiff} seconds
        
        ` 
        )
       

}
