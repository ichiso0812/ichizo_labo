class GamesController < ApplicationController
    def chess
    end
    def phaser_test
    end
    def donkey_kong_like
    end


    #TRPG
    def trpg
    end
    def trpg_rooms
        @rooms = TrpgRoom.all
    end
    def create_trpg_room
        room = TrpgRoom.new
        binding.pry
        room.name = params[:room_name]
        room.players_ids.push(session[:user_id])
        room.save
        render json:{success:true}
    end
end
