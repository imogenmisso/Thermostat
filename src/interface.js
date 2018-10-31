$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature_up').on('click', function() {
      thermostat.up();
      updateTemperature();
  })

  $('#temperature_down').on('click', function() {
      thermostat.down();
      updateTemperature();
  })

  $('#temperature_reset').on('click', function() {
      thermostat.resetTemp();
      updateTemperature();
  })

  $('#powersaving_on').on('click', function() {
      thermostat.switchPowerSavingModeOn();
      $('#power_saving').text('Power saving mode is ON');
  })

  $('#powersaving_off').on('click', function() {
      thermostat.switchPowerSavingModeOff();
      $('#power_saving').text('Power saving mode is OFF');
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentUsage());
  };
});
