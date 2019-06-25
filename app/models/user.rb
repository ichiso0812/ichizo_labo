class User < ActiveRecord::Base  
    validates :pseudo, uniqueness: true
    
end