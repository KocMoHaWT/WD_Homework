const ATM = {
    isAuth: false, 
    currentUser: {},
    // all cash available in ATM
    cash: 2000,
    logs: [],
    // all available users
    users: [
        { id: "0000", pin: "000", debet: 0, type: "admin" }, // EXTENDED
        { id: "0025", pin: "123", debet: 675, type: "user" }
    ],
    // authorization
    auth(id, pin) {
        if (!this.isAuth) {
            let user = this.users.find(x => x.id === id);
            if(user) {
                if(user.pin.match(pin)) {
                    console.log("Greetings")
                            this.currentUser = user;
                            this.isAuth = true;
                            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = auth Result = success");
                }
            }
            if (!this.isAuth) {
                console.log('invalid input data');
                this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = auth Result = failure");
            }
        } else  {
            console.log('you already authorized')
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = auth Result = failure");
        }
    },
    // check current debet
    check() {
        if(this.isAuth && this.currentUser.debet >= 0) {
            console.log( 'Your current debet = ' + this.currentUser.debet);
            this.logs.push("Date = " + Date() + "; User = " + this.currentUser.type + "; Action = check; Result = success;");
        }  else {
            console.log('Not authorized');
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = check; Result = failure");
        }
    },
    // get cash - available for user only
    getCash(amount) {
        const user = this.currentUser;
        if(this.isAuth && amount <= user.debet) {
            console.log('ok here is your money');
            user.debet -= amount;
            this.cash -= amount;
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = get cash; Result = success");
        } else {
            console.log('Not authorized or amount more than on your account')
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = get cash; Result = failure");
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        const user = this.currentUser;
        if(this.isAuth && amount > 0 && !this.currentUser.type.match('admin')) {
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = load cash; Result = success");
            user.debet += amount;
            this.cash += amount;
            console.log('thanks, but can more load');

        } else {
            console.log('invalid amount');
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = load cash; Result = failure");
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        if(this.isAuth && this.currentUser.type.match('admin')) {
            this.cash += amount;
            console.log('thanks for food, master');
            this.logs.push("Date = " + Date() + "  User = admin"  + " Action = load ATM cash; Result = success;");
        } else {
            console.log('you are not my master or amount invalid');
            this.logs.push("Date = " + Date() + "  User = admin" + " Action = load ATM cash; Result = failure;");
        }
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if(this.isAuth && this.currentUser.type.match('admin')) {
            for(let i = 0; i < this.logs.length; i++) {
                console.log(this.logs[i]);
            }
            this.logs.push("Date = " + Date() + "  User = admin"  + " Action = get logs; Result = success;");
        }
    },
    // log out
    logout() {
        if(this.isAuth) {
            console.log("goodbye");
            this.isAuth = false;
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = log out; Result = success");
        } else {
            console.log('you are not authorized');
            this.logs.push("Date = " + Date() + "  User = " + this.currentUser.type + " Action = log out; Result = failure");
        }
    }
};
