function Airport(capacity) {
    const CAPACITY = 1
    this.capacity = ((typeof capacity === 'undefined') ? CAPACITY : capacity);
	this.planes = [];
    this.weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.land = function(plane) {
    if (this.weather.stormy()) {
        throw new Error("Weather is stormy");
    }

    if (this.planes.length === this.capacity) {
        throw new Error("Cannot land while airport is full");
    }

    this.planes.push(plane);
};

Airport.prototype.dispatch = function(plane) {
    if (this.weather.stormy()) {
        throw new Error("Weather is stormy");
    }
    this.planes.pop(plane);
};
