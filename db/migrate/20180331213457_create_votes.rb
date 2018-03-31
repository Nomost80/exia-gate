class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.datetime :date, null: false

      t.timestamps
    end
  end
end
