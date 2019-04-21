var myDeli = [];

function getANumber(myDeli, custName) {
  myDeli.push(`${custName}`);
  return (`Welcome, ${custName}. Your number in line is ${myDeli.length}.`)
}

function isServing()