var x = prompt("Inter your marks between 0-100");

if (x < 0) {
    document.write("Please enter your marks between 0-100");
} else if (x == 0 || x <= 59) {
    document.write("Sorry ! you are failed");
} else if (x == 60 || x <= 64) {
    document.write("You are pass and your grade is D");
} else if (x == 65 || x <= 69) {
    document.write("You are pass and your grade is D+");
} else if (x == 70 || x <= 74) {
    document.write("You are pass and your grade is C");
} else if (x == 75 || x <= 79) {
    document.write("You are pass and your grade is C+");
} else if (x == 80 || x <= 84) {
    document.write("You are pass and your grade is B");
} else if (x == 85 || x <= 89) {
    document.write("You are pass and your grade is B+");
} else if (x == 90 || x <= 94) {
    document.write("You are pass and your grade is A");
} else if (x == 95 || x <= 100) {
    document.write("You are pass and your grade is A+");
} else {
    document.write("Please enter your marks between 0-100");
}
