@media screen and (min-width: 801px){
input{
    font-size: 20px;
    position:absolute;
}

#head{
    font-family:Arial;
    font-weight:bold;
    font-size: 80px;
    color:#b37700;
    text-shadow:4px 4px black;
    position: absolute;
}
p{
    font-size: 30px;
    font-family:Arial;
    color:white;
    text-shadow:2px 2px black;
    font-size:36px;
    font-weight: bold;
}

input{
    padding:12px 28px;
    border-radius: 8px;
    transition-duration: 0.4s;
    color:white;
    background-color:#331a00;
    font-family: Impact;
}

input:hover{
    background-color: white;
    color:black;
}

body{
    background-image:url(../images/background.jpeg);
    background-size: 100%;
    background-repeat:no-repeat;
    background-color:#3399ff;
}

#mole1, #mole2, #boom1, #boom2{
    width: 200px;
    height: 200px;
    position:absolute;
    display:none;
}

#mole3, #boom3{
    width: 240px;
    height: 240px;
    position:absolute;
    display:none;
}
#mole4, #boom4{
    width: 120px;
    height: 120px;
    position:absolute;
    display:none;
}

}
@media screen and (max-width: 800px){

    
input{
    font-size: 10px;
    position:center;
}

#head{
    font-family:Arial;
    font-weight:bold;
    font-size: 30px;
    color:#b37700;
    text-shadow:4px 4px black;
    text-align: center;
}

#hscore, #score, #timer, #lives{
    color: white;
    font-family: Arial;
    font-size: 25px;
    font-weight: bold;
    text-shadow:2px 2px black;
}

input{
    padding:12px 28px;
    border-radius: 8px;
    transition-duration: 0.4s;
    color:white;
    background-color:#331a00;
    font-family: Impact;
    text-align: center;
}

#survival:hover{
    background-color: white;
    color:black;
}

body{
    background-image:url(../images/background.jpeg);
    background-size: 250%;
    background-repeat:repeat-y;
    background-color:#3399ff;
}

#mole1, #mole2, #boom1, #boom2{
    width: 90px;
    height: 90px;
    position:absolute;
    display:none;
}

#mole3, #boom3{
    width: 110px;
    height: 110px;
    position:absolute;
    display:none;
}
#mole4, #boom4{
    width: 70px;
    height: 70px;
    position:absolute;
    display:none;
}


}
