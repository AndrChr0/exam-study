class Person {
    constructor(name, age, city, favFood, favMemes){
        this.name = name;  
        this.age = age;
        this.city = city;
        this.favFood = favFood;
        this.favMemes = {
            meme1: favMemes[0],
            meme2: favMemes[1],
            meme3: favMemes[2]

        }
    }

    introduce(){
        return `hei, jeg heter ${this.name} og er ${this.age} år gammel. min fav meme er ${this.favMemes.meme1}`
    }
}

andysaurus = new Person("andysaurus", 23, "stavva, men østlands dialekt", "dry fish", ["church fart", "rubber doc", "jacked up"])

console.log(andysaurus.introduce())

const introduceTextLocation = document.querySelector('.content ul')
const introduceText = document.createElement('p');
introduceText.textContent = andysaurus.introduce();
introduceTextLocation.after(introduceText)