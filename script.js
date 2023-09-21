const ListeMots=["Cachalot", "Pétunia", "Marthinos","Tournevis","Cambriolage","Dentifrice","Perruque"]
const ListePhrases=["Pas de panique!","La vie,l'univers et le reste.","La vie est un combat!","Le seigneur des anneaux.","Confie toi à l'éternel.","Les efforts payent toujours."]


function afficherproposition(proposition) {
    let ecran=document.querySelector(".ecran")
    ecran.innerText=proposition
}


function afficherscore(guain,mottotal) {
let scoreactu=document.querySelector(".scoreactu")
let affichageScore=` ${guain} / ${mottotal}`
scoreactu.innerText=affichageScore
}

function lancerJeu() {
    let score=0
    i=0
    let ListePropositions=ListeMots

    let zoneSaisie=document.getElementById("zoneSaisie")
    let btnvalider=document.querySelector(".btn-valider")
        
    afficherproposition(ListePropositions[i])
    btnvalider.addEventListener("click", () => {
        console.log(zoneSaisie.value)
        if (ListePropositions[i]===zoneSaisie.value) {
            score++
        }
        i++
        afficherscore(score,i)
        if (ListePropositions[i]===undefined) {
            afficherproposition("Le jeu est fini")
            btnvalider.disabled=true
        }else{
            zoneSaisie.value=""
            afficherproposition(ListePropositions[i])
        }
        
    }) 

    let listeInputs=document.querySelectorAll(".lesinputs input")
    for (let index = 0; index < listeInputs.length; index++) {
        listeInputs[index].addEventListener("change", (event) => {
            console.log(event.target.value)
            if (event.target.value==="1") {
                ListePropositions = ListeMots
            }else{
                ListePropositions = ListePhrases
            }
            afficherproposition(ListePropositions[i])
        })
        
    }
    afficherscore(score,i)
    
}

lancerJeu()