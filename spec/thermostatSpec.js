describe("Thermostat", function() {
  var thermostat;

  it("should have a starting temp of 20", function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20)
  });
})
