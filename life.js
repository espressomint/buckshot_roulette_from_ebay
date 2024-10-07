let global_lives = Math.floor(Math.random() * 2) + 2
let player = parseInt(global_lives)
let dealer = parseInt(global_lives)
let bullets = []
let live_bullets = 0
let blank_bullets = 0
for(let i = 0; i < 6; i++){
    bullets.push(Math.floor(Math.random() * 2))
}
for (let n = 0; n < bullets.length; n++){
    if(bullets[n] == 1){
        live_bullets++
    }else{
        blank_bullets++
    }
}
//zero bullets of each type check
// if(live_bullets || blank_bullets == 0){
//     window.location.reload()
// }

console.log(bullets)
function shootYourself(){
    current_bullet = bullets.shift()
    if(current_bullet == 1 ){
        player--
        alert("you shot yourself")
        let life_display = document.getElementById("display_life");
        life_display.innerHTML = ("player: " + player)
        
        let dealer_display = document.getElementById("display_dealer_life");
        dealer_display.innerHTML = ("dealer: " + dealer)
    }else{
        dealer--
        alert("you were lucky")
        let life_display = document.getElementById("display_life");
        life_display.innerHTML = ("player: " + player)
        
        let dealer_display = document.getElementById("display_dealer_life");
        dealer_display.innerHTML = ("dealer: " + dealer)
    }
    switch (true){
        case dealer == 0:
            alert("he dead");
            window.location.reload()
            break;
        case player == 0:
            alert("you dead")
            window.location.reload()
            break;
        case bullets.length == 0:
            alert("you both live")
            window.location.reload()
            break;
    }
}
function shootThem(){
    current_bullet = bullets.shift()
    if(current_bullet == 1){
        dealer--
        alert("you scored")
        let life_display = document.getElementById("display_life");
        life_display.innerHTML = ("player: " + player)      
        let dealer_display = document.getElementById("display_dealer_life");
        dealer_display.innerHTML = ("dealer: " + dealer)
    }else{
        player--
        alert("missed your shot")
        let life_display = document.getElementById("display_player_life");
        life_display.innerHTML = ("player: " + player)      
        let dealer_display = document.getElementById("display_dealer_life");
        dealer_display.innerHTML = ("dealer: " + dealer)
    }
    switch (true){
        case dealer == 0:
            alert("he dead");
            window.location.reload()
            break;
        case player == 0:
            alert("you dead")
            window.location.reload()
            break;
        case bullets.length == 0:
            alert("you both live");
            window.location.reload()
    }
}
//display shit
let blank_display = document.getElementById("display_blanks");
blank_display.innerHTML = ("blank bullets: " +blank_bullets)
let live_display = document.getElementById("display_lives");
live_display.innerHTML = ("live bullets: " + live_bullets)
let life_display = document.getElementById("display_player_life");
life_display.innerHTML = ("player: " + player)
let dealer_display = document.getElementById("display_dealer_life");
dealer_display.innerHTML = ("dealer: " + dealer)
