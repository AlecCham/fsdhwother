function gradingStudents(grades) {
    // Write your code here
    //let roundedGrades = [];
    
    let roundedGrades = grades.map(grade => {
        //for (let i = 0; i < grades.length; i++) {
            //let grade = grades[i];
            if (grade >= 38) {
                //calculate reminder from grade on 5 points
                const difference = 5 - (grade % 5);
                if (difference < 3) {
                    grade += difference;
                }
            }
            //populate array with grades after rounding is done.
            return  grade;//roundedGrades.push(grade);
        });
        return roundedGrades;
    }

const gradesInput = [73, 67, 38, 33];

const roundedGrades = gradingStudents([73, 67, 38, 33]);
console.log(roundedGrades); // Correct usage

