var hand;
function Decide(){
    hand = document.getElementById("Hand").value;
    hand = hand.toLowerCase();
    if(hand == "left"){
        document.getElementById("Lemma").style = "display:none;";
        document.getElementById("Main").style = "display:contents;";
        window.alert("We have navigated to the main segment");
        document.getElementById("note").innerHTML = "NOTE - Move your " + hand + " wrist left and right for going to the previous and next songs.";
    }else if(hand == "right"){
        document.getElementById("Lemma").style = "display:none;";
        document.getElementById("Main").style = "display:contents;";
        document.getElementById("note").innerHTML = "NOTE - Move your " + hand + " wrist left and right for going to the previous and next songs.";
        window.alert("We have navigated to the main segment");
    }else{
        console.error("Please type which hand you prefer to use");
        window.alert("Please type which hand you prefer to use");
    }
}
function Back(){
    hand = "";
    document.getElementById("Lemma").style = "display:contents;";
    document.getElementById("Main").style = "display:none;";
    window.alert("We have moved to the hand-decider segment");
}
