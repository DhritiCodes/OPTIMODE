const timeBox = document.querySelector(".time");
const dateDayMonth = document.querySelector(".day");
const greetBox = document.querySelector(".greet");
const greetName = document.querySelector(".username");

const d = new Date;

//resolve time display error
function timeDisplay(num) {
    return num > 9 ? num : "0" + num
}

//display current time 
function dispTime() {
    let d = new Date();

    //fetch time
    var hour = d.getHours();
    var minutes = d.getMinutes();
    // var sec = d.getSeconds();
    //display time - 24 hr
    timeBox.textContent = `${hour}:${timeDisplay(minutes)}`;
}
setInterval(dispTime, 1000);


//greetings:
// 5am - 11.59am - good morning
// 12pm - 4.59pm - good afternoon
// 5pm -4.59am - good evening
function greeting() {
    let d = new Date()
    let hours = d.getHours();
    // let stats = (hours < 12 || hours > 4) ? "Good Morning" :
    //     ((hours <= 17 && hours >= 12) ? "Good Afternoon" : "Good Evening");
    // let stats;
    // if (hours > 4 || hours < 12)
    //     stats = "Good Morning";
    // else if (hours > 12 || hours <= 17)
    //     stats = "Good Afternoon";
    // else
    //     stats = "Good Night";
    // greetBox.innerHTML = stats;
    let status = (hours < 12) ? "Good Morning" :
        ((hours <= 17 && hours >= 12) ? "Good Afternoon" : "Good Evening");
    // console.log(status);
    greetBox.innerHTML = status;

}

//customise greeting name for user on DOUBLECLICK- STORE IN LOCAL STORAGE TO PERSIST
greetName.addEventListener("dblclick", function(e) {
    var name = prompt("Enter your name : ");
    console.log(name);

    if (name = "") {
        alert("Name cant be empty!!")
        prompt("Enter name Again : ")
        greetName.textContent = name;
    } else {
        greetName.textContent = name;
    }

})

// function blankName(n) {
//     if (n == "" || n == " ") {
//         alert("Name cannot be Empty!!!")
//         prompt("Enter Name again : ")
//         greetName.innerHTML = n;

//         // blankName(n);
//     } else {
//         greetName.innerHTML = n;
//     }
// }

setInterval(greeting, 1000);


//date month,day - *CAN IMPLEMENT A CALENDER ON CLICK
function displayDay() {
    const date = d.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let month = months[d.getMonth()];
    let day = days[d.getDay()];

    dateDayMonth.innerHTML = `
    ${date} ${month}, ${day}
    `
}

displayDay();