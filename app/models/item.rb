# == Schema Information
#
# Table name: items
#
#  id              :integer          not null, primary key
#  name            :string
#  expiration_date :date
#  quantity        :integer
#  status          :string
#  status_label    :string
#  notes           :text
#  category_id     :integer
#  location_id     :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Item < ActiveRecord::Base
  belongs_to :category
  belongs_to :location
end



