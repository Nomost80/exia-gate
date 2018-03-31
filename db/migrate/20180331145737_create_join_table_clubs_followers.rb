class CreateJoinTableClubsFollowers < ActiveRecord::Migration[5.1]
  def change
    create_table :clubs_followers, id: false do |t|
      t.references :club, foreign_key: true, index: true
      t.references :follower, foreign_key: { to_table: :users }, index: true
    end
  end
end
