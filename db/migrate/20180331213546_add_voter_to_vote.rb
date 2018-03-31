class AddVoterToVote < ActiveRecord::Migration[5.1]
  def change
    add_reference :votes, :voter, foreign_key: { to_table: :users }, index: true
  end
end
