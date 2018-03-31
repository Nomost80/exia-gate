class CreateJoinTableClubsMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :clubs_members, id: false do |t|
      t.references :club, foreign_key: true, index: true
      t.references :member, foreign_key: { to_table: :users }, index: true
    end
  end
end
