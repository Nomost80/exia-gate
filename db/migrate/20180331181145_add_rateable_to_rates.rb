class AddRateableToRates < ActiveRecord::Migration[5.1]
  def change
    add_reference :rates, :rateable, polymorphic: true, index: true
  end
end
