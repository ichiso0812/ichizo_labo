$( document ).ready(function() {

var ANIMS = [
    "modulo",
    "stars"
]
var anim_index = 0
//change anim
var change_button = $("#next_anim")
change_button.click(function(){
    if (anim_index+1 < ANIMS.length){anim_index++}
    else{anim_index=0}
    $("canvas").each(function(){
        if ($(this).css("display")!="none"){$(this).css("display", "none")}
    })
    $("#"+ANIMS[anim_index]+"_anim").show()
    //change controls panel
    $(".anim_controls").hide()
    $("#"+ANIMS[anim_index]+"_anim_control").show()
})

/*------------------------------STARS ANIM------------------------------*/
//initialize canvas
var stars_anim_zone = $("#stars_anim");
var stars_anim = {width:parseInt(stars_anim_zone.css("width")), height:parseInt(stars_anim_zone.css("height"))};
var stars_ctx = stars_anim_zone[0].getContext("2d"); //use [0] to have dom object and not jQuery object
/*CLASSES*/
var Stars = []
class Star{
    constructor(x, y){
        this.x = x
        this.y = y
        this.opacity = 1
        this.radius = getRandom(1,3)
        this.light_state = "decrease"
        this.shine_speed = getRandom(0,0.05)
        Stars.push(this)
    }
    draw(){
        this.shine()
        stars_ctx.beginPath();
        stars_ctx.shadowBlur=this.radius*2;
        stars_ctx.shadowColor="rgba(155,255,255,"+this.opacity+")"
        stars_ctx.fillStyle="rgba(255,255,255,"+this.opacity+")"
        stars_ctx.arc(this.x,this.y, this.radius, 0, Math.PI*2, false)
        stars_ctx.fill()
        stars_ctx.shadowBlur=0;
        stars_ctx.closePath();
    }
    shine(){
        switch (this.light_state){
            case "decrease":
                this.opacity-=getRandom(0,this.shine_speed)
                if (this.opacity<=0.1){this.light_state="increase"}
                break;
            case "increase":
                    this.opacity+=getRandom(0,this.shine_speed)
                    if (this.opacity>=1){this.light_state="decrease"}
                break;
        }
    }
}
function start_stars_anim(){
    for (i=0;i<getRandomInt(150,200);i++){
        star = new Star(getRandomInt(0,window.innerWidth), getRandomInt(0,window.innerHeight))
    }
}
function stars_animation() { //mindblowing animation 
    requestAnimationFrame(stars_animation)
    stars_ctx.clearRect(0,0,stars_anim.width, stars_anim.height)
    Stars.forEach(function(star){
        star.draw()
    })
}
start_stars_anim()
stars_animation()

/*------------------------------MODULO ANIM------------------------------*/
//initialize canvas
var modulo_anim_zone = $("#modulo_anim")
var modulo_anim = {width: parseInt(modulo_anim_zone.css("width")), height: parseInt(modulo_anim_zone.css("height"))}
var modulo_ctx = modulo_anim_zone[0].getContext("2d")
//MODULO ANIM
//var
var multiple=0, anim_radius = 450, points_number = 150, x_offset = 250, speed=0.005
//get all point
modulo_anim_points = []
function create_modulo_anim_points(points_number){
    for (var i=0; i<points_number; i++){modulo_anim_points.push({x: modulo_anim.width/2 + anim_radius*(Math.cos( ((Math.PI*2)/points_number)*(i+1)))+x_offset, y:modulo_anim.height/2 + anim_radius*Math.sin( ((Math.PI*2)/points_number)*(i+1))})}
}
create_modulo_anim_points(points_number)

function modulo_animation(){
    requestAnimationFrame(modulo_animation)
    modulo_ctx.clearRect(0,0,modulo_anim.width, modulo_anim.height)
    modulo_ctx.beginPath()
    modulo_ctx.fillStyle = "black"
    modulo_ctx.shadowBlur = 100
    modulo_ctx.shadowColor="pink"
    modulo_ctx.arc(modulo_anim.width/2+x_offset, modulo_anim.height/2, anim_radius, 0, Math.PI*2, false)
    modulo_ctx.fill()
    modulo_ctx.shadowBlur = 0
    modulo_ctx.closePath()
    modulo_anim_points.forEach(function(point, index){
        modulo_ctx.beginPath()
        modulo_ctx.moveTo(point.x, point.y)
        modulo_ctx.lineWidth  = 0.5
        modulo_ctx.shadowBlur=3
        modulo_ctx.strokeStyle = 'rgba(155,155,155,1)'
        modulo_ctx.strokeStyle = 'hsla(0, 100%, 100%, '+getRandomInt(10, 100)+')'
        modulo_ctx.lineTo(modulo_anim_points[parseInt((index*multiple)%points_number)].x, modulo_anim_points[parseInt((index*multiple)%points_number)].y)
        modulo_ctx.stroke();
        modulo_ctx.shadowBlur=0
        modulo_ctx.closePath();
    })
    multiple += speed
    $("#modulo_multiple").val(multiple.toFixed(2))
    $("#modulo_display_multiple").text(multiple.toFixed(2))
}
modulo_animation()

//CONTROLS
$("#modulo_display_points_number").text(points_number)
$("#modulo_display_speed").text(speed)
$("#modulo_multiple").val(multiple.toFixed(2))
$("#modulo_display_multiple").text(multiple.toFixed(2))
$(".modulo_anim_control").change(function(){
    switch ($(this).attr("id")){
        case "modulo_points_number":
            modulo_anim_points = []
            points_number = parseInt($(this).val())
            $("#modulo_display_points_number").text(points_number)
            create_modulo_anim_points(points_number)
            break;
        case "modulo_speed":
            speed=parseFloat($(this).val())
            $("#modulo_display_speed").text(speed)
            if(speed==0){//change to input if value=0 to change multiple manually
                $("#modulo_multiple, #modulo_display_multiple").toggle()
            }else{
                $("#modulo_multiple").hide()
                $("#modulo_display_multiple").show()
            }
            break;
    }
})
$("#modulo_multiple").change(function(){
    multiple = parseInt($(this).val())
})


/*--------------/\/\/\USEFULL FUNCTIONS/\/\/\--------------*/
/*MATH*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


/*SOUND*/
function sound_fade_in(sound){
    var fade_in = setInterval(function(){
        if (sound.volume >=0.75){
            clearInterval(fade_in)
            return;
        }
        sound.volume+=0.005
    }, 100)
}

})