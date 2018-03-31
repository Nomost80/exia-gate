class AddEventToVote < ActiveRecord::Migration[5.1]
  def change
    add_reference :votes, :event, foreign_key: true, index: true
  end
end
