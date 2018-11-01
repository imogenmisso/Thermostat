require 'sinatra/base'
require_relative 'thermostat_model'

class ThermostatAPI < Sinatra::Base

  get '/' do
    Thermostat.temperature
  end

  post '/' do
    Thermostat.save_temperature(params[:temperature])
  end


  run! if app_file == $PROGRAM_NAME
end
