function loginUser(url, name, pwd) {
    let temp = fakeInput([url, name, pwd], [], 1200);

    temp.then((obj) => {
        if(obj.inputs.length !== 0)
            return fakeInput(obj.inputs, obj.collected, 800);
        else
            return fakeAuth(obj.collected[0],obj.collected[1],obj.collected[2]);
    }).then((obj) => {
        if(obj.inputs.length !== 0)
            return fakeInput(obj.inputs, obj.collected, 1800);
        else
            return fakeAuth(obj.collected[0],obj.collected[1],obj.collected[2]);
    }).then((obj) => {
        if(obj.inputs.length !== 0)
            return fakeInput(obj.inputs, obj.collected, 800);
        else
            return fakeAuth(obj.collected[0],obj.collected[1],obj.collected[2]);
    });
    return temp;
}

function fakeAuth(url, name, pwd) {
    // console.log(url, name, pwd);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url && name === 'malav' && pwd === 'admin') {
                console.log(`Connection to ${url} OK\nWelcome ${name}\nPassword: ${pwd} OK.`);
                resolve('OK');
            }
            else {
                reject('wrong password');
            }
        }, 3500);
    });
}

function fakeInput(inputs, collected,time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let temp = inputs.shift();
            console.log(temp);
            collected.push(temp);
            resolve({inputs, collected});
        }, time);
    });
}

console.log('Welcome to Ftp connect.');
loginUser('www.filezilla.com', 'malav', 'admin').then((msg) => {
    if(msg === 'OK')
        console.log('Do FTP STUFF NOW\nAaaaaaaaaaaaaaaaaaa\nAhahaaahahahahhahahaha');
}).catch((msg) => console.log(msg));
