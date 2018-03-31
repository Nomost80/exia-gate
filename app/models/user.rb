class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :owned_clubs, class_name: "Club", inverse_of: "owner"
  has_many :articles
  has_many :enrollments
  has_many :notifications
  has_many :comments
  has_many :rates
  has_and_belongs_to_many :followed_clubs, class_name: "Club"
  has_and_belongs_to_many :belong_clubs, class_name: "Club"
end
