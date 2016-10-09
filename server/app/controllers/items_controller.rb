class ItemsController < ApplicationController

  def index
    items = if params[:search]
      #@items = Item.search(params[:search])
      Item.search(params).paginate(:page => params[:page], :per_page => 20)
    else
      Item.all.paginate(page: params[:page], per_page: 20)
    end
    # @item = Item.new
    # @categories = Category.all
    # @locations = Location.all

    render json: items, status: 200
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    if @item.update_attributes(item_params)
      redirect_to @item
    else
        render 'edit'
    end
  end

  def show
    @item = Item.find(params[:id])
  end

  def new
    @item = Item.new
    @categories = Category.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item, status: 201, location: item
    else
      render json: item.errors, status: 422
    end
  end

  def destroy
    Item.find(params[:id]).destroy
    redirect_to items_url(@items)
  end

 private
    def item_params
      params.require(:item).permit(:name, :quantity, :notes, :category_id, :location_id, :expiration_date)
    end
end
