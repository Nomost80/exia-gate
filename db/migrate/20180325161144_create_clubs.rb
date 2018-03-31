class CreateClubs < ActiveRecord::Migration[5.1]
  def change
    create_table :clubs do |t|
      t.string :nom, null: false, uniq: true, index: true
      t.string :slug, null: false, uniq: true
      t.text :description

      t.timestamps
    end
  end
end
