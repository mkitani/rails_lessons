class CreateUserProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_profiles do |t|
      t.integer :user_id
      t.string :display_name
      t.integer :gender_type
      t.string :zipcode
      t.string :prefecture
      t.string :address1
      t.string :address2
      t.string :address3
      t.string :phone_number

      t.timestamps
    end
  end
end
