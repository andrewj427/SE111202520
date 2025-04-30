//grab submit button first

var submitButton = document.querySelector("#get-age");

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    var firstName = document.querySelector("#first");
    var lastName = document.querySelector("#last");
    var age = document.querySelector("#age");
    var displayInfo = document.querySelector("#display-info");

    //basic validation
    if(firstName === "", lastName === "", age === ""){
        alert("Please fill in the missing data!");
        return;
    }

    //calculate animal years
    var dogYears = (Number(age.value) * 7).toFixed();
    var catYears = (Number(age.value) * 4).toFixed();

    //output data to page
    displayInfo.innerHTML = `Here is your info:
                            <br>
                            <br>
                            Your name is ${firstName.value} ${lastName.value}
                            <br>
                            Your age in dog years is ${dogYears}
                            <br>
                            Your age in cat years is ${catYears}`
})