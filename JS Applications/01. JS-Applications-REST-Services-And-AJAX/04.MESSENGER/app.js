function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json';
    let name = document.getElementById('author');
    let content = document.getElementById('content');
    let messagesDisplay = document.getElementById('messages');

    let sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', send);

    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refresh);

    function send() {
        let author = name.value;
        let message = content.value;
        console.log(message);

        if (author && message){

            let current = {
                author,
                message
            };

            messagesDisplay.textContent += `${author}: ${message}\n`;

            fetch(url,
                {method: 'post',
                    body: JSON.stringify(current)})
                .then(response => {
                    return response.json();
                });
        }

        name.value = '';
        content.value = '';

    }


    function refresh() {
        messagesDisplay.textContent = '';

        fetch(url)
            .then(request => request.json())
            .then(data => {
                const currentMessages = Object.values(data);

                for (const message of currentMessages){
                    const author = message.author;
                    const content = message.content;
                    messagesDisplay.textContent += `${author}: ${content}\n`;
                }
            });
    }
}

attachEvents();