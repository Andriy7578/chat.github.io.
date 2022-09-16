

var messages = document.getElementById('messages');
getMessagesFromServer();


async function getMessagesFromServer() {
    var response = await fetch("https://fchatiavi.herokuapp.com/get/andriy/?offset=0&limit=10");

    response = await response.json();


    var allMessagesHTML = '';
    for(var i = 0; i < response.length; i++) {
        var messageData = response[i];

        var message = `
        <div class="message">
                <div class="message-nickname">${messageData.Name}</div>
                <div class="message-text">${messageData.Message}</div>
            </div>
        `

        allMessagesHTML = allMessagesHTML + message;
    }

    message.innerHTML = allMessagesHTML;
}

async function sendUserMessage() {
    var userNickname = document.getElementById('nickname-input').value;
    var userMessage = document.getElementById('message-input').value;


    if(userNickname.length === 0) {
        alert('Ти повинен ввести імя');
        return;
    }


    if(userMessage.length === 0) {
        alert('Ти повинен ввести повідомленя');
        return;
    }

    await fetch("https://fchatiavi.herokuapp.com/send/andriy/", {
        method: "POST",
            body: JSON.stringify({
                Namae: userNickname,
                Message: userMessage
            }),
    })
}


// fetch ("https://fchatiavi.herokuapp.com/send/andriy/?offset=0&limit=10", {
//     method: "POST",
//     body: JSON.stringify({
//         Nmae: "Andriy",
//         Message: "hello chat"
//     }),
// });


// fetch ("https://fchatiavi.herokuapp.com/send/andriy/", {
//     method: "POST",
//     body: JSON.stringify({
//         Name: "Andriy",
//         Message: "hello chat"
//     }),
// });