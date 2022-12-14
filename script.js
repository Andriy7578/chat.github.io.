

var messages = document.getElementById('messages');
var sendButton = document.getElementById('send-btn')
sendButton.addEventListener('click', sendUserMessage);

getMessagesFromServer();

async function getMessagesFromServer() {
    var response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    
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

    await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
        method: "POST",
            body: JSON.stringify({
                Name: userNickname,
                Message: userMessage
            }),
    })

    getMessagesFromServer()
}

