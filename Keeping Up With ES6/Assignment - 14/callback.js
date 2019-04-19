let intro = 'Welcome to Ftp connect.', login = 'Remote adress to Ftp server : ', user = 'User : ',password = 'Password : ',
    sucesses = 'Your\'e connection is established', failure = 'failed password authentication', greet = 'Welcome Mr. ';

// authentication function.
function fakeAuth(username, pwd, callBack) {
    setTimeout(() => {
        if(username === 'malav', pwd === 'admin') {
            callBack(greet + username, 200);
        }
    } , 3500);
}

// print after a delay.
function print(str, time) {
    setTimeout(() => {
        console.log(str);
    }, time);
}

// fake input delay.
function fakeInput(inputs, time, collected, callBack, callBack1) {
    if(inputs.length === 0) {
        console.log("Process Login.");
        callBack1(collected[1], collected[2], print);
    }
    else {
        setTimeout(() => {
            let temp = inputs.shift();
            console.log(temp);
            collected.push(temp.split(':')[1].replace(' ', ''));
            callBack(inputs, time, collected,callBack, callBack1);
        }, time);
    }
}

// login a user.
function loginUser(input1, input2, input3, callBack1, callBack2) {
    callBack1([login + input1, user + input2, password + input3] , 700, [], callBack1, callBack2);
}

// A function to login to a ftp simulation with fake input and fake authentication delay.
console.log(intro);
loginUser('www.filezilla.com', 'malav', 'admin', fakeInput, fakeAuth);
