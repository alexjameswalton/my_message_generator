const jokes = {

    lilPeteyQ : [
        "Lil Petey:  What is a chickens favorite food?",
        "Lil Petey:  What do you call a sheep with no legs?",
        "Lil Petey:  What do you call a fish with no eyes?", 
        "Lil Petey:  What does a frog have for breakfast?",
        "Lil Petey:  What do you get if you mix two people and two more people?",
        "Lil Petey:  What did the French-man say when he agreed twice?"
    ],

    peteyQ : [
        "Petey:  I don't know",
        "Petey:  I give up",
        "Petey:  This won't be funny",
        "Petey:  Will you stop?",
        "Petey:  Please be quiet",
        "Petey:  ARGHHHHHH"
    ],

    lilPeteyA : [
        "Lil Petey:  Poo",
        "Lil Petey:  A diarrhea cloud",
        "Lil Petey:  A wee-wee",
        "Lil Petey:  Frog poo",
        "Lil Petey:  Poo-poo",
        "Lil Petey:  Wee-wee"
    ],

    createJoke() {
        let a = this.lilPeteyQ[Math.floor(Math.random() * 6)];
        let b = this.peteyQ[Math.floor(Math.random() * 6)];
        let c = this.lilPeteyA[Math.floor(Math.random() * 6)];
        //return `Q: ${a} R: ${b} A: ${c}.` 
        return a + '\n' + b + '\n' + c 
    }
};


console.log(jokes.createJoke())


