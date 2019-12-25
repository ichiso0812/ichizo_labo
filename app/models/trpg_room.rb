class TrpgRoom < ActiveRecord::Base  
    serialize :players_ids, Array

end