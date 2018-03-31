class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false, uniq: true, index: true
      t.string :slug, null: false, uniq: true
      t.text :description, null: false
      t.float :price
      t.text :question
      t.string :place, null: false
      t.datetime :vote_deadline, null: false
      t.datetime :enrollment_deadline, null: false
      t.datetime :date
      t.datetime :validated_at

      t.timestamps
    end
  end
end
