class AddRaterToRates < ActiveRecord::Migration[5.1]
  def change
    add_reference :rates, :rater, foreign_key: { to_table: :users }, index: true
  end
end
