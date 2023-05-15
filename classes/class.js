class Person {
    constructor(navn, arms, torso, legs, feet)
    {
        this.navn = navn
        this.arms = arms
        this.torso = torso
        this.legs = legs
        this.feet = feet;

    }
    
    selvrespek() {
        return `${this.navn} - "Jeg har selvrespekt"`;
    }

}

chrisNg = new Person("Chiotoffer", "hater", [1, 2 , 3, 4, 5, 6], "som", "leker")

const displayAttr = document.createElement('p');
displayAttr.textContent = "hiiiii"
const txt = document.querySelector(".txt")
txt.append(displayAttr)
txt.after(chrisNg.torso.slice(3, 5))

let OOO = [...chrisNg.torso, "tre", "fire"]

console.log(OOO)

OOO[2] = "JAAAAJ"

console.log(OOO)
