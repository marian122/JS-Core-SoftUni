function solve() {
    let input = document.getElementsByTagName('input');
    let jsFundamentals = input[0];
    let jsAdvanced = input[1];
    let jsApplications = input[2];
    let jsWeb = input[3];
    let onlineForm = input[5];

    let myCourses = document.querySelector('#myCourses > div.courseBody > ul');
    let price = document.querySelector('#myCourses > div.courseFoot > p');

    let jsFundPrice = 170;
    let jsAdvancedPrice = 180;
    let jsAppsPrice = 190;
    let jsWebPrice = 490;

    let totalPrice = 0;
    let courses = [];

    function signUp() {

        if (jsAdvanced.checked && jsFundamentals.checked) {
            jsAdvancedPrice -= jsAdvancedPrice * 0.1;
            totalPrice = jsFundPrice + jsAdvancedPrice;

            courses.push('JS-Fundamentals');
            courses.push('JS-Advanced');

            if (jsApplications.checked){
                totalPrice += jsAppsPrice;
                totalPrice -= totalPrice * 0.06;
                courses.push('JS-Applications');

                if (jsWeb.checked){
                    totalPrice += jsWebPrice;
                    courses.push('JS-Web');
                }
            }
        }else{
            if (jsFundamentals.checked){
                totalPrice += jsFundPrice;
                courses.push('JS-Fundamentals');
            }
            if (jsAdvanced.checked){
                totalPrice += jsAdvancedPrice;
                courses.push('JS-Advanced');
            }
            if (jsApplications.checked){
                totalPrice += jsAppsPrice;
                courses.push('JS-Applications');
            }
            if (jsWeb.checked){
                totalPrice += jsWebPrice;
                courses.push('JS-Web');
            }
        }
        if (jsAdvanced.checked && jsFundamentals.checked && jsApplications.checked && jsWeb.checked){
            courses.push('HTML and CSS');
        }

        if (onlineForm.checked){
            totalPrice -= totalPrice * 0.06;
        }

        for (let course of courses){
            let li = document.createElement('li');
            li.textContent = course;
            myCourses.appendChild(li);
        }
        price.textContent = `Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`;

    }

    let button = document.querySelector('button');
    button.addEventListener('click', signUp);
}

solve();