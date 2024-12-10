class ToyotaCar{

    constructor(brand){
        console.log("creating an object")
        this.brand = brand;
    }

    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    //this is done in constructor
    // setBrand(brand){
    //     this.brand = brand;
    // }
}

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");
// // lexus.start();
// // lexus.stop();
