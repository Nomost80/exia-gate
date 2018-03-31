class AddEventToEnrollments < ActiveRecord::Migration[5.1]
  def change
    add_reference :enrollments, :event, foreign_key: true, index: true
  end
end
