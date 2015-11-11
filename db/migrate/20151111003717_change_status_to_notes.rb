class ChangeStatusToNotes < ActiveRecord::Migration
  def change
    rename_column :items, :status, :notes
  end
end
