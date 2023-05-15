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

chrisNg = new Person("Chiotoffer", "hater", "barn", "som", "leker")

console.log(chrisNg.selvrespek())

