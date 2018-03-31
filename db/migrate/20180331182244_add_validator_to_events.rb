class AddValidatorToEvents < ActiveRecord::Migration[5.1]
  def change
    add_reference :events, :validator, foreign_key: { to_table: :users }, index: true, null: true
  end
end
