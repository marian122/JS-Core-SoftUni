function attachEvents() {
    let options = document.getElementById('posts');
    let loadPostsBtn = document.getElementById('btnLoadPosts');
    loadPostsBtn.addEventListener('click', loadPosts);
    let allPosts = [];
    function loadPosts() {
        let fragment = document.createDocumentFragment();
        fetch('https://blog-apps-c12bf.firebaseio.com/posts.json')
            .then(handler)
            .then(data => {
                for (const key in data) {
                    if (data.hasOwnProperty(key)){
                        const element = data[key];
                        allPosts.push(element);
                        let option = document.createElement('option');

                        option.value = element.id;
                        option.innerHTML = element.title;

                        fragment.appendChild(option);
                    }
                }

                options.appendChild(fragment);
            });
    }


    let viewPostsBtn = document.getElementById('btnViewPost');
    viewPostsBtn.addEventListener('click', viewPosts);

    function viewPosts() {
        let postId = options.value;
        let postTitle = document.getElementById('post-title');
        let postBody = document.getElementById('post-body');
        let postComments = document.getElementById('post-comments');
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < allPosts.length; i++) {
            if (allPosts[i].id === postId){
                postTitle.innerHTML = allPosts[i].title;
                postBody.innerHTML = allPosts[i].body;

                fetch('https://blog-apps-c12bf.firebaseio.com/comments.json')
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {

                        for (const key in data){
                            let li = document.createElement('li');

                            if (data.hasOwnProperty(key)) {
                                const element = data[key];

                                if (element.postId === postId) {
                                    li.innerHTML += element.text;
                                    fragment.appendChild(li);

                                }
                            }
                        }
                        postComments.appendChild(fragment);
                    })
                    .catch(handler);

                return;
            }
        }

    }

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.status}: ${response.text}`);
        }

        return response.json();
    }

}

attachEvents();