class AddOwnerToClubs < ActiveRecord::Migration[5.1]
  def change
    add_reference :clubs, :owner, foreign_key: { to_table: :users }, index: true
  end
end
