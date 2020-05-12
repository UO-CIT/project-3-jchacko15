//jshint esversion: 6


//Req B
function bitBatBotorNot(x) {
  let result = "";

  if (x % 3 == 0) {
    result += `Bit`;
  }

  if (x % 5 == 0) {
    result += `Bat`;
  }

  if (x % 7 == 0) {
    result += `Bot`;
  }

  if((x % 3 != 0) && (x % 5 != 0) && (x % 7 != 0)) {
    result = `Not`;
  }

  return result;
};


//Req C
let findAllbitBatBotOrNots1 = arr => {

function bit(item,index,array) {
  result = "";
if (item % 3 == 0){
result += 'Bit';
}

if (item % 5 == 0){
result += 'Bat';
}

if (item % 7 == 0){
result += 'Bot';
}

if(item % 3 != 0 && item % 5 != 0 && item % 7 != 0) {
  result = 'Not';
}

array[index] = item + ":" + result;
}

arr.map(bit);
return arr;

}


//Req D
let findAllbitBatBotOrNots2 = arr => {
  resultarray = [];

for (i = 0; i < arr.length; i++){
  result = "";
x = arr[i];

if (x % 3 == 0){
result +='bit';

}

if (x % 5 == 0){
result += 'bat';

}

if (x % 7 == 0){
result +='bot';

}

if((x % 3 != 0) && (x % 5 != 0) && (x % 7 != 0)){
result = 'not';

}

resultarray.push(arr[i] + ":" + result);

}

return resultarray;
}



//Req. E
let findAllbitBatBotOrNots3 = arr => {
  resultarray = [];
  result = "";

for (const x of arr) {

if (x % 3 == 0) {
result += 'bit';

}

if (x % 5 == 0) {
result += 'bat';

}

if (x % 7 == 0){
result += 'bot';

}

if (x % 3 != 0 && x % 5 != 0 && x % 7 != 0) {
result='not';

}

resultarray.push(x + ":" + result);

}

return resultarray;
}




//Req. F
let findAllbitBatBotOrNots4 = arr => {

function bit(item,index,array) {
  result = "";


 if(item % 3 == 0){
  result += 'bit';

}

 if(item % 5 == 0){
   result += 'bat';

}

 if(item % 7 == 0){
   result+='bot';

}

  if(item % 3 != 0 && item % 5 != 0 && item % 7 != 0) {

  result = 'not';
}

array[index] = item + ":" + result;
}

arr.forEach(bit);
return arr;
}



//Req XC
let findAllbitBatBotOrNotsXC = arr => {
  resultarray = [];
  result = "";

for( x in arr)  {
y = arr[x];

  if(y % 3 == 0){
  result += 'bit';

}

  if(y % 5 == 0){
  result += 'bat';

}

  if(y % 7 == 0){
  result += 'bot';

}

if(y % 3 != 0 && y % 5 != 0 && y % 7 != 0){
  result='not';
}


resultarray.push(y + ":" + result);
}

return resultarray;
}

findAllbitBatBotOrNots2([9,10,28,30,34,105]);

