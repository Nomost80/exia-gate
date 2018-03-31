module Error::Exceptions
  class Custom < StandardError
    attr_reader :status, :error, :message

    def initialize(status, error, message = nil)
      @status = status
      @error = error
      @message = message || 'Something went wrong'
    end
  end
end