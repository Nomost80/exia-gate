module Error::Helpers
  class Render
    def self.json(status, error, message)
      {
        status: status,
        error: error,
        message: message
      }.as_json
    end
  end
end