function Back(){
    var urlParams = new URLSearchParams(window.location.search);
    const gameID = urlParams.get("id");
    window.location.href= `Leaderboard.html?id=${gameID}`
}
function sendPlayer(){
  
    var urlParams = new URLSearchParams(window.location.search);
    const gameID = urlParams.get("id");
    console.log(gameID);
    let player = document.getElementById("playerName").value;
    player = player.trim();
    console.log(player);
    let score = document.getElementById("score").value;
    score = score.trim();
    console.log(score);
    let time = document.getElementById("time").value;
    time = time.trim();
    console.log(time);
    
    if(score == ""){
        score = null;
        console.log("Score will be null");
    }
    
    if (time == "" || time == "00:00:00:00"){
        time = null;
        console.log("Time will be null");
    }

    if(player == null || player == ""){
        console.log("Error: Empty Player Field")
    }

    else if((time == null || time == "") && (score == null || score == "")){
        console.log("Error: Empty Multiple Empty Fields")
    }
    
    else{
        
       if (time != null){
        var retData = `{"gameID" : "${gameID}", "player" : "${player}", "score" : ${score}, "time" : "${time}"}`
       }
       else{
        var retData = `{"gameID" : "${gameID}", "player" : "${player}", "score" : ${score}, "time" : ${time}}`
       }
        
        console.log(retData);

        fetch("https://lime-faithful-hippo.cyclic.app/api/leaderboard/"+gameID,{
            method:"POST",
            body: retData,
            headers: {"Content-type":"application/json; charset=UTF-8"}
        })
        .then ((response)=> response.json())
        .then((jsonData)=>{
            var divTag = document.getElementById("hiDiv");
            divTag.innerHtml = `Server Response: ${jsonData.message}`;
            console.log(jsonData);
            
            if (jsonData.message != "Bad Time Format")
            {
            window.location.href= `Leaderboard.html?id=${gameID}`
            }
        })
        .catch((error)=>{
            console.log(`Error: ${error}`);
        });
    }
}
