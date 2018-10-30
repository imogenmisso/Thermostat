function Thermostat() {
  this.temperature = 20
  this.minimum_temperature = 10
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  return (this.temperature += 1);
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.minimum_temperature;
};
