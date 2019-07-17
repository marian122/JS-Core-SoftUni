function loadRepos() {
      const reposList = document.getElementById('res');

      const parseRepo = ({html_url, full_name}) => {
         return {link: html_url, name: full_name}
      };

      const toDomElement = ({name, link}) => {
         const listItem = document.createElement('li');
         const linkItem = document.createElement('a');
         linkItem.href = link;
         linkItem.innerHTML = name;

         listItem.appendChild(linkItem);

         return listItem;
      };


      const handleResponse = function () {
         
         if (this.readyState < 4){
            return;
         }
         const repos = JSON.parse(this.response);


         repos.map(parseRepo)
             .map(toDomElement)
             .forEach(el => {
                  reposList.appendChild(el);
             });
      };

      const handleClick = function (ev) {
         const xhr = new XMLHttpRequest();
         xhr.onreadystatechange = handleResponse;

         xhr.open("GET", "https://api.github.com/users/testnakov/repos", true);
         xhr.send();

         ev.preventDefault();
         return false;
      };

   document.getElementsByTagName('button')[0]
       .addEventListener('click', handleClick);
}