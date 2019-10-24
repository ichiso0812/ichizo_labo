Rails.application.routes.draw do
  #*********HOME*********
  root "pages#home"
  get 'pages/home'
  #*********GAMES*********
  get 'pages/games'
  get 'games/phaser_test'
  get 'games/donkey_kong_like'
  #inscription
  post "user/inscription" => "user#inscription"
  #connection
  post "user/connection" => "user#connection"
  #offline
  get "user/offline" => "user#offline"

  #*******CHESS*******
  get 'games/chess'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
