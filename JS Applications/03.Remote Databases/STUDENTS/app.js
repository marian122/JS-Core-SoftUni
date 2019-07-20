function myFunc() {
    let tbody = document.getElementsByTagName('tbody')[0];
    let username = 'guest';
    let password = 'guest';
    let authString = `${username}:${password}`;
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(authString));

    fetch(`https://baas.kinvey.com/appdata/kid_r1etXAaZB/students`, {method: 'GET', headers: headers})
        .then(handler)
        .then(data => {
            let counter = 0;
            for (let obj in data) {
                counter++;
                let student = data[obj];
                let tr = document.createElement('tr');

                let tdID = document.createElement('td');
                let tdFirstName = document.createElement('td');
                let tdLastName = document.createElement('td');
                let tdFacNumber = document.createElement('td');
                let tdGrade = document.createElement('td');


                tdID.textContent = counter;
                tdFirstName.textContent = student.FirstName;
                tdLastName.textContent = student.LastName;
                tdFacNumber.textContent = student.FacultyNumber;
                tdGrade.textContent = student.Grade;

                tr.appendChild(tdID);
                tr.appendChild(tdFirstName);
                tr.appendChild(tdLastName);
                tr.appendChild(tdFacNumber);
                tr.appendChild(tdGrade);

                tbody.appendChild(tr);

            }
        });

    function handler(response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`)
        }

        return response.json();
    }
}



myFunc();