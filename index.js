const { Wechaty } = require('wechaty')

Wechaty.instance() // Singleton
.on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
.on('login',       user => console.log(`User ${user} logined`))
// .on('message',  message => console.log(`Message: ${message}`))
.on('message', async(message) => {
    const contact = message.from()
    const content = message.content()
    const room = message.room()
    console.log(contact);
    console.log(content);
    console.log(room);
    if (room) {
        console.log(`Room: ${room.topic()} Contact: ${contact.name()} Content: ${content}`)
    } else {
        console.log(`Contact: ${contact.name()} Content: ${content}`)
    }
    
    // 不处理自己发的消息
    // if (message.self()) {
    //     return
    // }
    // id: @@fad86837bcb1d03ecf917d40edb4be05ac6ef9dc1b4965d9ca29387ffa6ccd90
    // console.log(contact.payload.id,contact.payload.name);
    // console.log(room.id,room.payload.topic)
    // if(room.payload.topic == 'Family'){
    //     message.say('hello,I am wechaty');
    // }
    // 回复消息
    // if(contact.payload.name == '国外噩梦'){
    //     message.say('hello,I am wechaty');
    //     // message.say('你好，这是微信机器人回复的消息');
    //     // if (/JavaScript|Js|js/.test(content)) {
    //     //     message.say('关注公众号 JavaScript之禅')
    //     // }
    // }
})
.start()