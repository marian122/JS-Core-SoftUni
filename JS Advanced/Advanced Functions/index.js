function solve(name, age, weight, height) {

    age = Number(age);
    weight = Number(weight);
    height = Number(height);

    let person = {};

    person.name = name;

    person.personalInfo = {
        age: age,
        weight: weight,
        height: height
    };

    person.BMI = Math.round(weight / (Math.pow(height, 2) / 10000));

    if (person.BMI < 18.5){
        person.status = 'underweight';
    }
    if (person.BMI >= 18.5 && person.BMI < 25){
        person.status = 'normal';
    }
    if(person.BMI >= 25 && person.BMI < 30){
        person.status = 'overweight';
    }
    if (person.BMI >= 30){
        person.status = 'obese';
        person.recommendation = 'admission required';
    }

    return person;

}

solve('Peter', 29, 75, 182);