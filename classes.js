function Automobile(wheels){
    this.wheels = wheels 
    this.setColor = (color)=>{
        this.color = color
    }
    this.getColor = () =>{
        return this.color
    }
}

function Motorcycle(make,model,year){
    this.make = make
    this.model = model
    this.year = year
}

function Sedan(make , model, year){
    this.make = make
    this.model = model
    this.year = year
    this.doors = 4 
}

Sedan.prototype = new Automobile(4)

function Camry(){
    
}

Camry.prototype = new Sedan("Toyota", "Camry", 2006)

let camryToy = new Camry()

// console.log(camryToy.wheels, camryToy.doors)

camryToy.year = 2010

// console.log(camryToy.year)

// console.dir(camryToy.wheels)

Motorcycle.prototype = new Automobile(2)

let ducati = new Motorcycle("Ducati","Z-9000", 2006)

let hyundai = new Sedan("Hyundai","Accent", 2013)

// console.log(hyundai.wheels)


//ES Style of Classes
class Automobile{
    constructor(wheels){
        this.wheels = wheels
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
}

class Sedan extends Automobile {
    constructor(make,model,year,color){
        super(4)
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

class Maybach extends Sedan {

}

let mayBach = new Maybach("Mercedez","Maybach", 2012, "red")

console.log(mayBach.model, mayBach.make, mayBach.year, mayBach.color)


