//accessing build in module just requires to access the object without file path
// console.log('built in module');
const os = require('os');

//the methods are allready defined in the os module saving the value in variable and using it later 
const user = os.userInfo();
console.log(user);

//returns the system uptime in seconds, directly printing on the screen
console.log(`this system is running from ${os.uptime()} s`);

//getting info about current system and saving it in object 

const userInfo = {
    osName:os.type(),
    ostype:os.release(),
    freeMemory:os.freemem(),
    totalMemory: os.totalmem()
}

console.log(userInfo);