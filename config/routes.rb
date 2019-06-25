Rails.application.routes.draw do
  #*********HOME*********
  root "pages#home"
  get 'pages/home'





  #inscription
  post "user/inscription" => "user#inscription"
  #connection
  post "user/connection" => "user#connection"
  #offline
  get "user/offline" => "user#offline"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
