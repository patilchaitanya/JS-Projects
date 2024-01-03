// Prac Qs1 : Create Class User with properties name and email, and viewData to view
let DATA = "Secret Info";
class Users {
    constructor(name, email) {
    this.name = name;
    this.email = email;
    }
    

    viewData() {
        console.log("data = ", DATA);
    }
}

const s1 = new Users("Chaitanya", "chaitanyathepatil.com");
s1.viewData();
console.log(s1);

//Qs2 : class Admin inherit from userand editData method to allow edit website data.

class Admin extends Users {
    constructor (name, email) {
        super(name, email);
    }

    editData (editData) {
        console.log("data = ", "New data");
    }
}

let admin1 = new Admin("monoj", "monoj.hr@gmail.com");
admin1.editData();