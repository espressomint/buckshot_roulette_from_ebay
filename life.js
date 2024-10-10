//spyglass and phone fixed
//there can only be two different items and no duplicates
//each round there are new items
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let global_lives = Math.floor(Math.random() * 5) + 2
// let player = parseInt(global_lives)
// let dealer = parseInt(global_lives)
let player = 20
let dealer = 20
let bullets = []
let items = []
let round = 1
let items_names = []
let live_bullets = 0
let blank_bullets = 0
let money = 0

function rollBullets(){
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
    console.log(bullets)
    let blank_display = document.getElementById("display_blanks");
    blank_display.innerHTML = ("blanks: " + blank_bullets)
    let live_display = document.getElementById("display_lives");
    live_display.innerHTML = ("lives: " +live_bullets)
}
function rollItems(){
    for(let y = 0; y < 2; y++){
        items.push(Math.floor(Math.random() * 5) + 1)
    }
    for (let m = 0; m < items.length; m++) {
        switch(true) {
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
            case items[m] == 5:
                items_names.push("cigarettes")
        }
    }
    console.log(items)
    console.log(items_names)
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
    if (items_names.includes("cigarettes")){
        document.getElementById("cigarettes").style.display = "inline"
    }
    if (items[0] == items[1]){
        window.location.reload()
    }
}
rollBullets()
rollItems()


function shootYourself(){
    let current_bullet = bullets.shift()
    console.log(bullets)
    if(current_bullet == 1 ){
        player--
        live_bullets--
        money = money - 10
        alert("you shot yourself")
    }
    else{
        dealer--
        blank_bullets--
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
            alert("you dead, you earned: nothing lmao");
            window.location.reload()
            break;
    }
    console.log("array after shooting at yourself" + bullets)
    if (bullets.length == 0){
        // document.getElementsByClassName("item").style.display = "none"
        round++
        items=[]
        items_names =[]
        rollBullets()
        rollItems()
        alert("round: " + round)
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
        live_bullets--
        alert("you scored")
    }else{
        money = money - 15
        player--
        blank_bullets--
        alert("missed your shot")
    }
    console.log("array after shooting at them" + bullets)
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
    let life_display = document.getElementById("display_player_life");
    life_display.innerHTML = ("player: " + player)
    let dealer_display = document.getElementById("display_dealer_life");
    dealer_display.innerHTML = ("dealer: " + dealer)

}
function useBeer(){
    current_bullet = bullets.shift()
    document.getElementById("beer").style.display = "none";
    switch(true){
        case current_bullet == 1:
            alert("live fell out")
            break;
        case current_bullet == 0:
            alert("blank fell out")
            break;
    }
    if(bullets.length == 0){
        document.getElementsByClassName("item").style.display = "none"
        round++
        rollBullets()
        rollItems()
        alert("round: " + round)
    }
    console.log("array after drink: " + bullets)
}

function useKnife(){
    current_bullet = bullets.shift()
    if(current_bullet == 1){
        dealer = dealer - 2;
        live_bullets--
        alert("arent you lucky")
    }else{
        player = player - 2;
        blank_bullets--
        alert("unfortunate")
    }
    switch (true){
        case dealer <= 0:
            money = money + 100
            alert("he dead, you earned: " + money + "$");
            window.location.reload()
            break;
        case player <= 0:
            money = money = 0
            alert("you dead, you earned: nothing lmao" );
            window.location.reload()
            break;
        
    }
    if(bullets.length == 0){
        document.getElementsByClassName("item").style.display = "none"
        round++
        rollItems()
        rollBullets()
        alert("round: " + round)
    }
    let life_display = document.getElementById("display_player_life");
    life_display.innerHTML = ("player: " + player)
    let dealer_display = document.getElementById("display_dealer_life");
    dealer_display.innerHTML = ("dealer: " + dealer)
    document.getElementById("knife").style.display = "none";
    console.log("player heatlh after knife: " + player)
    console.log("dealer health after knife: " + dealer)
    console.log("array after using a knife: " + bullets)
}
function usePhone(){
    let randomBullet = Math.floor(Math.random() * bullets.length)
    let targetBullet = bullets[randomBullet]
    if(targetBullet == 1){
        alert("bullet " + (randomBullet + 1) + " l..ive")
    }else{
        alert("bullet " + (randomBullet + 1) + " bl...ank")
    }
    document.getElementById("phone").style.display = "none";
    console.log("array after using phone: " + bullets)
}
function useSpyglass(){
    current_bullet = bullets[0]
    if(current_bullet == 1){
        alert("L...I.V...E")
    }else{
        alert("b...La..nk")
    }
    document.getElementById("spyglass").style.display = "none";
    console.log("array after using spyglass: " + bullets)
}
function useCigarretes(){
    player++
    let life_display = document.getElementById("display_player_life");
    life_display.innerHTML = ("player: " + player)
    let dealer_display = document.getElementById("display_dealer_life");
    dealer_display.innerHTML = ("dealer: " + dealer)
    document.getElementById("cigarettes").style.display = "none"
    alert("more health");
}
let life_display = document.getElementById("display_player_life");
life_display.innerHTML = ("player: " + player)
let dealer_display = document.getElementById("display_dealer_life");
dealer_display.innerHTML = ("dealer: " + dealer)