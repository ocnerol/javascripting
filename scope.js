/* const a = 1; const b = 2; const c = 3;  
       
     (function firstFunction () {  
       const b = 5; const c = 6;  
       
       (function secondFunction () {  
         const b = 8;
         console.log(`a: ${a}, b: ${b}, c: ${c}`);  
       
         (function thirdFunction () {  
           const a = 7; const c = 9;  
       
           (function fourthFunction () {  
             const a = 1; const c = 8  
           })()  
         })()  
       })()  
     })();

*/

function smartGarbage(trash, bins) {
  switch (trash) {
    case 'waste': {
      bins.waste += 1;
      break;
    }

    case 'recycling': {
      bins.recycling += 1;
      break;
    }

    case 'compost': {
      bins.compost += 1;
      break;
    }
  }
  return bins;
};

// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38


const carPassing = function(cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: speed
  }
  cars.push(newCar);
  return cars;
}


const judgeVegetable = function (vegetables, metric) {
  let winner;
  let highestCharacteristic = 0;
  for (let submission of vegetables) {
    switch (metric) {
    case 'redness': {
      winner = submission.redness > highestCharacteristic ? submission.submitter : winner;
      highestCharacteristic = submission.redness > highestCharacteristic ? submission.redness : highestCharacteristic;
      break;
    }

    case 'plumpness': {
      winner = submission.plumpness > highestCharacteristic ? submission.submitter : winner;
      highestCharacteristic = submission.plumpness > highestCharacteristic ? submission.plumpness :  highestCharacteristic;
      break;
    }
    }
  }
  return winner;
  
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
//console.log(judgeVegetable(vegetables, 'redness'));


let example;
example = 5 > 3 ? "five is greater than 3" : "five is less than 3";
console.log(example);

let exampleString = "";
exampleString = true ? "blank" : "blank2";
console.log(exampleString);