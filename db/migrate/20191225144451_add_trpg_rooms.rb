class AddTrpgRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :trpg_rooms do |t|
      t.string :name
      t.text :players_ids

      t.timestamps
    end
  end
end
