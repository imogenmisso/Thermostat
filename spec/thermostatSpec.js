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
    for (var i = 0; i < 30; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25)
  });

  it("has a maximum temperature of 32 when power saving mode is off", function() {
    thermostat.switchPowerSavingModeOff();
    for (var i = 0; i < 35; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(32)
  });

  it("resets the temp to 20 when you click reset", function() {
    thermostat.up();
    thermostat.resetTemp();
    expect(thermostat.currentTemperature()).toEqual(20)
  });

  it("returns high-usage when temp > 25", function() {
    for (var i = 0; i < 30; i++) {
    thermostat.up();
  }
    expect(thermostat.currentUsage()).toEqual('high-usage')
  });

  it("returns medium-usage when temp < 25", function() {
    expect(thermostat.currentUsage()).toEqual('medium-usage')
  });

  it("returns low-usage when temp < 18", function() {
    for (var i = 0; i < 3; i++) {
    thermostat.down();
  }
    expect(thermostat.currentUsage()).toEqual('low-usage')
  })

})
