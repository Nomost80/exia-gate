module Api
  class EventsController < ApplicationController
    def index
      events = Event.all
      render json: events, status: :ok
    end

    def show
      event = Event.find(params[:id])
      render json: event, status: :ok
    end

    def create
      event = Event.create!(events_params)
      render json: event, status: :created
    end

    def update
      event = Event.find(params[:id])
      event.update(events_params)
      render json: event, status: :ok
    end

    def delete
      event = Event.find(params[:id])
      Event.destroy(params[:id])
      render json: event, status: :ok
    end

    private
      def events_params
        params.require(:event).permit(:title, :description)
      end
  end
end