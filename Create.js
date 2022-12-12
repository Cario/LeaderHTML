function sendGame(){
  
    let gameName = document.getElementById("gameName").value;
    gameName = gameName.trim();
    console.log(gameName);
    let platform = document.getElementById("platform").value;
    platform = platform.trim();
    console.log(platform);
    if(gameName == null || gameName == ""){
        console.log("Error: Empty GameName Field")
    }
    else if(platform == null || platform == ""){
        console.log("Error: Empty PLatform Field")
    }
    else{
        let retData = `{"name" : "${gameName}", "platform" : "${platform}"}`
        console.log(retData);

        fetch("https://lime-faithful-hippo.cyclic.app/api/games",{
            method:"POST",
            body: retData,
            headers: {"Content-type":"application/json; charset=UTF-8"}
        })
        .then ((response)=> response.json())
        .then((jsonData)=>{
            var divTag = document.getElementById("myDiv");
            divTag.innerHtml = `Server Response: ${jsonData.message}`;
            console.log(jsonData);
            window.location.href='index.html'
        })
        .catch((error)=>{
            console.log(`Error: ${error}`);
        });
    }
}
