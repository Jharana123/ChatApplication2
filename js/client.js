const socket = io('http://localhost:6000');
const form=document.getElementById('send-container')
const messageInput2 = document.getElementById('messageInput');
const messageContainer=document.querySelector('.container');

const append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

}
const name=prompt("Enter your name to join");
// socket.emit(`new-user-joined`, name);

socket.on('user-joined',data=>{
    append(`${name} joined the chat`,right);
})
