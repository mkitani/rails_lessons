class UsersController < ApplicationController
  def new
  end
  def create
  	user_params
  	puts params[:email]
  	puts params[:password]
  end
  private
  	def user_params
  		params.require(:user).permit(:email,:password)
  	end
end
