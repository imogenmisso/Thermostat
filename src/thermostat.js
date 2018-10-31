function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE
  this.minimumTemperature = 10
  this.maximumTemperaturePSMOn = 25
  this.maximumTemperaturePSMOff = 32
  this.powerSavingMode = true
  this.lowUsageTemp = 18
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.currentUsage = function() {
  if (this.temperature < this.lowUsageTemp) {
    return 'low-usage';
  }
  if ((this.temperature < this.maximumTemperaturePSMOn) && (this.temperature >= this.lowUsageTemp)) {
    return 'medium-usage';
  }
  return 'high-usage';
};


Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.minimumTemperature;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingModeOn() === true) {
    return this.temperature === this.maximumTemperaturePSMOn;
  };
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.maximumTemperaturePSMOff;
  };
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
