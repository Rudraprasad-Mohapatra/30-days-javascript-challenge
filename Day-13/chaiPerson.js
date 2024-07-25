const chaiPerson = {
    name : "Hitesh Choudhary",
    sayMyName : function (newName) {
            this.name = newName;
            console.log(this.name);
    }
}

module.exports = chaiPerson;