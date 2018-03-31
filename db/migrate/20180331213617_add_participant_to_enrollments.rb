class AddParticipantToEnrollments < ActiveRecord::Migration[5.1]
  def change
    add_reference :enrollments, :participant, foreign_key: { to_table: :users }, index: true
  end
end
