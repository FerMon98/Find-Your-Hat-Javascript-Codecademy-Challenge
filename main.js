const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(gamer, field) {
        this.field = field;
        this.gamer = gamer;
    }

    print(){
        let stringField = this.field.toString; 
        this.print(stringField);
    }

    //To play the game
    
    gameDirections() {
        let y = 0;
        let x = 0;

        while (this.gamer[y][x] === fieldCharacter || this.gamer[y][x] === pathCharacter) { 

            const direction = prompt(`Where do you wanna go? Press 'u' for Up, 'd' for Down, 'l' for Left, and 'r' for Right`);
            
            if (direction.toUpperCase() === 'U') {

                if (y === 0) {
                  console.log('You cannot move any further Up. Please choose another direction');
                } else {
                  y -=1
                }
            } 
            
            else if (direction.toUpperCase() === 'D') {
                if (y >= this._field.length) {
                console.log('You cannot move Down. Please choose another direction');
                } else {
                y +=1
                }
            } 
            
            else if (direction.toUpperCase() === 'L') {
                if (x === 0) {
                console.log('There is no other space. Go somewhere else');
                } else {
                x -= 1
                }
            }

            else if (direction.toUpperCase() === 'R') {
                if (x >= this._field[y].length) {
                console.log('Ups! Try again with a different direction');
                } else {
                x += 1
                }
            } 
            
            else {
                console.log('Invalid entry. Please enter U, D, L, or R');
            }

            if (this.gamer[y][x] === hat) {
                console.log('Great job finding the hat!');
            } 
              
            else if (this.gamer[y][x] === hole) {
                console.log('A hole has taken you down, next time :(');
            } 
            
            else {
                this.field[y][x] = pathCharacter;
                this.field[y][x] = user;
                this.print(this.field);
            }
        }

    }


    static generateField(height, width) {
        let characters =[hole, fieldCharacter];
        let createdField = [];
        let index = 0;
        
        while (index <= height) {
            var current = Math.floor(Math.random() * 3);
            var secondLevelArray = []

            while (index <= width) {
                if (current === 1) {
                    secondLevelArray.push[characters[0]];
                }
    
                if (current === 2) {
                    secondLevelArray.push[characters[1]];
                }
            }

            createdField.push[secondLevelArray]
            index++
        }

        let y = Math.floor(Math.random() * height);
        let x = Math.floor(Math.random() * width);
        createdField.splice([y], [x]).push(hat);

        return createdField;
    }

    static coveringHoles(height, width) {
        let coveringField = [];
        let secondLevelArray = []

        for (let i = 0; i <= height; i++) {

            for (let j = 0; j <= width; i++) {
                secondLevelArray.push(fieldCharacter);
            }
            
            coveringField.push(secondLevelArray);
        }

        let y = Math.floor(Math.random() * height);
        let x = Math.floor(Math.random() * width);
        coveringField[y][x].push(pathCharacter);

        return coveringField;
    }
}

//create the blank field for the user to see
const blankField = Field.coveringHoles(10, 6)

//created the field with the hat and holes
const field = Field.generateField(10, 6)
console.log(field);

//instantiate a Field object using newField = hatAndHoles and field = blankField  
myField = new Field (field, blankField);

//call playGame method
myField.gameDirections();