
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




