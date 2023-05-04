const io=require('socket.io')(6000);
const users={}

io.on('connection',socket=>{
    socket.on('new-user-joined',(name)=>{
        console.log(`new user`,name);
        console.log("hello");
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    })
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users['socket.id']});
    })
})
