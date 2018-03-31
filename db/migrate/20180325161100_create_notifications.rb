class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.text :message, null: false
      t.boolean :is_viewed, default: false
      t.boolean :is_desktop, default: false

      t.timestamps
    end
  end
end
