class RemoveNotesAndStatusLabel < ActiveRecord::Migration
  def change
    remove_column :items, :notes, :text
    remove_column :items, :status_label, :string

  end
end
