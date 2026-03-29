const bankAccount = {
    ownerName: '',
    accountNumber: '',
    balance: 12000,
    deposit() {
        const userConfirm = confirm(`do you want to top up your account? your balance: ${this.balance}`);
        if (userConfirm) {
            this.balance += Number(prompt(`how many?`));
            console.log(`your balance: ${this.balance}`);
        } else {
            console.log(`Okay, have a nice day`);
        }
    },
    withdraw() {
        const userConfirm = confirm(`do you want to withdraw money from the account? your balance: ${this.balance}`);
        if (userConfirm) {
            this.balance -= Number(prompt(`how many?`));
            console.log(`your balance: ${this.balance}`);
        } else {
            console.log(`Okay, have a nice day`);
        }
    }
};
bankAccount.withdraw();
bankAccount.deposit();

const weather = {
    temperature: 12,
    humidity: 66,
    windSpeed: 5,

    obInfo() {
        const userInfo = Number(prompt(`Введіть температуру`));
        this.temperature = userInfo;
        return this.temperature >= 0;  
    },
    obOp() {
        const isAboveZero = this.obInfo();
        if (isAboveZero) {
            console.log("температура вище або дорівнює 0 градусів Цельсія");
        } else {
            console.log("температура нижче 0 градусів Цельсія");
        }
    }
};
weather.obOp();

const user = {
    name: 'yarik',
    email: 'dudaryaroslav42@gmail.com',
    password: 'qwerty1234',
    login() {
        if (this.email.includes("@") && this.password.length >= 6) {
            return 'all is okay';
        } else {
            return 'please, enter valid email n password'
        }
    }
};
console.log(user.login());

const movie = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    rating: 9.3,
    
    isHighRated: function() {
        return this.rating > 8;
    }
};

console.log("назва фільму:", movie.title);
console.log("режисер:", movie.director);
console.log("рік виходу:", movie.year);
console.log("рейтинг:", movie.rating);
console.log("рейтинг вище 8?", movie.isHighRated());

const cart = {
    items: [
        { name: '🍎', price: 50 },
        { name: '🍇', price: 70 },
        { name: '🍋', price: 60 },
        { name: '🍓', price: 110 }
    ],
    getItems() {
        return this.items;
    }, 
    add(product) {
        this.items.push(product);
    }, 
    remove(productName) {
        const index = this.items.findIndex(item => item.name === productName);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },
    clear() {
        for (const item of this.items) {
            this.items = [];
        }
    }, 
    countTotalPrice() {
        let sum = 0;
        for (const item of this.items) {
            sum += this.items.price;
        }
    }, 
};
cart.getItems();
cart.add(prompt(`введіть продукт`));
cart.remove(prompt(`введіть назву продукту для видалення`));
cart.clear();
cart.countTotalPrice();