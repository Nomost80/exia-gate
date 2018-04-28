module Error::Helpers
  class Render
    def self.json(errors)
      {
        errors: errors,
      }.as_json
    end
  end
end