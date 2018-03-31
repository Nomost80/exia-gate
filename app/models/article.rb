class Article < ApplicationRecord
  belongs_to :author, class_name: "User"
  has_many :comments, as: :commentable
  has_many :rates, as: :rateable
end
