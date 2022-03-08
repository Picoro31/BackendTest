
class Order {
    constructor(no,name,type,buysale,price,quantity,total) {
        this.no = no;
        this.name = name;
        this.type = type;
        this.buysale = buysale;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
    }
}

class login {
    constructor(username, password, img, email) {
        this.username = username;
        this.password = password;
        this.img = img;
        this.email = email;
    }
}

class updated {
    constructor(id, type, pname, price, volume, days, detail, pimg ) {
        this.id = id;
        this.type = type;
        this.pname = pname;
        this.price = price;
        this.volume = volume;
        this.days = days;
        this.detail = detail;
        this.pimg = pimg;
        
    }
}

class usermail {
    constructor(from, to, subject, text) {
        this.from = from; 
        this.to = to;
        this.subject= subject;
        this.text = text;
    }
}

module.exports = {
    Order: Order,
    login: login,
    updated: updated,
    usermail: usermail
}