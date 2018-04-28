# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

classes = ['A1', 'A2', 'A3', 'A4', 'A5', 'tuteur']

users = []
50.times do
  password = Faker::Lorem.characters(10).unique
  users << User.new(
    first_name: Faker::Name.first_name.unique,
    last_name: Faker::Name.last_name.unique,
    email: Faker::Internet.email.unique,
    password: password,
    password_confirmation: password,
    class: classes.sample,
    confirmed_at: Time.now
  )
end

100.times do
  comments = []
  rates = []

  5.times do
    comments << Comment.new(content: Faker::Lorem.paragraphs(1), author: users.sample)
    rates << Rate.new(value: Faker::Number.between(0, 5), rater: users.sample)
  end

  Article.create!(
    title: Faker::Book.title.unique,
    content: Faker::Lorem.paragraphs(5),
    author: users.sample,
    comments: comments,
    rates: rates
  )
end

20.times do
  Club.create!(

  )
end

75.times do
  Event.create!(

  )
end