// let global_lives = Math.floor(Math.random() * 6) + 1
let player = 1
// let dealer = parseInt(global_lives)
let bullets = []
let live_bullets = 0
let blank_bullets = 0
for(let i = 0; i < 6; i++){
    bullets.push(Math.floor(Math.random(1) * 2))
    
}

for (let n = 0; n < bullets.length; n++){
    if(bullets[n] == 1){
        live_bullets++
    }else{
        blank_bullets++
    }
}

function shootYourself(){
    current_bullet = bullets.shift()
    if(current_bullet == 1 ){
        player--
    }
    let life_display = document.getElementById("display_life");
    life_display.innerHTML = ("player: " + player)
    console.log(player)
    console.log(current_bullet)
    if(player == 0){
        alert("dead")
        window.location.reload()
    }
    if(bullets.length == 0){
        alert("you win!")
        window.location.reload()
    }
}
let blank_display = document.getElementById("display_blanks");
blank_display.innerHTML = ("blank bullets: " +blank_bullets)
let live_display = document.getElementById("display_lives");
live_display.innerHTML = ("live bullets: " + live_bullets)
// let dealer_life_display = document.getElementById("display_dealer_life");
// dealer_life_display.innerHTML = ("dealer: " + dealer)

