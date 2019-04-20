/* Author: Malav P. Patel
 * GitHub: http://github.com/patel-malav
 * Title: Alarm System using Browser Notification API.
 * Topic: Priple/Assignment - 17
 */

class Alarm {
    constructor(secs, mins, hours = 0, days = 0, title = 'Alarm') {
        if (typeof secs === 'number') {
            this.time = (((((days * 24) + hours) * 60 + mins) * 60) + secs) * 1000;
            this.timeStr = `${days ? days + ' days ' : ''}${hours ? hours + ':' : ''}${mins}:${secs}`;
            this.title = (title === null) ? 'Alarm' : title;
            this.repete = false;
        } else {
            console.log(typeof secs);
            this.time = secs.time;
            this.timeStr = secs.timeStr;
            this.title = secs.title;
            this.repete = true;
        }
    }

    notify() {
        this.notifcation = new Notification(this.title, {
            body: 'Alarm trutrutruuturturuuturut]4\nClick To Close'
        });
        this.notifcation.onclick = this.completed();
    }

    completed() {
        if (Alarm.completed === null)
            Alarm.completed = (localStorage.getItem('completed') === null) ? [] : JSON.parse(localStorage.getItem('completed'));
        if (Alarm.pending === null)
            Alarm.pending = (localStorage.getItem('pending') === null) ? [] : JSON.parse(localStorage.getItem('pending'));
        console.log(Alarm.completed);
        console.log(Alarm.pending);
        Alarm.updateLists();
        if (Alarm.pending.length !== 0) {
            Alarm.completed.push(Alarm.pending.shift());
        }
        localStorage.setItem('completed', JSON.stringify(Alarm.completed));
        localStorage.setItem('pending', JSON.stringify(Alarm.pending));

        location.reload();
    }

    start() {
        let temp = (localStorage.getItem('pending') === null) ? [] : JSON.parse(localStorage.getItem('pending'));

        if (!this.repete) temp.push(this);

        temp.sort((a, b) => (a.time > b.time) ? 1 : -1);

        localStorage.setItem('pending', JSON.stringify(temp));
        Alarm.updateLists()
        setTimeout(() => {
            this.notify();
        }, this.time);
    }
    static checkAndAskPermission() {
        if (('Notification' in window)) {
            if (Notification.permission === 'granted')
                return true;
            else {
                Notification.requestPermission().then((result) => {
                    if (result === 'granted')
                        location.reload();
                });
                return 'waiting';
            }
        }
        return false;
    }

    static updateLists() {
        let completed = document.getElementById('completed').lastElementChild,
            pending = document.getElementById('pending').lastElementChild;

        Alarm.completed = (localStorage.getItem('completed') === null) ? [] : JSON.parse(localStorage.getItem('completed'));
        Alarm.pending = (localStorage.getItem('pending') === null) ? [] : JSON.parse(localStorage.getItem('pending'));

        let html = '';
        for (let alrm of Alarm.completed) {
            html += `<li>Title : ${alrm.title}<br>Time : ${alrm.timeStr}</li>`;
        }
        completed.innerHTML = html;
        html = '';
        for (let alrm of Alarm.pending) {
            html += `<li>Title : ${alrm.title}<br>Time : ${alrm.timeStr}</li>`;
        }
        pending.innerHTML = html;
    }
}

window.onload = function() {
    let result = Alarm.checkAndAskPermission();
    let body = document.getElementsByClassName('container')[0];
    if (result === true) {
        console.log('OK start App');
        Alarm.pending = (localStorage.getItem('pending') === null) ? [] : JSON.parse(localStorage.getItem('pending'));

        // console.log(Alarm.pending);
        if (Alarm.pending.length !== 0) {
            for (let obj of Alarm.pending) {
                new Alarm(obj).start();
            }
        }

        Alarm.updateLists();
        document.getElementById('add-alarm').addEventListener('click', () => {
            let inputs = [];
            let collected = document.querySelectorAll('input');
            let title = collected[0].value;
            title = (title === '') ? 'Alarm' : title;
            collected.forEach((ele) => {
                if (ele.value === '')
                    inputs.push(0);
                else
                    inputs.push(parseInt(ele.value));
            });
            inputs.shift();
            new Alarm(...inputs, title).start();
        });
    } else if (result === 'waiting') {
        body.innerHTML = `<h1>Plz Give Notification Permission.</h1>`
    } else {
        body.innerHTML = `<h1>Browser Does Not Support Notifications So Therefore Cannot Run App.</h1>`
    }
}
