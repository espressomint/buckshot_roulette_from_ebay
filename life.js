//logic needs a lot of fixing: 
// for example beer casues the spyglass(fixed) and phone to break
//also if there is two same items the buttons will only show up once and not twice
//knife logic is fucked and new round makes hp display go nuts
//just need to do some code refubrish cause there a lot going on and it's easy to get lost
//also need to to move some variables or at least make it look and work more appealing.
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let global_lives = Math.floor(Math.random() * 6) + 1
let player = parseInt(global_lives)
let dealer = parseInt(global_lives)
let bullets = []
let items = []
let items_names = []
let live_bullets = 0
let blank_bullets = 0
let money = 0

function round(){
    //bullets
    for(let i = 0; i < 6; i++){
        bullets.push(Math.floor(Math.random() * 2))
    }

    for(let y = 0; y < 2; y++){
        items.push(Math.floor(Math.random() * 4) + 1)
    }
    //assign type of bullets
    for (let n = 0; n < bullets.length; n++){
        if(bullets[n] == 1){
            live_bullets++
        }else{
            blank_bullets++
        }
    }
    //item deposit
    for (let m = 0; m < items.length; m++){
        switch(true){
            case items[m] == 1:
                items_names.push("beer")
                break;
            case items[m] == 2:
                items_names.push("knife")
                break;
            case items[m] == 3:
                items_names.push("spyglass")
                break;
            case items[m] == 4:
                items_names.push("phone")
                break;
        }   
    }
    let blank_display = document.getElementById("display_blanks");
    blank_display.innerHTML = ("blank bullets: " +blank_bullets)
    let live_display = document.getElementById("display_lives");
    live_display.innerHTML = ("live bullets: " + live_bullets)
}
window.onload = round()
//item showup logic (very basic and flawed)
if (items_names.includes("beer")){
    document.getElementById("beer").style.display = "inline"
}
if (items_names.includes("knife")){
    document.getElementById("knife").style.display = "inline"
}
if (items_names.includes("phone")){
    document.getElementById("phone").style.display = "inline"
}
if (items_names.includes("spyglass")){
    document.getElementById("spyglass").style.display = "inline"
}
console.log(items)
console.log(items_names)

//zero bullets of each type check
// if(live_bullets || blank_bullets == 0){
//     window.location.reload()
// }

console.log(bullets)
function shootYourself(){
    current_bullet = bullets.shift()
    if(current_bullet == 1 ){
        player--
        money = money - 10
        alert("you shot yourself")
    }else{
        dealer--
        money = money + 30
        alert("you were lucky")
    }
    switch (true){
        case dealer == 0:
            money = money + 100
            alert("he dead, you earned: " + money + "$");
            window.location.reload()
            break;
        case player == 0:
            money = money = 0
            alert("you dead, you earned: nothing lmao" );
            window.location.reload()
            break;          
    }
    if(bullets.length == 0){
        round()
    }


    let life_display = document.getElementById("display_player_life");
    life_display.innerHTML = ("player: " + player)
    let dealer_display = document.getElementById("display_dealer_life");
    dealer_display.innerHTML = ("dealer: " + dealer)
}
function shootThem(){
    current_bullet = bullets.shift()
    if(current_bullet == 1){
        money = money + 50
        dealer--
        alert("you scored")
    }else{
        money = money - 15
        player--
        alert("missed your shot")
    }
    switch (true){
        case dealer == 0:
            money =  money + 100
            alert("he dead, you earned: " + money + "$");
            window.location.reload()
            break;
        case player == 0:
            money = money = 0
            alert("you dead")
            window.location.reload()
            break;
    }
    if(bullets.length == 0){
        round()
    }
    let life_display = document.getElementById("display_player_life");
    life_display.innerHTML = ("player: " + player)
    let dealer_display = document.getElementById("display_dealer_life");
    dealer_display.innerHTML = ("dealer: " + dealer)
}
function useBeer(){
    bullets.shift()
    document.getElementById("beer").style.display = "none";
    console.log(bullets)
}
function usePhone(){
    let randomBullet = Math.floor(Math.random() * 6)
    let targetBullet = bullets[randomBullet]
    if(targetBullet == 1){
        alert("bullet " + (randomBullet + 1) + " l..ive")
    }else{
        alert("bullet " + (randomBullet + 1) + " bl...ank")
    }
    document.getElementById("phone").style.display = "none";
}
function useKnife(){
    current_bullet = bullets[0]
    if(current_bullet == 1){
        dealer = dealer - 2;
        alert("arent you lucky")
    }else{
        player = player - 2;
        alert("unfortunate")
    }
    switch (true){
        case dealer == 0:
            money = money + 100
            alert("he dead, you earned: " + money + "$");
            window.location.reload()
            break;
        case player == 0:
            money = money = 0
            alert("you dead, you earned: nothing lmao" );
            window.location.reload()
            break;
    }
    bullets.shift()
    let life_display = document.getElementById("display_player_life");
    life_display.innerHTML = ("player: " + player)
    let dealer_display = document.getElementById("display_dealer_life");
    dealer_display.innerHTML = ("dealer: " + dealer)
    
    console.log(player)
    console.log(dealer)
    document.getElementById("knife").style.display = "none";
}
function useSpyglass(){
    current_bullet = bullets[0]
    if(current_bullet == 1){
        alert("L...I.V...E")
    }else{
        alert("b...La..nk")
    }
    document.getElementById("spyglass").style.display = "none";
}
if(bullets.length == 0){
    round()
}   
//display shit

let life_display = document.getElementById("display_player_life");
life_display.innerHTML = ("player: " + player)
let dealer_display = document.getElementById("display_dealer_life");
dealer_display.innerHTML = ("dealer: " + dealer)
