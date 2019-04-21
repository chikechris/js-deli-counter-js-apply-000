var myDeli = [];

function getANumber(myDeli, custName) {
  myDeli.push(`${custName}`);
  return (`Welcome, ${custName}. Your number in line is ${myDeli.length}.`)
}

function isServing(myDeli) {
  if(!myDeli.length) {
    return 'There are no customers to be served'} 
  else{'Currently serving' + myDeli.shift(); }
}

function c