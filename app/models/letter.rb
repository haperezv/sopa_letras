# == Schema Information
#
# Table name: letters
#
#  id         :integer          not null, primary key
#  question   :text
#  response   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Letter < ApplicationRecord
    #modelo de la tabla letter
    validates :response, presence: true
end
