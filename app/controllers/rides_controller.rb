class RidesController < ApplicationController

	def index
		@rides = Ride.all
		render json: @rides
	end

	def new
		@ride = Ride.new
	end

	def create
		@ride = Ride.new(ride_params)
		binding.pry
		if @ride.save!
			render json: @ride
    	puts "new ride saved"
		else
			puts "something's wrong"
			binding.pry
		end
	end

	protected

	def ride_params
		params.require(:ride).permit(:origin, :destination, :title, :available_seats)
	end

end
