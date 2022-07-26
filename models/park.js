const Park = function(name, price, dinosaurs) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDino = function(dino) {
    this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function(dino) {
    let index = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(index, 1);
};

Park.prototype.findMostVisitors = function() {
    let mostVisitors = this.dinosaurs[0];
    for (let i = 1; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].guestsAttractedPerDay > mostVisitors.guestsAttractedPerDay) {
            mostVisitors = this.dinosaurs[i];
        };
    };
    return mostVisitors;
};

Park.prototype.findDinosBySpecies = function(dino_species) {
    let dinos = [];
    for (let dino of this.dinosaurs) {
        if (dino.species === dino_species) {
            dinos.push(dino);
        };
    };
    return dinos;
};

Park.prototype.findTotalVisitorsPerDay = function() {
    let total = 0;
    for (let dino of this.dinosaurs) {
        total += dino.guestsAttractedPerDay;
    };
    return total;
};

Park.prototype.totalVisitorsPerYear = function() {
    let perday = this.findTotalVisitorsPerDay();
    return perday * 365;
};

Park.prototype.totalRevenueForOneYear = function() {
    let peryear = this.totalVisitorsPerYear();
    return peryear * 5;
};

Park.prototype.removeBySpecies = function(species) {
    let newlist = [];
    for (let dino of this.dinosaurs) {
        if (dino.species !== species) {
            newlist.push(dino);
        };
    };
    this.dinosaurs = newlist;
};

Park.prototype.getDietObject = function() {
    let object = {};
    for (let dino of this.dinosaurs) {
        if (dino.diet in object) {
            object[dino.diet]++
        } else {
            object[dino.diet] = 1
        };
    };
    return object;
};

module.exports = Park;