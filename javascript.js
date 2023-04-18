/*==== CALCULATOR ====*/
/*=== Declarare ===*/
let ecranPrincipal = document.querySelector(".ecran-principal");
let ecranSecundar = document.querySelector('.ecran-secundar');
let operator,sir,nrOperatori,verifica,a,b,numarDeCifre,punct,punctEgal;
verifica = a = b = c = numarDeCifre = punct = 0;
punctEgal = 1;

/*=== Afisare Cifre ===*/
function afiseazaEcran(numar){
    if(numar !=0){
        numarDeCifre ++ ;
        ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + numar;
    }else if(numarDeCifre > 0){
        ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + numar;
    }
    
    if(operator != 0 && verifica == 0 && punctEgal == 1){
        ecranSecundar.innerHTML = eval(ecranPrincipal.innerHTML);
        nrOperatori++;
    }
    if(verifica == 1 && punct == 0){
        sir = ecranPrincipal.innerHTML
        b = b*10 + parseFloat(sir.slice(sir.length- 1, sir.length ));

    }
}

/*=== Operatori ===*/
function clearAll(){
    operator = 0,a=0,b=0,c=0,verifica=0,numarDeCifre = 0;
    ecranPrincipal.innerHTML = "";
    ecranSecundar.innerHTML = "";
}

operator = 0, nrOperatori = 1;
function operatii(identifica){
    if(numarDeCifre > 0){
        if(verifica == 0)
            operator ++;
        if(operator > 1 && verifica == 0){
            sir = ecranPrincipal.innerHTML;
            ultimaLitera = sir.charAt(sir.length - 1);
            ultimaLitera = 2;
            if(!['+', '-', '*', '/'].includes(ultimaLitera)  && punct == 0){
                ecranPrincipal.innerHTML = ecranSecundar.innerText;
                ecranSecundar.innerHTML = ""; 
            }else if(punct == 0){
                ecranPrincipal.innerHTML = sir.slice(0, sir.length - 1);
                console.log(1);
            }
            if(punct == 1 && !ultimaLitera.match(/[0-9]/)){
                identifica = -1;
                punctEgal = -1;    
            }else if(punct == 1){
                punctEgal = 1;
                console.log("da");
            }
        }
        if(verifica == 0){
            if(identifica == 1){ //inmultire
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + "*";
            }else if(identifica == 2){ //impartire
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + "/";
            }else if(identifica == 3){ //adunare
                console.log(ecranPrincipal.innerHTML);
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + "+";
            }else if(identifica == 4){ //scadere
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + "-";
            }else if(identifica == 5){//procent
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + "%";
            }else if(identifica == 6 && verifica == 0){//comparare
                a = ecranPrincipal.innerHTML;
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + " Si ";
                verifica = 1;
            }else if(identifica == 7){
                punct = 1;punctEgal = -1;
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + ".";
            }
        }
    }else if(identifica == 4){
        ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + "-";
    }
    
}
function egal(){
    if(verifica == 0 && punctEgal != -1){
        console.log("da");
        ecranPrincipal.innerHTML = ecranSecundar.innerText;
        ecranSecundar.innerHTML = "";
        nrOperatori = 1;
    }else if(verifica == 1){
        if(a > b){
            ecranPrincipal.innerHTML = a + " > " + b;
        }else if(a < b){
            ecranPrincipal.innerHTML = a + " < " + b;
        }else if(a==b){
            ecranPrincipal.innerHTML = a + " = " + b;
        }
    }
    
}

        /*==== X si 0 ====*/

//====Declarare====
let urmatorul,numarBoxFilled,castig, numarDinMatrice,scoro,scorx,i,j;
let box = document.querySelector(".box");
urmatorul = 1, numarBoxFilled = scoro = scorx = 0;

let matrice = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

castig = 0, numarDinMatrice = 0, scor=0;
function patrat(linie,coloana){
    numarBoxFilled ++;
    box = document.querySelector(".box" + linie + coloana);
    if(urmatorul == 1 && matrice[linie][coloana] == 0){
        box.innerHTML = "x";
        urmatorul = 0;
        matrice[linie][coloana] = 1;
    }else if(urmatorul == 0 && matrice[linie][coloana] == 0){
        box.innerHTML = "o";
        urmatorul = 1;
        matrice[linie][coloana] = 2;
    }else if(matrice[linie][coloana] != 0 ){
        alert("Nu  poti pune unde a fost pus deja" );
    }
    if(numarBoxFilled >= 3){
        if(matrice[0][0] == matrice[1][1] && matrice[2][2] == matrice[1][1] && matrice[1][1] != 0){//verifici diag principala
            castig ++;
            numarDinMatrice = matrice [1][1];
        }else if(matrice[2][0] == matrice[1][1] && matrice[0][2] == matrice[1][1] && matrice[1][1] !=0){//verifici diag secundara
            castig ++;
            numarDinMatrice = matrice [1][1];
        }else if(matrice[0][0] == matrice[1][0] && matrice[2][0] == matrice[1][0] && matrice[1][0] != 0){//linia 1
            castig ++;  
            numarDinMatrice = matrice [1][0];
        }else if(matrice[0][1] == matrice[1][1] && matrice[2][1] == matrice[1][1] && matrice[1][1] != 0){//linia 2
            castig ++;  
            numarDinMatrice = matrice [1][1];
        }else if(matrice[0][2] == matrice[1][2] && matrice[2][2] == matrice[1][2] && matrice[1][2] != 0){//linia 3
            castig ++;  
            numarDinMatrice = matrice [1][2];
        }else if(matrice[0][0] == matrice[0][1] && matrice[0][2] == matrice[0][1] && matrice[0][1] != 0){//coloana 1
            castig ++;  
            numarDinMatrice = matrice [0][1];
        }else if(matrice[1][0] == matrice[1][1] && matrice[1][2] == matrice[1][1] && matrice[1][1] != 0){//coloana 2
            castig ++;  
            numarDinMatrice = matrice [1][1];
        }else if(matrice[2][0] == matrice[2][1] && matrice[2][2] == matrice[2][1] && matrice[2][1] != 0){//coloana 3
            castig ++;  
            numarDinMatrice = matrice [2][1];
        }
        if(numarBoxFilled == 9 && castig == 0){
            setTimeout(function() {
                for(i=0;i<3;i++){
                    for(j=0;j<3;j++){
                        matrice[i][j] = 0;
                        document.querySelector(".box" + i + j).innerHTML = "";
                    }
                }
            }, 100);
            
        }
        if(castig == 1){
            if(numarDinMatrice == 1){
                scorx ++;
                document.getElementById("scorx").innerHTML = scorx;
                
            }else{
                scoro ++;
                document.getElementById("scoro").innerHTML = scoro;
            }
            castig = 0;

            setTimeout(function() {
                document.querySelector(".boxScor").style.background = "#228B22";
            }, 100);
            setTimeout(function() {
                document.querySelector(".boxScor").style.background = "transparent";
              }, 1500);
        }
    }
}

function continueGame(){
    urmatorul = 1;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            matrice[i][j] = 0;
            document.querySelector(".box" + i + j).innerHTML = "";
        }
    }
}

function restartGame(){
    scoro = 0;
    scorx = 0
    document.getElementById("scoro").innerHTML = "";
    document.getElementById("scorx").innerHTML = "";
    continueGame();
}
