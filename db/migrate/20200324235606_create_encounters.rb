class CreateEncounters < ActiveRecord::Migration[6.0]
  def change
    create_table :encounters do |t|
      t.datetime :encounter_date
      t.integer :encounter_number
      t.string :start_time
      t.string :end_time
      t.string :vessel
      t.string :staff
      t.string :observers
      t.string :pods
      t.string :start_lat
      t.string :start_long
      t.string :end_lat
      t.string :end_long
      t.text :summary
      t.text :ids_encountered, array: true, default: []
      t.string :location_description

      t.timestamps
    end
  end
end
