class Event < ApplicationRecord
  belongs_to :author, class_name: "User"
  belongs_to :club, optional: true
  belongs_to :validator, class_name: "User", optional: true
  has_many :voters, through: :votes
  has_many :participants, through: :enrollements
  has_many :comments, as: :commentable
  has_many :rates, as: :rateable
end
