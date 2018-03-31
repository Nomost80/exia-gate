class Event < ApplicationRecord
  belongs_to :author, class_name: "User"
  belongs_to :club, optional: true
  belongs_to :validator, class_name: "User", optional: true
  has_many :votes
  has_many :enrollments
  has_many :comments, as: :commentable
  has_many :rates, as: :rateable
end
