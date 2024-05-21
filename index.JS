document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myBtn');
    const clickCountSpan = document.getElementById('clickCount');
    let clickCount = 0;

    button.addEventListener('click', () => {
        const name = prompt('What is your name?');
        if (name !== null && name.trim() !== "") {
            clickCount++;
            clickCountSpan.textContent = clickCount;
            console.log(`Name: ${name}, Click count: ${clickCount}`);
        } else {
            console.log('Name prompt cancelled or empty input.');
        }
    });
});
document.getElementById("myButton").onclick = function() {
    const mycheckBox = document.getElementById("mycheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if (mycheckBox.checked) {
        console.log("You are subscribed");
    } else {
        console.log("You are not subscribed");
    }

    if (visaBtn.checked) {
        console.log("You are paying with a Visa");
    } else if (mastercardBtn.checked) {
        console.log("You are paying with a Mastercard");
    } else if (paypalBtn.checked) {
        console.log("You are paying with Paypal");
    }else {
        console.log("you must select a payment type");
    }
};
// let grade = "c"
// switch(grade){
//     case"A":
//     console.log("Exellent!!")
//     break;
//     case"B":
//     console.log("Very Good!!")
//     break;
//     case"C":
//     console.log("Good!")
//     break;
//     case"D":
//     console.log("Pass")
//     break;
//     case"F":
//     console.log("FAILED!!")
//     break;
//     default:
//         console.log(grade,"is not a letter grade")
    

let grade = "10";

switch (true) {
    case grade >= 70:
        console.log("Excellent!!");
        break;
    case grade >= 60:
        console.log("Very Good!!");
        break;
    case grade >= 50:
        console.log("Good!");
        break;
    case grade >= 40:
        console.log("Pass");
        break;
    case grade < 40:
        console.log("FAILED repeat course!!");
        break;
    default:
        console.log(grade, "is not a Number grade");
}
for (let i = 20; i >= 0; i -= 3) {
    console.log(i);
}

