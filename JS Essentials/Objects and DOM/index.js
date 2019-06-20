   //Object assign
    let car = {type: "Fiat", model: "500", color: "white"};

    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };

    person.height = 180;
    person['hairColor'] = 'Red';

    //Accessing objects

    let nameLast = person.lastName;
    let ageE = person["age"];
    
    let propertyName = 'weight';
    person[propertyName] = 100;
    
   
    let cat = {
        type: 'cat',
        makeSound: function(){
            console.log('Meow!');
            
        },
        color: 'brown'

    }
    
    let anotherPerson = {
        firstName: "Muro",
        lastName: "Kyuchukov",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    //JSON

    let employee = {
        "employees":[
            {"firstName":"John", "lastName": "Doe"},
            {"firstName":"Anna", "lastName": "Smith"},
            {"firstName":"Peter", "lastName": "Jones"}
        ]
    }

    var obj = JSON.parse(employee);
    var personObj = JSON.stringify(employee);

    
    //DOM

    let getH1Element = document.getElementsByTagName('h1')[0];
    
