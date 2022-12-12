fetch("https://lime-faithful-hippo.cyclic.app/api/games")
.then(function(response){
  return response.json()
})
.then(function(games){

  console.log(games);
    var tableCode = 
    "<table> \
    <tr>\
    <th> Games</th> <th>Platforms</th>\
    </tr>";

    games.forEach(function(currentGame) {
      tableCode += `<tr><td><a href ="Leaderboard.html?id=${currentGame.id}"> ${currentGame.GameName} </a></td>\
      <td>${currentGame.Platform}</td></tr>`;

    });


    tableCode += "</table>";



 document.getElementById("Videogames").innerHTML = tableCode;
})
.catch((error)=>{
  console.log(`Error: ${error}`);
});



