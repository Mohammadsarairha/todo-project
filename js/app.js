
// Name
var name = prompt("Please enter your name:");
// Gender
var gender = prompt("Please enter your gender: ex : (Male or Female)");
// Age
var age = prompt("Please enter your age");
if (age <= 0) {
    age = prompt("Please enter valid age more than 0");
}

// Welcoming message

if (!confirm("Wants to skip the welcoming message ?")) {
    alert("Welcome :D ")
}

// Welcoming message title
if (gender === "Male") {
    alert(`Hi Mr ${name} `);
} else if (gender === "Female") {
    alert(`Hi Ms ${name} `);
} else {
    alert("");
}


//Day 6 Task:

// This function repate question three time
let answerArr = [];
function repeatQuestion() {
    for (let i = 0; i < 3; i++) {
        answerArr[i] = checkAnswer(prompt("Please type your answer here"));
    }
}

// This function to check the answer to the question is one such options (Yes , No , Invalid)
function checkAnswer(answer) {
    if (answer === "Yes") {
        return answer;

    } else if (answer === "No") {
        return answer;

    } else {
        return "invalid";
    }
}
// This function to print all answers
function printAnswer(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Run the code
repeatQuestion();

// Traverse the array 
printAnswer(answerArr);


