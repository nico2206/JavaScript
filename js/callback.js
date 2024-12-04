function myDisplayer(some) {
    console.log(some);
}
function esPrimo(num){
    console.log(`${num} es numero primo`);

}
// simular que se consulta la pagina de antecedentes de la
//policia. Esta requiere el num de identificacion y nos devuelve 
//si la persona con ese numero tiene antecedentes o no
const consultarpolicia = (callback) => {
    setTimeout(() => {
        const segDesde1970 = Math.floor(Date.now()/ 1000);
        if(!callback()){
            console.log("no tiene antecedentes")
        }else{
            console.log("tiene antecedentes")
        }

    })
}

function mycalculator(num1, num2, funcCallback){
    let sum = num1 + num2;
    funcCallback(sum);
}
mycalculator(5, 5, myDisplayer)
mycalculator(5, 5, esPrimo)

consultarpolicia(mycalculator(2, 5, myDisplayer));
consultarpolicia(esPrimo);
for(let i=1; i<= 7; i++){
    setTimeout(i => {
        console.log("Ejecucion" + i)
        consultarpolicia(esPrimo)
    }, Math.random()*3+2);
}
