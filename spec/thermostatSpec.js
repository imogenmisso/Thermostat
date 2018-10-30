describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("should have a starting temp of 20", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("increases the temperature by 1", function() {
    thermostat.increase(1);
    expect(thermostat.temperature).toEqual(21)
  })
})
