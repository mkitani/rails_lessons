class UsersController < ApplicationController
  def new
  end
  def create
#  	user_params
  	params = user_params
  	puts params[:email]
  	puts params[:password]

  	puts "testtest"
#  	binding.pry
    @user = User.new
    @user.email = params[:email]
    @user.password = params[:password]
    unless @user.save
      return render action: 'new'
    end
  end
  private
  	def user_params
  		params.require(:user).permit(:email,:password)
  	end
end
