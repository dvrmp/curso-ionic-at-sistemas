class Coche {
    /**
     * 
     * @param {string} make 
     */
    constructor(make){
        this.make=make;
        this.km = 0;
    }

    move(km) {
        this.km+=km
    }

    getInfo(){
        return `Make : ${this.make} , Km : ${this.km}`
    }
}

module.exports = Coche