class ItemsController < ApplicationController

  def index
    if params[:search]
      #@items = Item.search(params[:search])
      @items = Item.search(params).paginate(:page => params[:page], :per_page => 20)
    else
      @items = Item.all.paginate(page: params[:page], per_page: 20)
    end
    @item = Item.new
    @categories = Category.all
    @locations = Location.all
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
    @item = Item.new(item_params)
    if @item.save
      redirect_to params[:redirect] || items_url(@items)
    else
      render 'new'
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
