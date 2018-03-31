module Error
  module Handler
    def self.included(clazz)
      clazz.class_eval do
        rescue_from Mongoid::Errors::DocumentNotFound do |e|
          respond(404, :not_found, e.to_s)
        end

        rescue_from Mongoid::Errors::Validations do |e|
          respond(422, :unprocessable_entity, e.to_s)
        end

        rescue_from StandardError do |e|
          respond(500, :standard_error, e.to_s)
        end
      end
    end

    private

    def respond(status, error, message)
      json = Helpers::Render.json(status, error, message)
      render json: json
    end
  end
end