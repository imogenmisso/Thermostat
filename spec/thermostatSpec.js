describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("should have a starting temp of 20", function() {
    expect(thermostat.currentTemperature()).toEqual(20)
  });

  it("increases the temperature by 1", function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21)
  });

  it("decreases the temperature by 1", function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19)
  });

  it("never decreases below 10", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10)
  });
})
