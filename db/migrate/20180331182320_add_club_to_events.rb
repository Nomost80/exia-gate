class AddClubToEvents < ActiveRecord::Migration[5.1]
  def change
    add_reference :events, :club, foreign_key: true, index: true, null: true
  end
end
