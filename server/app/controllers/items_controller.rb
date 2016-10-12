class ItemsController < ApplicationController

  def index
    render json: get_items, status: 200
  end

  def update
    item = Item.find(params[:id])
    if item.update_attributes(item_params)
      render json: get_items, status: 200
    else
      render json: item.errors, status: 422
    end
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: get_items, status: 200, location: item
    else
      render json: item.errors, status: 422
    end
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: get_items, status: 200
  end

 private
    def item_params
      params.require(:item).permit(:name, :quantity, :notes, :category_id, :location_id, :expiration_date)
    end

    def get_items
      if params[:search]
        Item.search(params).paginate(:page => params[:page], :per_page => 20)
      else
        Item.all.paginate(page: params[:page], per_page: 20)
      end
    end
end
