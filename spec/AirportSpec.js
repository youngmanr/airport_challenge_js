describe("Airport", function() {
  const CAPACITY = 1;
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to ask a plane to land", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    expect(airport.planes.length).toEqual(1);
  });

  it("should be able to ask a plane to takeoff", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    airport.dispatch(plane);
    expect(airport.planes.length).toEqual(0);
  });

  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(CAPACITY);
  });

  it("should not land a plane when the airport is full", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    expect( function(){ airport.land(plane); } ).toThrow(new Error("Cannot land while airport is full"));
  });

  it("should not land a plane when the weather is stormy", function() {
    spyOn(airport.weather, "stormy").and.returnValue(true);
    expect( function(){ airport.land(plane); } ).toThrow(new Error("Weather is stormy"));
  });

  it("should not dispatch a plane when the weather is stormy", function() {
    spyOn(airport.weather, "stormy").and.returnValue(true);
    expect( function(){ airport.dispatch(plane); } ).toThrow(new Error("Weather is stormy"));
  });

});