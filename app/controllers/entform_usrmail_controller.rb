class EntformUsrmailController < ApplicationController
  def ctrl_entform_usrmail
  end
  def ctrl_entform_usrmail_done
  	user_params
  	puts params[:email]
  	puts params[:password]
  end
  private
  	def user_params
  		params.require(:user).permit(:email,:password)
  	end
end
