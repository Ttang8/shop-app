# == Schema Information
#
# Table name: items
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  item_number  :string           not null
#  description  :text
#  image_url    :string
#  product_info :text
#  price        :decimal(, )      not null
#  category_id  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
