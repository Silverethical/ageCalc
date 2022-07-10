let calculateBtn = document.getElementById("submit");

calculateBtn.addEventListener("click",calcAge);

function calcAge(e){

    e.preventDefault();

    let birthday = document.getElementById("date").value;

    let birthDate = new Date(birthday);

    let currentDate = new Date();



    let yearDiff = currentDate.getFullYear() - birthDate.getFullYear();

    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if( monthDiff < 0){
        yearDiff = yearDiff - 1;
        monthDiff = 12 + monthDiff;
    }
 
    let dayDiff = currentDate.getDate() - birthDate.getDate();
    if ( dayDiff < 0){
        monthDiff = monthDiff -1 ;
        dayDiff = 30 + dayDiff;
    }
 
    let hourDiff = currentDate.getHours() - birthDate.getHours();
    if ( hourDiff < 0 ){
        dayDiff = dayDiff -1;
        hourDiff = 24 + hourDiff;
    } 

    let minuteDiff = currentDate.getMinutes() - birthDate.getMinutes();
    if (minuteDiff < 0 ){
        hourDiff = hourDiff -1;
        minuteDiff = 60 + minuteDiff;
    } 
  
    let secondDiff = currentDate.getSeconds() - birthDate.getSeconds();
    if ( secondDiff < 0 ){
        minuteDiff = minuteDiff -1;
        secondDiff = 60 + secondDiff;
    } 
    

   
  
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
