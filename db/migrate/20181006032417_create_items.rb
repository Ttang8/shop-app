class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :item_number, null: false
      t.text :description
      t.string :image_url
      t.text :product_info
      t.decimal :price, null: false
      t.integer :category_id
      t.timestamps
    end
    add_index :items, :category_id
  end
end
