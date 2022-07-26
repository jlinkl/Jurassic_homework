const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino1;
  let dino2;
  let dino3;
  let dinos;
  beforeEach(function () {
    dino1 = new Dinosaur("T-rex", "Carnivore", 50);
    dino2 = new Dinosaur("Vrachiosaurus", "Herbivore", 20)
    dino3 = new Dinosaur("Velociraptor", "Carnivore", 30)
    dinos = [dino1, dino2, dino3]
    park = new Park("Jurassic Park", 5, dinos)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 5)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3)
  });


  it('should be able to add a dinosaur to its collection', function() {
    let dino = new Dinosaur("Spinosaurus", "Carnivore", 10);
    park.addDino(dino);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDino(dino3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.findMostVisitors();
    assert.strictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findDinosBySpecies(dino1.species);
    assert.deepStrictEqual(actual, [dino1])
  });


  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.findTotalVisitorsPerDay();
    assert.strictEqual(actual, 100)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 36500)
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.totalRevenueForOneYear();
    assert.strictEqual(actual, 182500)
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.removeBySpecies('T-rex');
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to show diet types and number of each', function() {
    const actual = park.getDietObject();
    assert.deepStrictEqual(actual, {'Carnivore': 2, 'Herbivore': 1})
  })

});
