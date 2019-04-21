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


var theLine = [];

function currLine(myDeli) {
  let i = 0;
  while (i < myDeli.length) {
    line.push(` `+[i+1]+`. `  + myDeli[i])
    i++;
  }
  if (myDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + theLine);
}
