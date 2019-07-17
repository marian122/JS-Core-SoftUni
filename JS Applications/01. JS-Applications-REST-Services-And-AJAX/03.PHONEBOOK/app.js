function attachEvents() {
    clearPhoneBook();
    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', load);

    function load() {
        clearPhoneBook();
        let phonebook = document.getElementById('phonebook');

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                for(let people in data){
                    if (data.hasOwnProperty(people)){
                        const element = data[people];

                        let person = element.person;
                        let phone = element.phone;

                        let li = document.createElement('li');
                        let button = document.createElement('button');
                        button.innerHTML = "Delete";
                        li.innerHTML = `${person}: ${phone}`;
                        li.appendChild(button);
                        phonebook.appendChild(li);

                        button.addEventListener('click', deletePerson);

                        function deletePerson(e) {
                            const currentContact = e.target.parentNode;
                            let contacts = Object.keys(data);
                            let searchedId = '';
                            for (let id of contacts) {
                                if (data[id].person === person && data[id].phone === phone){
                                    searchedId = id;
                                    break;
                                }
                            }

                            currentContact.remove();

                            fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${searchedId}.json`,
                                {method: 'delete',
                                    body: JSON.stringify(searchedId)})
                                .then(response => {
                                    return response.json();
                                });
                        }

                    }
                }

            });
    }

    let createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', create);

    function create() {
        clearPhoneBook();
        let name = document.getElementById('person');
        let number = document.getElementById('phone');

        if (name.value && number.value){
            let current = {
                person: name.value,
                phone: number.value
            };

            fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`,
                {method: 'post',
                    body: JSON.stringify(current)})
                .then(response => {
                    return response.json();
                });
        }

        load();

        name.value = '';
        number.value = '';

    }

    function clearPhoneBook() {
        document.getElementById('phonebook').innerHTML = '';
    }
}

attachEvents();