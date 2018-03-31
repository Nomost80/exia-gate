# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180331213617) do

  create_table "articles", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "title", null: false
    t.string "slug", null: false
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "author_id"
    t.index ["author_id"], name: "index_articles_on_author_id"
    t.index ["title"], name: "index_articles_on_title"
  end

  create_table "clubs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "nom", null: false
    t.string "slug", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "owner_id"
    t.index ["nom"], name: "index_clubs_on_nom"
    t.index ["owner_id"], name: "index_clubs_on_owner_id"
  end

  create_table "clubs_followers", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.bigint "club_id"
    t.bigint "follower_id"
    t.index ["club_id"], name: "index_clubs_followers_on_club_id"
    t.index ["follower_id"], name: "index_clubs_followers_on_follower_id"
  end

  create_table "clubs_members", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.bigint "club_id"
    t.bigint "member_id"
    t.index ["club_id"], name: "index_clubs_members_on_club_id"
    t.index ["member_id"], name: "index_clubs_members_on_member_id"
  end

  create_table "comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "author_id"
    t.string "commentable_type"
    t.bigint "commentable_id"
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
  end

  create_table "enrollments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text "information"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "event_id"
    t.bigint "participant_id"
    t.index ["event_id"], name: "index_enrollments_on_event_id"
    t.index ["participant_id"], name: "index_enrollments_on_participant_id"
  end

  create_table "events", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "title", null: false
    t.string "slug", null: false
    t.text "description", null: false
    t.float "price", limit: 24
    t.text "question"
    t.string "place", null: false
    t.datetime "vote_deadline", null: false
    t.datetime "enrollment_deadline", null: false
    t.datetime "date"
    t.datetime "validated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "author_id"
    t.bigint "validator_id"
    t.bigint "club_id"
    t.index ["author_id"], name: "index_events_on_author_id"
    t.index ["club_id"], name: "index_events_on_club_id"
    t.index ["title"], name: "index_events_on_title"
    t.index ["validator_id"], name: "index_events_on_validator_id"
  end

  create_table "notifications", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text "message", null: false
    t.boolean "is_viewed", default: false
    t.boolean "is_desktop", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "recipient_id"
    t.index ["recipient_id"], name: "index_notifications_on_recipient_id"
  end

  create_table "rates", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.float "value", limit: 24, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "rater_id"
    t.string "rateable_type"
    t.bigint "rateable_id"
    t.index ["rateable_type", "rateable_id"], name: "index_rates_on_rateable_type_and_rateable_id"
    t.index ["rater_id"], name: "index_rates_on_rater_id"
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "class", null: false
    t.boolean "is_admin", default: false
    t.boolean "email_alert", default: true
    t.text "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  create_table "votes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.datetime "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "voter_id"
    t.bigint "event_id"
    t.index ["event_id"], name: "index_votes_on_event_id"
    t.index ["voter_id"], name: "index_votes_on_voter_id"
  end

  add_foreign_key "articles", "users", column: "author_id"
  add_foreign_key "clubs", "users", column: "owner_id"
  add_foreign_key "clubs_followers", "clubs"
  add_foreign_key "clubs_followers", "users", column: "follower_id"
  add_foreign_key "clubs_members", "clubs"
  add_foreign_key "clubs_members", "users", column: "member_id"
  add_foreign_key "comments", "users", column: "author_id"
  add_foreign_key "enrollments", "events"
  add_foreign_key "enrollments", "users", column: "participant_id"
  add_foreign_key "events", "clubs"
  add_foreign_key "events", "users", column: "author_id"
  add_foreign_key "events", "users", column: "validator_id"
  add_foreign_key "notifications", "users", column: "recipient_id"
  add_foreign_key "rates", "users", column: "rater_id"
  add_foreign_key "votes", "events"
  add_foreign_key "votes", "users", column: "voter_id"
end
