// All valid credit card numbers
const valid1 = [3, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr){
  let sum = 0
  let sumNotDoubled = 0
  let sumDoubled = 0

let checkDigit = arr.length-2 //far right number minus 1
let oddOnes = arr.length-1 //far right

for(checkDigit; checkDigit>=0; checkDigit-=2){
 // console.log(checkDigit)
  let luhn = arr[checkDigit]
  if(luhn < 0){
    // this is ffor the final  return sum
    return sumDoubled //may have to change this
  }
  if (luhn*2>9){
    luhn = luhn*2 - 9 
    sumDoubled = sumDoubled + luhn
  } else if(luhn*2< 10){
    luhn = luhn*2
    sumDoubled = sumDoubled + luhn
  }}
//first for loop complete
for(oddOnes;oddOnes>=0;oddOnes-=2){
  //console.log(oddOnes)
  let other = arr[oddOnes] 
  //if(other < -1){
    //return sumNotDoubles //may have to change this
 // }
  sumNotDoubled = sumNotDoubled + other
}

sum = sumNotDoubled + sumDoubled

return sum%10==0?true:false

//WOW THIS WOERKS!!!
//no

// this was stage 1  return sumDoubled
//console.log(sumDoubled)
}

/*WELL DONE ME! i did the luhn algo and it works. 
one loop doubles and adds
the other adds 
then sum%10 == 0 returns true!  fantastci*/

function findInvalidCards(nestedArray){
  let allInvalid = []
  for(let i=0;i < nestedArray.length; i++){
    if(validateCred(nestedArray[i])===false){
      allInvalid.push(nestedArray[i])
    }
      }
  return allInvalid
}

//console.log(findInvalidCards(batch))

let bloodyInvalids = findInvalidCards(batch)


function idInvalidCardCompanies(nestedArray){
  
  let companies = []
  for(let i=0;i < nestedArray.length ; i++){
    
if(nestedArray[i][0]===4&&companies.indexOf('Visa') === -1){
      companies.push('Visa')} 

else if (nestedArray[i][0]===3&&companies.indexOf('Amex (American Express)') === -1){
      companies.push('Amex (American Express)')}

 else if (nestedArray[i][0]===5&&companies.indexOf('Mastercard') === -1){
      companies.push('Mastercard')}

   else if (nestedArray[i][0]===6&&companies.indexOf('Discover') === -1){
      companies.push('Discover')

    } //else if (companies.indexOf('Company not found') === -1){companies.push('Company not found')} whatever
  }

//console.log(companies.indexOf('Visa'))
  return companies
}

console.log(idInvalidCardCompanies(batch))





