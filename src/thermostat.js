'use strict';
function Thermostat() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.maximumTemperature = 25
  this.powerSavingMode = true
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isPowerSavingModeOn() && (this.temperature >= this.maximumTemperature)) {
    return this.maximumTemperature;
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

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};
