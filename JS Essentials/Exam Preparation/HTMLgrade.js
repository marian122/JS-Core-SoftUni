function solve(examPoints, homeworkCompleted, totalHomework) {
    let grade = 0;
    if (examPoints === 400){
        grade = 6;
    }else {
        let totalPoints = (examPoints / 400) * 90 + (homeworkCompleted / totalHomework) * 10;
        grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);

        if (grade < 3){
            grade = 2;
        } else if(grade > 6){
            grade = 6;
        }
    }
    console.log(grade.toFixed(2));
}
solve(300, 10, 10);