$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get('http://localhost:4567/', function(data) {
    $('#temperature').text(data);
  });
  updateTemperature();

  $('#city').submit(function(event) {
    event.preventDefault();
    var city = $('#user-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=23ff2359b73d7f4489793424ab72a71f&units=metric', function(data) {
      $('#current-temp').text((data.main.temp.toFixed()));
    })
  })

  $('#temperature_up').on('click', function() {
      thermostat.up();
      updateTemperature();
      saveTemperature();
  })

  $('#temperature_down').on('click', function() {
      thermostat.down();
      updateTemperature();
      saveTemperature();
  })

  $('#temperature_reset').on('click', function() {
      thermostat.resetTemp();
      updateTemperature();
      saveTemperature();
  })

  $('#powersaving_on').on('click', function() {
      thermostat.switchPowerSavingModeOn();
      $('#power_saving').text('Power saving mode is ON');
  })

  $('#powersaving_off').on('click', function() {
      thermostat.switchPowerSavingModeOff();
      $('#power_saving').text('Power saving mode is OFF');
  })

  function saveTemperature() {
    var temperature = thermostat.temperature
    $.post('http://localhost:4567/?temperature='+temperature)
  }
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentUsage());
    $('#centigrade').attr('class', thermostat.currentUsage());
  };
});
