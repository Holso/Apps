/*==== CALCULATOR ====*/

/*=== Declarare ===*/
let ecranPrincipal = document.querySelector(".ecran-principal");
let ecranSecundar = document.querySelector('.ecran-secundar');


let numarOperatori,gataDeAfisat,numatCifreAfisate,operator,sirNou,compara;
let a,b,numarOperatoriEcranSecundar;
numarOperatori = gataDeAfisat = numatCifreAfisate = operator = compara = numarOperatoriEcranSecundar = 0; punct = 0;
a = b = 0;
function afiseazaEcran(numar){
    operator = 0;
    if(numar !=0 ){//orice cifra fara 0
        numatCifreAfisate ++ ;
        ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + numar;
    }else if(numatCifreAfisate > 0){//daca avem mai multe cifre ca sa putem afisa 0
        ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + numar;
    }

    if(compara >= 1){//daca vreau sa compar
        compara ++ ;
        b = b*10 + parseInt(ecranPrincipal.innerText.slice(-1));
    }

    if(numarOperatori > 0){
        gataDeAfisat = 1;
        ultimaLitera = ecranPrincipal.innerText.slice(-1);
        if(!isNaN(parseInt(ultimaLitera )) && typeof parseInt(ultimaLitera ) === "number"){
            if(punct > 0){
                ecranSecundar.innerHTML = eval(ecranPrincipal.innerHTML).toFixed(2);
            }else{
                ecranSecundar.innerHTML = eval(ecranPrincipal.innerHTML);
            }
        }
    }
}


function operatii(opertorCalculator){
        if(opertorCalculator != 1 && opertorCalculator !=2)
            numarOperatoriEcranSecundar ++;
        if(numarOperatoriEcranSecundar == 2){
            ecranPrincipal.innerHTML = ecranSecundar.innerText + opertorCalculator;
            ecranSecundar.innerHTML = '';
        }
        if(numatCifreAfisate > 0 && operator == 0){//daca este cel putin o cifra pe ecran
            operator ++ ;
            if(opertorCalculator == 1 && punct !=1  && compara == 0){//comparare
                a = ecranPrincipal.innerText;
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + ' Si ';
                compara ++;
            }else if(opertorCalculator == 2 && compara == 0){//punct
                ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + '.';
                punct = 1;
            }else if(numarOperatori <= 1 && compara == 0){//cand e un singur operator pe ecran
                numarOperatori ++;
                if(numarOperatoriEcranSecundar !=2 ){
                    ecranPrincipal.innerHTML = ecranPrincipal.innerHTML + opertorCalculator;
                }else{
                    numarOperatoriEcranSecundar = 0;
                }
            }
        }else if(numatCifreAfisate > 0 && operator == 1 && opertorCalculator != 1 && opertorCalculator != 2 && compara == 0){//daca vrei sa schimbi operatoru
            sirNou = ecranPrincipal.innerText.slice(0, -1);
            ecranPrincipal.innerHTML = sirNou + opertorCalculator;
        }
        
}

function egal(){
    if(punct == 0 && gataDeAfisat == 1 ){//cand nu am punct pe ecran
        ecranPrincipal.innerHTML = ecranSecundar.innerText;
        ecranSecundar.innerHTML = '';
        numarOperatori = 0;
    }else if(punct == 1 && gataDeAfisat == 1){//cand am punct pe ecran
        ultimaLitera = ecranPrincipal.innerText.slice(-1);
        if(ultimaLitera != '.'){
            sirNou = ecranSecundar.innerText;
            ecranPrincipal.innerHTML = ecranSecundar.innerText;
            ecranSecundar.innerHTML = '';
        }
    }
    if(compara >= 2){
        if(a > b){
            ecranPrincipal.innerHTML = a + '>' + b;
        }else if( a < b){
            ecranPrincipal.innerHTML = a + '<' + b;
        }else if(a == b){
            ecranPrincipal.innerHTML = a + '=' + b;
        }
    }
}


function clearAll(){
    numarOperatori = punct = gataDeAfisat = a = b = compara = 0;
    ecranPrincipal.innerHTML = "";
    ecranSecundar.innerHTML = "";
}






        /*==== X si 0 ====*/

//====Declarare====
let urmatorul,numarBoxFilled,castig, numarDinMatrice,scoro,scorx,i,j,notFinished;
let box = document.querySelector(".box");
let backgroundBox = document.querySelector(".xsio");
urmatorul = 1, numarBoxFilled = scoro = scorx = 0;

let matrice = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

castig = 0, numarDinMatrice = 0, notFinished = 1;
function patrat(linie,coloana){
    if(notFinished == 1){
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
            numarBoxFilled -- ;
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
                    backgroundBox.style.background = "red";
                }, 100);
                setTimeout(function() {
                    backgroundBox.style.background = "#e8e8e8";
                    continueGame();
                }, 1500);
            }
            if(castig == 1){
                notFinished = 0;
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
                }, 200);
                setTimeout(function() {
                    document.querySelector(".boxScor").style.background = "transparent";
                }, 1500);

            }
        }
    }else{
        alert("Pentru a continua jocul apasati Continua jocul");
    }
    

}

function continueGame(){
    urmatorul = 1;
    notFinished = 1;
    numarBoxFilled = 0;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            matrice[i][j] = 0;
            document.querySelector(".box" + i + j).innerHTML = "";
        }
    }
}

function restartGame(){
    scoro = 0;
    scorx = 0;
    numarBoxFilled = 0;
    notFinished = 1;
    document.getElementById("scoro").innerHTML = "";
    document.getElementById("scorx").innerHTML = "";
    continueGame();
}

