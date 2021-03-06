class LocationsController < ApplicationController

  def index
    @locations = Location.all
    @categories = Category.all
  end

  def show
    @location = Location.find(params[:id])
    @items = @location.items
    @item = Item.new
    @redirect = location_url(@location)
  end

  def new
    @location = Location.new
  end

    def edit
     @location = Location.find(params[:id])
  end

  def create
      @location = Location.new(location_params)
        if @location.save
            redirect_to locations_url(@locations)
        else
            render 'new'
        end
  end

  def update
      @location = Location.find(params[:id])
        if @location.update_attributes(location_params)
            redirect_to locations_url(@locations)
        else
            render 'edit'
        end
  end

  def destroy
      Location.find(params[:id]).destroy
          redirect_to locations_url(@locations)
  end


private
  def location_params
      params.require(:location).permit(:name)
  end

end
