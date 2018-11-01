require 'pg'

class Thermostat

  def self.temperature
    con = PG.connect(dbname: 'thermostat')
    con.exec("SELECT temperature FROM temperatures WHERE id = 1;")
  end

  def self.save_temperature(temp)
    con = PG.connect(dbname: 'thermostat')
    con.exec("UPDATE temperatures SET temperature = '#{temp}' where id = 1;")
  end

end
