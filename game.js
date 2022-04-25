function cricket(){
    console.log("Welcome to Cricket");
    return ("cricket");
}

function footBall(){
    console.log("Welcome to Football");
    return("Football");
}

function voleyBall(){
    console.log("Welcome to Voleyball");
    return("Voleyball");
}

module.exports = {
    cricket : cricket,
    footBall : footBall,
    voleyBall : voleyBall
}