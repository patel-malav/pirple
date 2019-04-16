function User(first, last, email, password) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.password = password;
    this.lists = {
        default: ["kill John Wick's Dog", "Book Tickect to Antartica", "Book a Shelter", "Load a Tons of Food and Movie", "Hope Jhon Wick Does not find you", "You are Dead John Killed You"],
        another: ["list"],
        anotherOne: ["1"],
        lol: ["lol"],
    };
    this.completed = {};
}

function App() {
    this.toggle = function(from, to, type, and = null, nxtype = "view") {
        this[`${from}${type.charAt(0).toUpperCase()}${type.slice(1)}`].style.display = "none";
        this[`${to}${type.charAt(0).toUpperCase()}${type.slice(1)}`].style.removeProperty("display");
        if (and && Array.isArray(and)) {
            and.forEach((ele, idx) => {
                if (ele === "list") this.updateList();
                if (ele === "task") this.updateTask();
                this[`${ele}${nxtype.charAt(0).toUpperCase()}${nxtype.slice(1)}`].style.removeProperty("display");
            });
        }
    };
    this.checkMark = function(elem) {
        let item = elem.parentElement.firstElementChild.innerHTML;
        let list = this.taskDisplayTitle.innerHTML;
        if (this.user.completed[list]) {
            console.log(item);
            if (this.user.completed[list].indexOf(item) === -1)
                this.user.completed[list].push(item);
        } else {
            this.user.completed[list] = [item];
        }
        this.updateTask();
        this.modifyUsers();
    };
    this.uncheckMark = function(elem) {
        let item = elem.parentElement.firstElementChild.innerHTML;
        let list = this.taskDisplayTitle.innerHTML;
        this.user.completed[list].splice(this.user.completed[list].indexOf(item), 1);
        this.updateTask();
        this.modifyUsers();
    };
    this.delete = function(elem, type) {
        if (type === "list" && confirm("Are You Sure You Want to Delete\n" + elem.parentElement.firstElementChild.innerHTML)) {
            delete this.user.lists[elem.parentElement.firstElementChild.innerHTML];
            this.modifyUsers();
            this.updateList();
        }
        if (type === "task" && confirm("Are You Sure You Want to Delete\n" + elem.parentElement.firstElementChild.innerHTML)) {
            let arr = this.user.lists[this.taskDisplayTitle.innerHTML];
            arr.splice(arr.indexOf(elem.parentElement.firstElementChild.innerHTML), 1);
            this.modifyUsers();
            this.updateTask();
        }
    };
    this.modifyUsers = function() {
        localStorage.users = JSON.stringify(this.users);
        console.log("Data in Memory Updated @" + new Date());
    };
    this.addListeners = function() {
        document.getElementById("welcome-signup-btn").addEventListener("click", () => {
            this.toggle("welcome", "register", "screen");
        });
        document.getElementById("welcome-login-btn").addEventListener("click", () => {
            this.toggle("welcome", "login", "screen");
        });
        document.getElementById("login-submit-btn").addEventListener("click", () => {
            let temp = this.checkLogin();
            if (temp) {
                console.log("LOGIN : ACCEPTED");
                this.user = temp;
                this.toggle("login", "home", "screen", ["user", "list"]);
            }
        });
        document.getElementById("register-submit-btn").addEventListener("click", () => {
            let temp = this.checkRegister();
            if (temp) {
                console.log("REGISTER : ACCEPTED");
                this.users.push(new User(temp[0], temp[1], temp[2], temp[3]));
                this.user = this.users[this.users.length - 1];
                this.modifyUsers();
                this.toggle("register", "home", "screen", ["user", "list"]);
            }
        });
        document.getElementById("user-settings-btn").addEventListener("click", () => {
            this.userView.style.display = "none";
            this.listView.style.display = "none";
            this.taskView.style.display = "none";
            this.updateSettings();
            this.settingsView.style.removeProperty("display");
        });
        document.getElementById("user-logout-btn").addEventListener("click", () => {
            this.modifyUsers();
            delete this.user;
            this.userView.style.display = "none";
            this.listView.style.display = "none";
            this.taskView.style.display = "none";
            this.toggle("home", "welcome", "screen");
        });
        document.getElementById("settings-submit-btn").addEventListener("click", () => {
            let temp = this.checkSettings();
            if (temp) {
                console.log("Change : ACCEPTED");
                [this.user.first, this.user.last, this.user.email, this.user.password] = temp;
                window.alert("Settings Changed..");
                this.toggle("settings", "user", "view", ["list"]);
            }
        });
        document.getElementById("settings-cancel-btn").addEventListener("click", () => {
            this.toggle("settings", "user", "view", ["list"]);
        });
        document.getElementById("list-add-btn").addEventListener("click", () => {
            let newlistName = prompt("Enter Name For New List");
            if (newlistName) {
                this.user.lists[newlistName] = [];
                this.modifyUsers();
                this.updateList();
            }
        });
        document.getElementById("task-add-btn").addEventListener("click", () => {
            let newtaskName = prompt("Enter New Task");
            if (newtaskName) {
                this.user.lists[this.taskDisplayTitle.innerHTML].push(newtaskName);
                this.modifyUsers();
                this.updateTask();
            }
        });
        document.getElementById("task-back-btn").addEventListener("click", () => {
            this.toggle("task", "list", "view");
        });
    };
    this.start = function() {
        console.log(`Started List App @ ${new Date()}`);

        let authour = "Malav", title = "To-Do List", defaultEmail = "patelmalav64@gmail.com", defaultFirst = "Malav",
        defaultLast = "Patel", defaultPass = "Password";

        function generateInput(type, label, placeholder, errorID , defaultErr, required, style = "a2", customclass = null) {
            return `<label class="field a-field a-field_${style} page__field ${customclass}">
            <input class="field__input a-field__input" type="${type}" placeholder="e.g. ${placeholder}" ${required ? required : null}>
            <span class="a-field__label-wrap"><span class="a-field__label">${label}</span></span></label>
            <span class="error" id="${errorID}-error" style="display:none;"> ${defaultErr}</span>`;
        };
        function generateButton(id, text, customclass = "btn") {
            return `<button class="${customclass}" type="button" id="${id}-btn">${text}</button>`;
        }
        document.getElementsByTagName("body")[0].innerHTML = `
        <div class="container">
            <div class="page" id="welcome-screen" style="display:none;">
                <h1>${authour}'s ${title} App</h1>
                <hr>
                <h2>Made Exclusively By The Not So Great Malav P Patel</h2>
                <h3>Add Tasks</h3><h3>Edit Tasks</h3><h3>New List ...etc</h3>
                ${generateButton("welcome-signup", "Sign up")}
                ${generateButton("welcome-login", "Log in")}
            </div>
            <div class="page" id="login-screen" style="display:none;">
                <h1>Login To My ${title}</h1>
                <hr>
                ${generateInput("email", "E-mail", defaultEmail, "login-email", "Enter Correct Email", true, "a3")}
                <br>
                ${generateInput("password", "Password", defaultPass, "login-password", "Enter Correct Password", true, "a2")}
                <br>
                ${generateButton("login-submit", "Login")}
                <div id="login-error" style="display:none;">
                    <h5 class="error">Wrong Email or Password</h5>
                </div>
            </div>
            <div class="page" id="register-screen" style="display:none;">
                <h1>Register To My To-Do List</h1>
                <hr>
                ${generateInput("text", "First Name", defaultFirst, "register-name", "Name Required", true, "a2", "name")}
                ${generateInput("text", "Last Name", defaultLast, "register-last", "Name Not Appropriate", false, "a2", "name")}
                <br>
                ${generateInput("email", "E-mail", defaultEmail, "register-email", "Email Required", true, "a3")}
                <br>
                ${generateInput("password", "Password", defaultPass, "register-password", "Password Required", true, "a2")}
                <br>
                ${generateInput("password", "Retype", "Again", "register-retype", "Enter Password Again", true, "a2")}
                <br>
                <div>
                    <input type="checkbox" value="accepted" required>
                    <span class="a-field__label">I agree to Terms & Conditons.</span>
                    <span class="error" id="register-accept-error" style="display:none;"> Plz Accept T&C.</span>
                </div>
                <br>
                ${generateButton("register-submit", "Register")}
            </div>
            <div class="page" id="home-screen" style="display:none;">
                <div id="user-view" style="display:none;">
                    <h1 id="user-name">Default Name</h1>
                    ${generateButton("user-settings", "Account Settings", "btn-plus")}
                    ${generateButton("user-logout", "Log out")}
                </div>
                <div id="settings-view" style="display:none;">
                    <h1>Setting</h1>
                    <hr>
                    ${generateInput("text", "First Name", defaultFirst, "settings-name", "Name Required", false, "a2", "name")}
                    ${generateInput("text", "Last Name", defaultLast, "settings-last", "Name Not Appropriate", false, "a2", "name")}
                    <br>
                    ${generateInput("email", "E-mail", defaultEmail, "settings-email", "Email Required", false, "a3")}
                    <br>
                    ${generateInput("password", "Password", defaultPass, "settings-password", "Password Required", false, "a2")}
                    <br>
                    ${generateInput("password", "Retype", "Again", "settings-retype", "Enter Password Again", false, "a2")}
                    <br>
                    ${generateButton("settings-submit", "Update")}
                    ${generateButton("settings-cancel", "Cancel")}
                </div>
                <div id="list-view" style="display:none;">
                    <h2>My Lists</h2>
                    ${generateButton("list-add", "Add New", "btn-plus")}
                    <hr>
                    <ul class="list"></ul>
                </div>
                <div id="task-view" style="display:none;">
                    <h2>Generic List Name</h2>
                    ${generateButton("task-add", "Add New", "btn-plus")}
                    ${generateButton("task-back", "Back", "btn-plus")}
                    <hr>
                    <ul class="list"></ul>
                </div>
            </div>
        </div>
        `;

        // Get Stored Users
        if (data = window.localStorage.getItem("users"))
            this.users = JSON.parse(data);
        else {
            window.localStorage.setItem("users", "[]");
            this.users = [];
        }

        // TEMP ==================================
        // this.users.push(new User("admin", null,"admin@to.do","admin"));
        // console.log(this.users);
        // TEMP ==================================

        // Set App Properties of App with all available screen elements.
        this.welcomeScreen = document.getElementById("welcome-screen");
        this.loginScreen = document.getElementById("login-screen");
        this.registerScreen = document.getElementById("register-screen");
        this.homeScreen = document.getElementById("home-screen");

        this.userView = document.getElementById("user-view");
        this.settingsView = document.getElementById("settings-view");
        this.listView = document.getElementById("list-view");
        this.taskView = document.getElementById("task-view");

        this.nameDisplayUser = document.getElementById("user-name");
        this.listDisplayTitle = document.querySelector("#list-view > h2");
        this.listDisplayList = document.querySelector("#list-view > ul");

        this.taskDisplayTitle = document.querySelector("#task-view > h2");
        this.taskDisplayList = document.querySelector("#task-view > ul");
        // Start up funtions
        this.addListeners();
        // Show Welcome Screen
        this.welcomeScreen.style.removeProperty("display");
    };

    this.updateList = function() {
        this.nameDisplayUser.innerHTML = this.user.first;
        let text = "";
        for (let key in this.user.lists) {
            text += `<li><span onclick="app.updateTask(this);">${key}</span> <small onclick="app.changeList(this);">edit</small> <small onclick="app.delete(this, 'list');">delete</small></li>`;
        }
        this.listDisplayList.innerHTML = text;
    };

    this.changeList = function(elem) {
        let newval = prompt("Enter New Name for List");
        if (newval) {
            let temp = elem.parentElement.firstElementChild.innerHTML;
            if (temp !== newval) {
                this.user.lists[newval] = this.user.lists[temp];
                delete this.user.lists[temp];
                temp = newval;
                this.updateList();
                this.modifyUsers();
            }
        }
    };

    this.updateTask = function(elem = null) {
        if (elem) {
            this.taskDisplayTitle.innerHTML = elem.innerHTML;
            this.toggle("list", "task", "view");
        }

        let tocross = this.user.completed[this.taskDisplayTitle.innerHTML] ? this.user.completed[this.taskDisplayTitle.innerHTML] : [];
        let text = "";
        this.user.lists[this.taskDisplayTitle.innerHTML].forEach((ele, idx) => {
            if (tocross.indexOf(ele) === -1)
                text += `<li><span>${ele}</span> <small onclick="app.checkMark(this)">check</small> <small onclick="app.changeTask(this);">edit</small> <small onclick="app.delete(this, 'task')">delete</small></li>`;
            else {
                text += `<li><span class="check-mark">${ele}</span> <small onclick="app.uncheckMark(this)">uncheck</small> <small onclick="app.changeTask(this);">edit</small> <small onclick="app.delete(this, 'task')">delete</small></li>`
            }
        });
        this.taskDisplayList.innerHTML = text;
    };

    this.changeTask = function(elem) {
        let newval = prompt("Enter New Name for List");
        if (newval) {
            let temp = elem.parentElement.firstElementChild.innerHTML;
            if (temp !== newval) {
                let arr = this.user.lists[this.taskDisplayTitle.innerHTML];
                arr[arr.indexOf(temp)] = newval;
                temp = newval;
                this.updateTask();
                this.modifyUsers();
            }
        }
    };

    this.updateSettings = function() {
        let nodes = document.querySelectorAll("#settings-view input");
        nodes[0].value = this.user.first;
        nodes[1].value = this.user.last;
        nodes[2].value = this.user.email;
        nodes[3].value = this.user.password;
        nodes[4].value = this.user.password;
    };

    this.checkLogin = function() {
        console.log("LOGIN ATTEMPT");
        let inputs = [];
        document.querySelectorAll("#login-screen input").forEach((ele, idx) => {
            inputs.push(ele.value);
        });
        let user = this.users.filter((ele, idx) => ele.email === inputs[0] && ele.password === inputs[1]);
        if (!user.length) {
            let temp = document.getElementById("login-error");
            temp.style.removeProperty("display");
            setTimeout(() => {
                temp.style.display = "none";
            }, 2000);
            return false;
        } else {
            return user[0];
        }
    };

    this.checkRegister = function() {
        let reportErr = function(field, message) {
            let temp = document.getElementById(`register-${field}-error`);
            temp.innerText = " " + message;
            temp.style.removeProperty("display");
            setTimeout(() => {
                temp.style.display = "none";
            }, 1000);
            return false;
        }
        let inputs = [];
        let selection = document.querySelectorAll(`#register-screen input`);
        selection.forEach((ele, idx) => {
            inputs.push(ele.value);
        });
        if (selection[5].checked) {
            if (!/^[a-zA-Z ]+$/.test(inputs[0])) {
                return reportErr("name", "Name in not Appropriate.");
            } else if (inputs[3] && inputs[3].length < 8) {
                return reportErr("password", "Password Must be more than 8 characters.")
            } else if (inputs[4] && inputs[4].length < 8) {
                return reportErr("retype", "Password Must be more than 8 characters.");
            } else if (inputs[4] !== inputs[3]) {
                return reportErr("retype", "Password's Must Match.");
            } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[2])) {
                return reportErr("email", "Email is not Appropriate.");
            } else {
                let user = this.users.filter((ele, idx) => ele.email === inputs[2]);
                if (!user.length) {
                    return inputs;
                } else {
                    return reportErr("email", "Email is Already Registered.");
                }
            }
        } else {
            temp = selection[5];
            selection[5].nextElementSibling.style.backgroundColor = "#dd5d5d";
            document.getElementById("register-accept-error").style.removeProperty("display");
            return false;
        }
    };

    this.checkSettings = function() {
        let reportErr = function(field, message) {
            let temp = document.getElementById(`settings-${field}-error`);
            temp.innerText = " " + message;
            temp.style.removeProperty("display");
            setTimeout(() => {
                temp.style.display = "none";
            }, 1000);
            return false;
        }
        let inputs = [];
        let selection = document.querySelectorAll(`#settings-view input`);
        selection.forEach((ele, idx) => {
            inputs.push(ele.value);
        });
        if (inputs[0] && !/^[a-zA-Z ]+$/.test(inputs[0])) {
            return reportErr("name", "Name in not Appropriate.");
        } else if (inputs[3] && inputs[3].length < 8) {
            return reportErr("password", "Password Must be more than 8 characters.")
        } else if (inputs[4] && inputs[4].length < 8) {
            return reportErr("retype", "Password Must be more than 8 characters.");
        } else if (inputs[3] && inputs[4] && inputs[4] !== inputs[3]) {
            return reportErr("retype", "Password's Must Match.");
        } else if (inputs[2] && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[2])) {
            return reportErr("email", "Email is not Appropriate.");
        } else {
            if (this.user.email !== inputs[2]) {
                let user = this.users.filter((ele, idx) => ele.email === inputs[2]);
                if (!user.length) {
                    return inputs;
                } else {
                    return reportErr("email", "Email is Already Registered.");
                }
            } else {
                return inputs;
            }
        }
    };
}

let app = new App();
let temp;
document.onload = app.start();
