function Thermostat() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.maximumTemperature = 25
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isPowerSavingMode()) {
    return;
  }
  return (this.temperature += 1);
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.minimumTemperature;
};

Thermostat.prototype.isPowerSavingMode = function () {
  return this.temperature === this.maximumTemperature;
}
