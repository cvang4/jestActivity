//importing all functs in one
const {playRound, getHand, Player1, hands, playGame} = require('../rps_test');

// this tests with importing all functs in one curly brace
  test('Check player 1 name', () => {
    expect(Player1.Name).toBe("Player 1");
  });

  test('Check hands amount', () => {
    expect(hands).toHaveLength(3);
  });

  test('check if player hands will return rock, paper, or scissor', () => {
      expect(playRound).toBeTruthy()
    });

  test('check if playRound funciton gets called', () => {
      expect(playGame.playRound()).toHaveBeenCalled()
    });

test('return some value from playRound function', () => {
  expect(playRound(Player1)).toReturn('rock, paper, scissors')
});


//importing each individually
// const playRound = require('../rps_test');
// const getHand = require('../rps_test');
// const hands = require('../rps_test');
// const Player1 = require('../rps_test');
// const playGame = require('../rps_test');

// test('check player 1 name', () => {
//   expect(Player1.Player1.Name).toBe("Player 1");
// });

// test('Check hands amount', () => {
//   expect(hands.hands).toHaveLength(3)
// });

// test('check if player hands will return rock, paper, or scissor', () => {
//   expect(playRound.playRound).toBeTruthy()
// });

// test('check if " wins the game!" gets called', () => {
//   expect("Player 1 picked " + a, "Player 2 picked " + b + ": Player 1 wins round!").toHaveBeenCalled()
// });

// test('return some value from getHand function', () => {
//   expect(playRound).toReturn()
// });





// Hector's Example
//   let user = {
//     name: 'John',
//     age: 55,
//     isPremium: false,
// }

// //takes in string and callback which is blank
// describe('Test user object',() => {
//     //tests username value to be equal
//     test ('tests to see if name is John', () => {
//         expect(user.name).toBe('John');
//     });

//     //this is to test user age
//     test ('tests to see if name is John', () => {
//         expect(user.age>13).toBeTruthy();
//         expect(user.age).toBeGreaterThan(13);
//     });
// } )
