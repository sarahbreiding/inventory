class ApplicationController < ActionController::Base
  before_action :authenticate
  before_filter :set_locations, except: [:create, :update, :destroy]
  before_filter :set_categories, except: [:create, :update, :destroy]

  def set_locations
      @locations = Location.all
  end

  def set_categories
      @categories = Category.all
  end

  private

    def authenticate
      authenticate_user! unless Rails.env.development?
    end
end
