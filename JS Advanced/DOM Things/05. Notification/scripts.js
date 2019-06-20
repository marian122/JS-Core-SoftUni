function notify(message) {
    let getNotifietELement = document.getElementsByTagName('button');
    let resultNotification = document.getElementById('notification');

    if (getNotifietELement){
        resultNotification.style.display = 'block';
        resultNotification.textContent = message;
        setTimeout(() => resultNotification.style.display = 'none', 2000);


    }
}