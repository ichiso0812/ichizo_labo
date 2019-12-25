class UserController < ApplicationController
  #inscription
  def inscription
    new_user = User.new
    new_user.pseudo = params[:pseudo]
    new_user.pass = params[:pass]
    if new_user.save 
      render json:{result: "success"}
    else
      render json:{result: "already_exist"}
    end
  end
  #connection
  def connection
    user = User.find_by pseudo: params[:pseudo]
    if user.nil?
      render json:{result: "inexist"}
    else
      if params[:pass]==user.pass
        session[:user_pseudo] = user.pseudo
        session[:user_id] = user.id
        render json:{result:"connected"}
      else
        render json:{result:"bad_pass"}
      end
    end
  end
  #deconnection
  def offline
    reset_session
    redirect_to "/pages/home"
  end

end
