window.onload = function(event) {
    var urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    console.log(id);
    fetch("https://lime-faithful-hippo.cyclic.app/api/leaderboard/"+id+"")
    .then(function(response){
    return response.json()
    })
    .then(function(game){

     console.log(game);
        var tableCode = 
         "<table> \
          <tr>\
         <th></th><th>"+game.GameName+"</th><th></th>\
          </tr>\
         <tr>\
         <td><strong>Player</td> <td><strong>Score</td> <td><strong>Time (hr:min:sec:ms)</td>\
         </tr>";

         game.Leaderboard.forEach(function(currentGame) {
         tableCode += `<tr><td>${currentGame.Player}</td>\
           <td>${currentGame.Score}</td>\
          <td>${currentGame.Time}</td></tr>`;
          });


    tableCode += "</table>";



    document.getElementById("Leaderboard").innerHTML = tableCode;
    })
    .catch((error)=>{
        console.log(`Error: ${error}`);
    });


   }
   




   function goToPage(){
    var urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    window.location.href = `Add.html?id=${id}`;
}