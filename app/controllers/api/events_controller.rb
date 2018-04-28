module Api
  class EventsController < ApplicationController
    before_action :get_event, only: [:show, :update, :delete]

    def index
      events = Event.all
      render json: events, status: :ok
    end

    def show
      render json: @event, status: :ok
    end

    def create
      event = Event.create! events_params
      render json: event, status: :created
    end

    def update
      @event.update events_params
      render json: @event, status: :ok
    end

    def delete
      @event.destroy!
      render json: @event, status: :ok
    end

    private
      def events_params
        params.require(:event).permit(:title, :description)
      end

      def get_event
        @event = Event.find params[:id]
      end
  end
end