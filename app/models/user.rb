class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :omniauthable, :validatable, :trackable
  # :recoverable
  devise :database_authenticatable, :rememberable
end
