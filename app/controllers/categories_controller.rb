class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
    @items = @category.items
  end

  def new
    @category = Category.new
  end

  def edit
     @category = Category.find(params[:id])
  end

  def create
      @category = Category.new(category_params)
        if @category.save
            redirect_to categories_url(@categories)
        else
            render 'new'
        end
  end

  def update
      @category = Category.find(params[:id])
        if @category.update_attributes(category_params)
            redirect_to categories_url(@categories)
        else
            render 'edit'
        end
  end

  def destroy
      Category.find(params[:id]).destroy
          redirect_to categories_url(@categories)
  end


private
  def category_params
      params.require(:category).permit(:name)
  end

end




