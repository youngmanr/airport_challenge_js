function Airport() {
    const CAPACITY = 1;
    this.planes = [];
    this.capacity = CAPACITY;
}

Airport.prototype.land = function(plane) {
    if (this.planes.length === this.capacity) {
        throw new Error("Cannot land while airport is full");
    } else {
        this.planes.push(plane);
    }
};

Airport.prototype.takeoff = function(plane) {
    this.planes.pop(plane);
};

function Plane() {
}

Plane.prototype.land = function() {
};

function Weather() {
}

Weather.prototype.stormy = function() {
    var s = [true,false]

    return s[Math.floor(Math.random() * s.length)];
};

airport = new Airport()
weather = new Weather()
plane1 = new Plane()
plane2 = new Plane()
console.log(airport.capacity)
airport.land(plane1)
console.log(airport.planes.length)
airport.land(plane2)
console.log(weather.stormy())