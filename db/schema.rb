# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_25_182425) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "encounters", force: :cascade do |t|
    t.datetime "encounter_date"
    t.integer "encounter_number"
    t.string "start_time"
    t.string "end_time"
    t.string "vessel"
    t.string "staff"
    t.string "observers"
    t.string "pods"
    t.string "start_lat"
    t.string "start_long"
    t.string "end_lat"
    t.string "end_long"
    t.text "summary"
    t.text "ids_encountered", default: [], array: true
    t.string "location_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sequence"
  end

  create_table "viewpoints", force: :cascade do |t|
    t.string "name"
    t.string "viewpoint_type"
    t.string "description"
    t.string "lat"
    t.string "lon"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
