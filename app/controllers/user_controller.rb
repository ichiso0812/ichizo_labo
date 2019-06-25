class UserController < ApplicationController
  #inscription
  def inscription
    new_user = User.new
    new_user.pseudo = params[:pseudo]
    if new_user.save 
      render :json=>{result: "success"}
    else
      render :json=>{result: "already_exist"}
    end
  end
  #connection
  def connection
    user = User.find_by pseudo: params[:pseudo]
    if user.nil?
      render :json=>{result: "don't exist"}
    else
      session[:user_pseudo] = user.pseudo
      render :json =>{result:"connected"}
    end
  end
  #deconnection
  def offline
    reset_session
    redirect_to "/pages/home"
  end

end
