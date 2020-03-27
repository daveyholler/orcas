class AddSequenceToEncounters < ActiveRecord::Migration[6.0]
  def change
    add_column :encounters, :sequence, :integer
  end
end
