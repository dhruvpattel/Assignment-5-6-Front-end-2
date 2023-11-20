class Car {
    constructor(brand,model,year,color,price,gas) {
        this.brand=brand;
        this.model=model;
        this.year=year;
        this.color=color;
        this.price=price;
        this.gas=gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand:${this.brand},Model:${this.model}, Year: ${this.year},Color:${this.color}, Price: ${this.price}`);
    }

    race(turns) {
        const currentYear=new Date().getFullYear();
        for (let turn=1; turn<turns;turn++) {
            let gasLoss = 5;
            if (this.year!==currentYear) {
                const yearsOld=currentYear-this.year;
                gasLoss+=yearsOld;
            }
            this.gas-=gasLoss;
            console.log(`Turn ${turn}:${this.brand} ${this.model} -Gas remaining:${this.gas} liters`);
            if (this.gas <= 0) {
                console.log(`${this.brand}${this.model} ran out of gas!`);
                break;
            }
        }
    }
}

// Creating Car instances
const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// Invoking honk method for each car
car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

// Racing the cars for 7 turns
console.log("\nRacing begins!");
car1.race(7);
car2.race(7);
car3.race(7);
car4.race(7);
car5.race(7);
car6.race(7);
