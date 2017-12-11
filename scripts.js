$(function() {
/////////////////////////////HOVER EFFECTS//////////////////////////////////////////////
    $(".box").on("mouseover", function () {
        $(this).css({
            "color": "white",
            "background": "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",

        }).mouseout(function () {
            $(this).css({
                "color": "black",
                "background": "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
            });
        });
    });

    $(".box2").on("mouseover", function () {
        $(this).css({
            "color": "white",
            "background": "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        }).mouseout(function () {
            $(this).css({
                "color": "black",
                "background": "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)"
            });
        });
    });

/////////////////////////////////BACKTRACK BUTTON TEXT/////////////////////////////////////////
    let backtrackNames = ["Play", "Pause", "Reset"];
        $(".backtrackButton").each(function(i){
            $(this).append("<h4>").text(backtrackNames[i]);
        });

/////////////////////////////NEW INSTRUMENT AND NEW SONG TEXT////////////////////////////////////
    let switchNew = ["Switch Instrument", "New Song"];
        $(".switchNewButton").each(function(i){
            $(this).append("<h4>").text(switchNew[i]);
        });

////////////////////GUITAR NOTES TEXT FOR GRAVITY////////////////////////////////
//running an each loop that will loop through each ".boxSet1"
//accepts a parameter "i"-- appending each ".boxSet1" with notesNames[i]
    let notesNames = ["F", "G", "B", "C", "D"];
        $(".boxSet1").each(function(i){
            $(this).append("<h4>").text(notesNames[i]);
        });

///////////////////PIANO NOTES TEXT FOR GRAVITY///////////////////////////////
    let notesNames2 = ["E", "G", "A", "B", "D"];
        $(".boxSet2").each(function(i){
            $(this).append("<h4>").text(notesNames2[i]);
        });

////////////////////GUITAR NOTES TEXT FOR TRUST MYSELF/////////////////////////
    let notesNames3 = ["A", "C", "D", "E", "G"];
        $(".boxSet3").each(function (i) {
            $(this).append("<h4>").text(notesNames3[i]);
        });

///////////////////PIANO NOTES TEXT FOR TRUST MYSELF//////////////////////////////
    let notesNames4 = ["D", "E", "G", "A", "B"];
        $(".boxSet4").each(function (i) {
            $(this).append("<h4>").text(notesNames4[i]);
        });

////////////////////GUITAR NOTES TEXT FOR SLOW DANCING////////////////////////////
        let notesNames5 = ["G♭", "A♭", "B", "D♭", "E"];
        $(".boxSet5").each(function (i) {
            $(this).append("<h4>").text(notesNames5[i]);
        });

//////////////////PIANO NOTES TEXT FOR SLOW DANCING////////////////////////////
        let notesNames6 = ["E", "G♭", "A♭", "B", "D♭"];
        $(".boxSet6").each(function (i) {
            $(this).append("<h4>").text(notesNames6[i]);
        });

///////////////////////////////////////////BACKING TRACK FUNCTIONALITY//////////////////////////////////////////////////
    //when the user clicks the play button...
    //play the backing track using JavaScript play();
    //I originally had a jQuery selector but you can't mix JavaScript play(); with jQuery
//////////////////////////////GRAVITY BACKING TRACK//////////////////////////////////////////////////////
    $(".playButton").on("click", function(){       
        document.getElementById("sound1").play()    
    });                                                        

    $(".pauseButton").on("click", function () {       
        document.getElementById("sound1").pause();               
    });

    $(".resetButton").on("click", function() {
        let resetSound = document.getElementById("sound1");
        resetSound.currentTime = 0;
        resetSound.play();
    });
////////////////////////////TRUST MYSELF BACKING TRACK/////////////////////////////////////////////////////////////
    $(".playButton2").on("click", function () {
        document.getElementById("sound2").play()
    });

    $(".pauseButton2").on("click", function () {
        document.getElementById("sound2").pause();
    });

    $(".resetButton2").on("click", function () {
        let resetSound = document.getElementById("sound2");
        resetSound.currentTime = 0;
        resetSound.play();
    });

////////////////////////////SLOW DANCING BACKING TRACK//////////////////////////////////////////////////
    $(".playButton3").on("click", function () {
        document.getElementById("sound3").play()
    });

    $(".pauseButton3").on("click", function () {
        document.getElementById("sound3").pause();
    });

    $(".resetButton3").on("click", function () {
        let resetSound = document.getElementById("sound3");
        resetSound.currentTime = 0;
        resetSound.play();
    });
/////////////////////////////////////////SWITCH INSTRUMENTS///////////////////////////////////////////////////////////////
    $(".pianoContainer").hide();

    $(".instrumentButton").on("click", function(){
        $(".guitarContainer").slideToggle("300");
        $(".pianoContainer").slideToggle("300");
    });

    ///////////////////////////////////////////HOVERABLE NOTES//////////////////////////////////////////////////////////////
    /////////////////////////////////////GUITAR GRAVITY///////////////////////////////////////////////////////////////////
 
    //originally I had 5 functions but instead used an each(); loop which takes i in as a parameter. 
    //the each loop would loop over each element (in this case the boxes with the class of ".boxSet1") and then on mouseover it would add the audio element
    //by using a string literal, the i parameter in the audio file starts from number 0 so I named my audio files from 0 - 5 so that each box would have a different audio file  
    /////////////////////////////////////GUITAR GRAVITY////////////////////////////////////////////
    $(".boxSet1").each(function(i){
        $(this).on("mouseover", function(){
            $("<audio>").attr({
                "src": `audio/gravityguitar${i}.mp3`,
                "autoplay": "autoplay"
            });
        });
    })
    
    ///////////////////////////////////PIANO GRAVITY///////////////////////////////////////////////////
    
    $(".boxSet2").each(function (i) {
        $(this).on("mouseover", function () {
            $("<audio>").attr({
                "src": `audio/gravitypiano${i}.mp3`,
                "autoplay": "autoplay"
            });
        });
    })
    /////////////////////////////GUITAR ANOTHER YOU///////////////////////////////////////////////////////
    $(".boxSet3").each(function (i) {
        $(this).on("mouseover", function () {
            $("<audio>").attr({
                "src": `audio/trustmyselfguitar${i}.mp3`,
                "autoplay": "autoplay"
            });
        });
    })
    
    ////////////////////////////PIANO ANOTHER YOU///////////////////////////////////////////////////////
    $(".boxSet4").each(function (i) {
        $(this).on("mouseover", function () {
            $("<audio>").attr({
                "src": `audio/trustmyselfpiano${i}.mp3`,
                "autoplay": "autoplay"
            });
        });
    })
    ///////////////////////////GUITAR SLOW DANCING IN A BURNING ROOM/////////////////////////////////////
    $(".boxSet5").each(function (i) {
        $(this).on("mouseover", function () {
            $("<audio>").attr({
                "src": `audio/slowdancingguitar${i}.mp3`,
                "autoplay": "autoplay"
            });
        });
    })
    //////////////////////////PIANO SLOW DANCING IN A BURNING ROOM///////////////////////////////////////
    $(".boxSet6").each(function (i) {
        $(this).on("mouseover", function () {
            $("<audio>").attr({
                "src": `audio/slowdancingpiano${i}.mp3`,
                "autoplay": "autoplay"
            });
        });
    })
    /////////////////////////////////////////////CHANGE SONGS//////////////////////////////////////////////////////////
    $(".newSongButton1").on("click", function(){
        $("body").fadeOut("slow", function(){
            window.location.href = "index-trustmyself.html";
        });
    });

    $(function () {
        $("body").fadeIn("slow");
    });

    $(".newSongButton2").on("click", function () {
        $("body").fadeOut("slow", function () {
            window.location.href = "index-slowdancing.html";
        });
    });

    $(function () {
        $("body").fadeIn("slow");
    });

    $(".newSongButton3").on("click", function () {
        $("body").fadeOut("slow", function () {
            window.location.href = "index-gravity.html";
        });
    });

    $(function () {
        $("body").fadeIn("slow");
    });
});




