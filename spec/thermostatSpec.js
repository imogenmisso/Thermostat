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

  it("has a default power saving mode of on", function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can switch power saving mode off", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("can switch power saving mode off", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("has a maximum temperature of 25 when power saving mode is on", function() {
    for (var i = 25; i < 30; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25)
  });

})
