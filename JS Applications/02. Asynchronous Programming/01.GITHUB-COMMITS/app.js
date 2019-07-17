function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(handler)
        .then(response => {
            return response.json();
        })
        .then(loadItems)
        .catch(err => {
            let li = document.createElement('li');
                li.textContent += err.message;
                commits.appendChild(li);
        });

    function handler(response) {
        if (response.status > 400){
            throw new Error(`Error: ${response.status} (${response.statusText})`);
        }

        return response;
    }

    function loadItems(data) {
        // let messages = data.map((item) => {
        //     return item.commit.message;
        // });
        //
        // for (const key in messages){
        //     let li = document.createElement('li');
        //     if(messages.hasOwnProperty(key)){
        //         const element = messages[key];
        //         li.innerHTML += `${username}: ${element}`;
        //         commits.appendChild(li);
        //     }
        //
        // }


        let objs = Object.values(data);

        for (const obj of objs) {
            const commit = obj.commit;
            let li = document.createElement('li');
            li.innerHTML += `${commit.author.name}: ${commit.message}`;
            commits.appendChild(li);


        }
    }
}