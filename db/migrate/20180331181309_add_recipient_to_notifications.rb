class AddRecipientToNotifications < ActiveRecord::Migration[5.1]
  def change
    add_reference :notifications, :recipient, foreign_key: { to_table: :users }, index: true
  end
end
