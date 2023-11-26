
async function searchChess()
{
    let name = document.getElementById('Username').value;
    console.log (name)

    const response = await fetch(`https://api.chess.com/pub/player/${name.toLowerCase()}/stats`);
    
    if (!response.ok) {
        alert('Username not found... ');
        return;
    }

    const data = await response.json();
    
    const rating = data.chess_bullet.last.rating
    const win = data.chess_bullet.record.win
    const loss = data.chess_bullet.record.loss
    const draw = data.chess_bullet.record.draw

    const bulletStats = document.getElementById("bulletStats")
    bulletStats.innerHTML = `<li>Rating: ${rating}</li>`
    bulletStats.innerHTML += `<li>Wins: ${win}</li>`
    bulletStats.innerHTML += `<li>Loss: ${loss}</li>`
    bulletStats.innerHTML += `<li>Draw: ${draw}</li>`
    bulletStats.innerHTML += `<li> Win Percentage: ${Math.round(100*win/(win+draw+loss))}%`

    const rating2 = data.chess_blitz.last.rating
    const win2 = data.chess_blitz.record.win
    const loss2 = data.chess_blitz.record.loss
    const draw2 = data.chess_blitz.record.draw

    const BlitzStats = document.getElementById("BlitzStats")
    BlitzStats.innerHTML = `<li>Rating: ${rating2}</li>`
    BlitzStats.innerHTML += `<li>Wins: ${win2}</li>`
    BlitzStats.innerHTML += `<li>Loss: ${loss2}</li>`
    BlitzStats.innerHTML += `<li>Draw: ${draw2}</li>`
    BlitzStats.innerHTML += `<li> Win Percentage: ${Math.round(100*win2/(win2+draw2+loss2))}%`

    const rating3 = data.chess_rapid.last.rating
    const win3 = data.chess_rapid.record.win
    const loss3 = data.chess_rapid.record.loss
    const draw3 = data.chess_rapid.record.draw

    const RapidStats = document.getElementById("RapidStats")
    RapidStats.innerHTML = `<li>Rating: ${rating3}</li>`
    RapidStats.innerHTML += `<li>Wins: ${win3}</li>`
    RapidStats.innerHTML += `<li>Loss: ${loss3}</li>`
    RapidStats.innerHTML += `<li>Draw: ${draw3}</li>`
    RapidStats.innerHTML += `<li> Win Percentage: ${Math.round(100*win3/(win3+draw3+loss3))}%`

    
//     <ul>
//     <li>hbhghjhjgghj</li>
//     <li>hbhghjhjgghjkjjkhhjk</li>
//     <li>jffghghdfhhbhghjhjgghj</li>
// </ul>
    // for data in data.abilities:

    // PYTHON: for i in range (len(data.abilities)): 



    // document.getElementById("BulletWins").innerHTML = "Moves: " + mpty2.join("\n ")
    // document.getElementById("statsText").innerHTML = "Stats: " + complete_text
    // document.getElementById("image").src =data.sprites.back_shiny
    // document.getElementById("heading2").innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1)
   
    console.log(complete_text)
}  