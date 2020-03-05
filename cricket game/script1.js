class player{
    constructor(){
        this.individualScore =0;
        this.individualBallCount=0;
    }
}

function display(runsA, playerScoreA, teamScoreA, wicketsA, ballsA, battid, playerScoreid, teamScoreid, wicketsid, ballsid){
    document.getElementById(battid).value = runsA;
    document.getElementById(playerScoreid).value = playerScoreA;
    document.getElementById(teamScoreid).value = teamScoreA;
    document.getElementById(wicketsid).value = wicketsA;
    document.getElementById(ballsid).value = ballsA;
} 
let flag = 0; 
let resulFlag = 0;       

class team{
    constructor(){
        this.players = new player();
        this.ballCount = 0;
        this.teamScore = 0;
        this.playerCount = 0;
        this.hasPlayerFinished = false;
    }
   
    battingTeam = function(battid, playerScoreid, teamScoreid, wicketsid, ballsid){
        //alert("start");
        if(this.playerCount <= 11 && this.ballCount < 30 && this.players.individualBallCount < 6){
            //alert("hello");
            var bat = Math.floor(Math.random()*7);
            if(bat == 0){
                this.playerCount++;
                this.ballCount++;
                this.players.individualBallCount = 0;
                alert("Player Out");
                alert("Player Score = "+ this.players.individualScore);
                this.players.individualScore = 0;
                display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
            }
            else{
                //alert("inside else");
                //players[a.playerCount].individualScore += bat;
                this.ballCount++;
                //players[a.playerCount].individualBallCount++;
                this.players.individualScore += bat;
                this.players.individualBallCount ++;
                this.teamScore += bat;
                //alert("Runs scored in this ball :" + bat);
                //alert("Player Score = "+ a.players.individualScore);
                //alert("team score is"+ a.teamScore);
                display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
                if(this.players.individualBallCount == 6){
                    this.players.individualBallCount = 0;
                    this.players.individualScore = 0;
                    this.playerCount++;
                    alert("Ball limit over");
                    display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
                }
                
            }
        }
        else{
            alert("Innings over");
            alert("Team A score: "+ this.teamScore);
            flag +=1;
            display(bat, this.players.individualScore, this.teamScore, this.playerCount, 30-this.ballCount,battid, playerScoreid, teamScoreid, wicketsid, ballsid);
            this.hasPlayerFinished = true;
            
        }
        
    
    }



}

let a = new team();
let b = new team();


function clickTeamA(bat, playerScore, teamScore, wickets, balls){
    a.battingTeam(bat, playerScore, teamScore, wickets, balls);
}

function clickTeamB(bat, playerScore, teamScore, wickets, balls){
    if(flag >= 1){
        b.battingTeam(bat, playerScore, teamScore, wickets, balls);
    }
    else{
        alert("Team A has not finished batting");
    }
    if(b.hasPlayerFinished == true){
        if(b.teamScore > a.teamScore){
            let result = localStorage.setItem("team","Team B");
        }
        else{
            let result = localStorage.setItem("team","Team A");
        }
        window.open("winner.html");
    }
}