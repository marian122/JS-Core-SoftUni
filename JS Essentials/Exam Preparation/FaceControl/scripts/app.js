function getData() {
    let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    let peopleInElement = document.querySelector('#peopleIn p');
    let peopleOutElement = document.querySelector('#peopleOut p');
    let blacklistElement = document.querySelector('#blacklist p');

    let peopleInList = [];
    let peopleOutList = [];
    let blackList = [];

    for (let i = 0; i < input.length - 1; i++) {
        let currentPerson = {firstName: input[i].firstName, lastName: input[i].lastName};
        let command = input[i].action;

        if (command === 'peopleIn'){
            let checkBlackListed = blackList.find(x => x.firstName === currentPerson.firstName && x.lastName === currentPerson.lastName);
            if (!checkBlackListed){
                peopleInList.push(currentPerson);
            }
        }
        else if(command === 'peopleOut'){
            let checkInClub = peopleInList.find(p => p.firstName === currentPerson.firstName && p.lastName === currentPerson.lastName);

            if (checkInClub){
                peopleInList.splice(peopleInList.indexOf(checkInClub), 1);
                peopleOutList.push(currentPerson);
            }
        }else if(command === 'blacklist'){
            blackList.push(currentPerson);

            let checkPeopleIn = peopleInList.find(x => x.firstName === currentPerson.firstName && x.lastName === currentPerson.lastName);

            if (checkPeopleIn){
                peopleInList.splice(peopleInList.indexOf(checkPeopleIn), 1);
                peopleOutList.push(currentPerson);
            }

        }
    }
    let sortCriteria = input[input.length - 1]['criteria'];
    let listName = input[input.length - 1]['action'];

    if (sortCriteria === 'firstName' || sortCriteria === 'lastName'){
        if (listName === 'peopleIn'){
            peopleInList.sort((a,b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (listName === 'peopleOut'){
            peopleOutList.sort((a,b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (listName === 'blacklist'){
            blackList.sort((a,b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        }
    }

    peopleInList.forEach(x => peopleInElement.textContent += JSON.stringify(x) + ' ');
    peopleOutList.forEach(x => peopleOutElement.textContent += JSON.stringify(x) + ' ');
    blackList.forEach(x => blacklistElement.textContent += JSON.stringify(x) + ' ');

}