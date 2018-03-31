class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title, null: false, uniq: true, index: true
      t.string :slug, null: false, uniq: true
      t.text :content, null: false

      t.timestamps
    end
  end
end
