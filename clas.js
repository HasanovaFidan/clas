class Car {
    constructor(brand, model, color, year, speed, fuelCapacity, km, fuelFor1Km, currentFuel) {
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year;
        this.speed = speed
        this.fuelCapacity = fuelCapacity
        this.km = km
        this.fuelFor1Km = fuelFor1Km
        this.currentFuel = currentFuel
    }

    showInfo() {
        return `
        Brand: ${this.brand}
        Model: ${this.model}
        Rəng: ${this.color}
        İl: ${this.year}
        Sürət: ${this.speed}
        Bak: ${this.fuelCapacity}L
        Getdiyi Yol: ${this.km} km
        1 Km Üçün benzin: ${this.fuelFor1Km}L
        indiki benzin: ${this.currentFuel}L`
    }

    addFuel(yanacaq) {
        if (this.currentFuel + yanacaq > this.fuelCapacity) {
            return "Yanacaq çənində yetəri yer yoxdu"
        } else {
            this.currentFuel = this.currentFuel + yanacaq;
            return "Yanacaq uğurla əlave edildi"
        }
    }

    drive(yol) {
        const requiredFuel = yol * this.fuelFor1Km
        if (requiredFuel > this.currentFuel) {
            return "Yeterri qederr yanacaq yoxdur"
        } 
        else {
            this.km = this.km + yol
            this.currentFuel = this.currentFuel - requiredFuel;
            console.log(this.showInfo())
            return `
        Ünvana çatdiq`
        }
    }
}


let masin = new Car("supraaa", "MK4", "Orange", 1993, 321, 80, 54000, 0.2, 20)
console.log(masin.drive(100))


























 





