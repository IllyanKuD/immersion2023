//declaration de variable
let msg = 'hello world'
//affichage dans la console du navigateur
console.log(msg)

//declaration
const PI= 3.14
let rayon = 10
var perimetre = 2* PI * rayon 
console.log(perimetre)

//type

let un_entier = 20
let un_flottant=3.14
let un_boolen = true
let une_chaine="Hello"
let un_tableau= ['le Monde','World']
let msg2= une_chaine+' '+un_tableau[0]
console.log(msg2)


let gb= {
    first_name: 'gregory',
    last_name: 'bourguin',
    birth: new Date('1971-10-09'),
    mail: 'mail'
}
console.log('Prenom:'+gb.first_name)


let rep = window.prompt("Quel est ton nom ?") ; 
// 2ème boite de dialogue : message avec la réponse
window.alert('Bonjour ' + rep + ' !')

//utilisation du while (moyenne)
let notes=[18,15,6,20,12]
let acc=0
let i=0
while (i<notes.length){
    acc += notes[i]
    i++
}
let moyenne= acc/notes.length
console.log(moyenne)

let acc2=0
for(let x=0; x<notes.length; x++){
    acc2+=notes[x]
}
let moyennes= acc2/notes.length
console.log("la moyenne avec for est :"+ moyennes)


//each && for
acc3=0

notes.forEach((valeur, indice)=> {
    
    console.log('note'+ indice+':'+valeur)
    acc3+=valeur
})

function disBonjourA(nom, ponctuation='!'){
    console.log('Hello ' + nom + ' ' + ponctuation)
}

disBonjourA('Greg')
disBonjourA('Greg', ':)')

