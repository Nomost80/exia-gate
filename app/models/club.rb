class Club < ApplicationRecord
  belongs_to :owner, class_name: "User"
  has_many :events
  has_many :comments, as: :commentable
  has_many :rates, as: :rateable
  has_and_belongs_to_many :members, class_name: "User"
  has_and_belongs_to_many :followers, class_name: "User"
end
