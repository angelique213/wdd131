
// Activity 1
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
console.log("Activity 2 - gpaPoints:", gpaPoints); 

// Activity 3
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;
console.log("Activity 3 - GPA:", gpa.toFixed(2)); 

// Activity 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
console.log("Activity 4 - shortWords:", shortWords);

// Activity 5
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
console.log("Activity 5 - luckyIndex:", luckyIndex); 
