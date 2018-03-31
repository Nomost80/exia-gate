module Error
  ::Exceptions
  class UnauthorizedAccess < Custom
    def initialize(message)
      super(401, :unhauthorized, message)
    end
  end
end