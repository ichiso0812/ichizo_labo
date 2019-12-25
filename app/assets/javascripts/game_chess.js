/* Pawns = []
class Pawn{
	constructor(){
		Pawns.push(this)
	}
}
var Bishops = []
class Bishop{
	constructor(){
		Bishops.push(this)
	}
	where_can_move(actual_row, actual_col){
		var result = []
		for(var i=1; actual_row+i <= 7 || actual_col+i<=7; i++){
			if (piece_collision(actual_row+i, actual_col+i, game_array[actual_row][actual_col].team)=="ennemy"){
				result.push(["ennemy"]);
				break;
			}else if (piece_collision(actual_row+i, actual_col+i, game_array[actual_row][actual_col].team)=="ally"){
				result.push(["ally"]);
				break;
			}else{
				result.push([actual_row+i, actual_col+i])
			}
			
		}
		for(var i=1; actual_row+i <= 7 || actual_col+i<=7 ||actual_row-i >= 0 || actual_col-i>=0; i++){
			if (piece_collision(actual_row+i, actual_col-i, game_array[actual_row][actual_col].team)=="ennemy"){
				result.push(["ennemy"]);
				break;
			}else if (piece_collision(actual_row+i, actual_col-i, game_array[actual_row][actual_col].team)=="ally"){
				result.push(["ally"]);
				break;
			}else{
				result.push([actual_row+i, actual_col-i])
			}
		}
		for(var i=1; actual_row+i <= 7 || actual_col+i<=7 ||actual_row-i >= 0 || actual_col-i>=0; i++){
			if (piece_collision(actual_row-i, actual_col+i, game_array[actual_row][actual_col].team)=="ennemy"){
				result.push(["ennemy"]);
				break;
			}else if (piece_collision(actual_row-i, actual_col+i, game_array[actual_row][actual_col].team)=="ally"){
				result.push(["ally"]);
				break;
			}else{
				result.push([actual_row-i, actual_col+i])
			}
			result.push([actual_row-i, actual_col+i])
		}
		for(var i =1; actual_row-i >= 0 || actual_col-i>=0; i++){
			if (piece_collision(actual_row+i, actual_col-i, game_array[actual_row][actual_col].team)=="ennemy"){
				result.push(["ennemy"]);
				break;
			}else if (piece_collision(actual_row+i, actual_col-i, game_array[actual_row][actual_col].team)=="ally"){
				result.push(["ally"]);
				break;
			}else{
				result.push([actual_row+i, actual_col-i])
			}
			result.push([actual_row-i, actual_col-i])
		}
		return result;
	}

}
var Rooks = []
class Rook{
	constructor(){
		Rooks.push(this)
	}
	where_can_move(actual_row, actual_col){
		var result = []
		for(var i=1; actual_row+i <= 7; i++){result.push([actual_row+i, actual_col])}
		for(var i=1; actual_col+i <= 7; i++){result.push([actual_row, actual_col+i])}
		for(var i=1; actual_row-i >= 0; i++){result.push([actual_row-i, actual_col])}
		for(var i=1; actual_row-i >= 0; i++){result.push([actual_row, actual_col-i])}
		return result;
	}
}

var Queens = []
class Queen{
	constructor(){
		Queens.push(this)
	}
	where_can_move(actual_row, actual_col){
		var result = []
		for(var i=1; actual_row+i <= 7; i++){result.push([actual_row+i, actual_col])}
		for(var i=1; actual_col+i <= 7; i++){result.push([actual_row, actual_col+i])}
		for(var i=1; actual_row-i >= 0; i++){result.push([actual_row-i, actual_col])}
		for(var i=1; actual_row-i >= 0; i++){result.push([actual_row, actual_col-i])}
		for(var i=1; actual_row+i <= 7 || actual_col+i<=7; i++){result.push([actual_row+i, actual_col+i])}
		for(var i=1; actual_row+i <= 7 || actual_col+i<=7 ||actual_row-i >= 0 || actual_col-i>=0; i++){result.push([actual_row+i, actual_col-i])}
		for(var i=1; actual_row+i <= 7 || actual_col+i<=7 ||actual_row-i >= 0 || actual_col-i>=0; i++){result.push([actual_row-i, actual_col+i])}
		for(var i =1; actual_row-i >= 0 || actual_col-i>=0; i++){result.push([actual_row-i, actual_col-i])}
		return result;
	}
}
var Kings = []
class King{
	constructor(){
		Kings.push(this)
	}
	where_can_move(actual_row, actual_col){
		var result = []
		if (actual_row+1<=7){result.push([actual_row+1, actual_col])}
		if (actual_col+1<=7){result.push([actual_row, actual_col+1])}
		if (actual_row-1>=0){result.push([actual_row-1, actual_col])}
		if (actual_col-1>=0){result.push([actual_row, actual_col-1])}
		if (actual_col+1<=7 && actual_row+1<=7){result.push([actual_row+1, actual_col+1])}
		if (actual_row+1<=7 && actual_col-1>=0){result.push([actual_row+1, actual_col-1])}
		if (actual_row-1>=0 && actual_col+1<=7){result.push([actual_row-1, actual_col+1])}
		if (actual_col-1>=0 && actual_row-1>=0){result.push([actual_row-1, actual_col-1])}
		return result
	}
}
var Knights = []
class Knight{
	constructor(){
		Knights.push(this)
	}
	where_can_move(actual_row, actual_col){
		var result = []
		if (actual_row+2<=7 && actual_col+1<=7){result.push([actual_row+2, actual_col+1])}
		if (actual_row+2<=7 && actual_col-1>=0){result.push([actual_row+2, actual_col-1])}
		if (actual_row-2>=0 && actual_col+1<=7){result.push([actual_row-2, actual_col+1])}
		if (actual_row-2>=0 && actual_col-1>=0){result.push([actual_row-2, actual_col-1])}
		if (actual_row+1<=7 && actual_col+2<=7){result.push([actual_row+1, actual_col+2])}
		if (actual_row+1<=7 && actual_col-2>=0){result.push([actual_row+1, actual_col-2])}
		if (actual_row-1>=0 && actual_col+2<=7){result.push([actual_row-1, actual_col+2])}
		if (actual_row-1>=0 && actual_col-2>=0){result.push([actual_row-1, actual_col-2])}
		return result
	}

}*/
/*PIONS NOIRS*/
/*var Black_pawns = []
class Black_pawn extends Pawn{
	constructor(){
		super()
		this.img = "/assets/chess/black_pawn-f3278c412dfd9b04fb352d228c8e49a5a917d5d754734b66eb540cd0dc42cc12.png"
		Black_pawns.push(this)
	}

	where_can_move(actual_row, actual_col){
		if (actual_row==1){
			return [[actual_row+1, actual_col],[actual_row+2, actual_col]]
		}
		return [[actual_row+1, actual_col]]
	}
}

var Black_bishops = []
class Black_bishop extends Bishop{
	constructor(){
		super()
		this.img = "/assets/chess/black_bishop-d1c00ec44b4f38438075eb938bff866c1c889945e4e28f49fc922f3c083de7cc.png"
		Black_bishops.push(this)
	}
}
var Black_rooks = []
class Black_rook extends Rook{
	constructor(){
		super()
		this.img = "/assets/chess/black_rook-b830bf5cd5fa2c90abd0e71b588aa0317f64c187b6e59ce7d1c604b345743fda.png"
		this.team = "black"
		Black_rooks.push(this)
	}
}
var Black_queens = []
class Black_queen extends Queen{
	constructor(){
		super()
		this.img = "/assets/chess/black_queen-7cfac11ad3084126f2f1bab2372e8fe62c23f64de632438cbbff69ca3741aaa1.png"
		this.team = "black"
		Black_queens.push(this)
	}
}
var Black_kings = []
class Black_king extends King{
	constructor(){
		super()
		this.team = "black"
		this.img = "/assets/chess/black_king-c19c6bcd122c69d2c8e3d73b4f0d92aeba2cc1ae58b7fb2d64e48010b068a88c.png"
		Black_kings.push(this)
	}
}
var Black_knights = []
class Black_knight extends Knight{
	constructor(){
		super()
		this.img = "/assets/chess/black_knight-d96cc0c294630a3465c752934feac2ecd39f3521fc15e27eec6bd93c4c89cdac.png"
		this.team = "black"
		Black_knights.push(this)
	}
}*/
/*PIONS BLANCS*/
/*var White_pawns = []
class White_pawn extends Pawn{
	constructor(){
		super()
		this.img = "/assets/chess/white_pawn-6a756e9d2787d8b1752723b9b2187b01c9363f4a45937011c89447f33f3169f1.png"
		this.team = "white"
		White_pawns.push(this)
	}

	where_can_move(actual_row, actual_col){
		return [[actual_row-1, actual_col]]
	}
}

var White_bishops = []
class White_bishop extends Bishop{
	constructor(){
		super()
		this.img = "/assets/chess/white_bishop-782d44f1cc883bcf1543f642589303fd6a896ad3a17cc1017a03575c47af4c1a.png"
		this.team = "white"
		White_bishops.push(this)
	}
}
var White_rooks = []
class White_rook extends Rook{
	constructor(){
		super()
		this.img = "/assets/chess/white_rook-94258c916a505a18f5b6163c24b5a46ba677e2f84c317e4e07a2fd74f962538e.png"
		this.team = "white"
		White_rooks.push(this)
	}
}
var White_queens = []
class White_queen extends Queen{
	constructor(){
		super()
		this.img = "/assets/chess/white_queen-523e9f1cb91d4ebf5ef4823186fd2636451f276a43d6843db0d7f217d54a1629.png"
		this.team = "white"
		White_queens.push(this)
	}
}
var White_kings = []
class White_king extends King{
	constructor(){
		super()
		this.img = "/assets/chess/white_king-bdcb2b233e1b3a3a70e4de2ffb448bd64930026efe7a5acb2df376d375341513.png"
		this.team = "white"
		White_kings.push(this)
	}
}
var White_knights = []
class White_knight extends Knight{
	constructor(){
		super()
		this.img = "/assets/chess/white_knight-ad98482b8f47a3d9167ea19a8e5534b3cf234739e8a5ff45446b680952099fe8.png"
		this.team = "white"
		White_knights.push(this)
	}
}

//initialize grid
var black_rook_0 = new Black_rook(), black_rook_1 = new Black_rook(), black_knight_0 = new Black_knight(), black_knight_1 = new Black_knight(), black_bishop_0 = new Black_bishop(), black_bishop_1 = new Black_bishop();
var black_king = new Black_king(), black_queen = new Black_queen()
var black_pawn_0 = new Black_pawn(),black_pawn_1 = new Black_pawn(),black_pawn_2 = new Black_pawn(),black_pawn_3 = new Black_pawn(),black_pawn_4 = new Black_pawn(),black_pawn_5 = new Black_pawn(),black_pawn_6 = new Black_pawn(),black_pawn_7 = new Black_pawn();
var white_rook_0 = new White_rook(), white_rook_1 = new White_rook(), white_knight_0 = new White_knight(), white_knight_1 = new White_knight(), white_bishop_0 = new White_bishop(), white_bishop_1 = new White_bishop();
var white_king = new White_king(), white_queen = new White_queen()
var white_pawn_0 = new White_pawn(),white_pawn_1 = new White_pawn(),white_pawn_2 = new White_pawn(),white_pawn_3 = new White_pawn(),white_pawn_4 = new White_pawn(),white_pawn_5 = new White_pawn(),white_pawn_6 = new White_pawn(),white_pawn_7 = new White_pawn();
var game_array = [
		[black_rook_0,black_knight_0,black_bishop_0,black_queen,black_king,black_bishop_1,black_knight_1,black_rook_1],
		[black_pawn_0,black_pawn_1,black_pawn_2,black_pawn_3,black_pawn_4,black_pawn_5,black_pawn_6,black_pawn_7],
		[{},{},{},{},{},{},{},{}],
		[{},{},{},{},{},{},{},{}],
		[{},{},{},{},{},{},{},{}],
		[{},{},{},{},{},{},{},{}],
		[white_pawn_0,white_pawn_1,white_pawn_2,white_pawn_3,white_pawn_4,white_pawn_5,white_pawn_6,white_pawn_7],
		[white_rook_0,white_knight_0,white_bishop_0,white_queen,white_king,white_bishop_1,white_knight_1,white_rook_1],
	]

//draw grid
function draw_grid(game_array){ //TODO: delete green case
	game_array.forEach(function(elem_row, row){
		elem_row.forEach(function(piece, col){
			if (!is_empty(piece)){
				$("[data-row='"+row+"'] [data-col='"+col+"']").html("<img class='w-100' src='"+piece.img+"'/>")
			}else{
				$("[data-row='"+row+"'] [data-col='"+col+"']").html("")
			}
		})	
	})
	clean_show_where_can_move(game_array)
}


//show_where_can_move

function show_where_can_move(coords_array){
	clean_show_where_can_move(game_array)
	coords_array.forEach(function(coords){
		if ($("[data-row='"+coords[0]+"'] [data-col='"+coords[1]+"']").css("background-color")=="rgb(0, 0, 0)"){
			$("[data-row='"+coords[0]+"'] [data-col='"+coords[1]+"']").css("background-color", "#50754b")
		}else{
			$("[data-row='"+coords[0]+"'] [data-col='"+coords[1]+"']").css("background-color", "#99de90")
		}

	})
}
function clean_show_where_can_move(game_array){
	game_array.forEach(function(elem_row, row){
		elem_row.forEach(function(piece, col){
			if ($("[data-row='"+row+"'] [data-col='"+col+"']").css("background-color")=="rgb(80, 117, 75)"){
				$("[data-row='"+row+"'] [data-col='"+col+"']").css("background-color", "#000000")
			}else if ($("[data-row='"+row+"'] [data-col='"+col+"']").css("background-color")=="rgb(153, 222, 144)"){
				$("[data-row='"+row+"'] [data-col='"+col+"']").css("background-color", "white")
			}
		})	
	})
}

//collision
function piece_collision(row, col, team){
	if (!is_empty(game_array[row, col])){
		if (team==game_array[row, col]){
			return "ally"
		}else{return"ennemy"}
	}
	return false;
}
 //responsive grids
 $("[data-col]").css("height", $("[data-col]").css("width"));
 $(".row").css("height", $("[data-col]").css("width"))
 $(window).resize(function(){
	 $(".row").css("height", $("[data-col]").css("width"))
	 $("[data-col]").css("height", $("[data-col]").css("width"));
 })
*/
 /*USEFUL FUNCTION*/
 /*function is_empty(obj) { //test empty object
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}*/

