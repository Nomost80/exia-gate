module Error::Exceptions
  class Custom < StandardError
    attr_reader :error

    def initialize(error)
      @error = error
    end
  end
end