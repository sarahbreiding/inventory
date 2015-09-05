class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.date :expiration_date
      t.integer :quantity
      t.string :status
      t.string :status_label
      t.text :notes
      t.references :category, index: true
      t.references :location, index: true

      t.timestamps null: false
    end
  end
end
