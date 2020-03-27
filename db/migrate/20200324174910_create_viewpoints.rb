class CreateViewpoints < ActiveRecord::Migration[6.0]
  def change
    create_table :viewpoints do |t|
      t.string :name
      t.string :viewpoint_type
      t.string :description
      t.string :lat
      t.string :lon

      t.timestamps
    end
  end
end
