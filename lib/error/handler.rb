module Error
  module Handler
    def self.included(clazz)
      clazz.class_eval do
        rescue_from ActiveRecord::RecordNotFound do |e|
          respond(:not_found, e.to_s)
        end

        rescue_from ActiveRecord::RecordInvalid do |e|
          respond(:unprocessable_entity, e.record.errors)
        end

        rescue_from ActiveRecord::RecordNotDestroyed do |e|
          respond(:unprocessable_entity, e.to_s)
        end

        rescue_from StandardError do |e|
          respond(:standard_error, e.to_s)
        end
      end
    end

    private

    def respond(status, error)
      json = Helpers::Render.json(error)
      render json: json, status: status
    end
  end
end