//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
function checkCashRegister (price, cash, cid) {

    //object showing the amount in dollar allocated to each currency unit
    const UNIT_AMOUNT = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }

    // calculating the total available cash in drawer 
    let totalCID = 0;
    for (let element of cid) {
      totalCID += element[1];
    }
    totalCID = totalCID.toFixed(2); //round the amount to two digits after the decimal
  
    let changeToGive = cash - price;
    const changeArray = [];
    
    //checking if the change is greater than the total cash in the drawer
    if (changeToGive > totalCID) {
      return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } 
    
    //checking if the change is equal to the total cash in the drawer
    else if (changeToGive.toFixed(2) === totalCID) {
      return { status: "CLOSED", change: cid };
    } 
    
    //checking if the change is less than the total cash in the drawer
    else {
    //reversing the cash in drawer array so that the highest bills are first used
      cid = cid.reverse(); 
      
      //getting each subarray in the cid array
      for (let elem of cid) {
        // taking the first item in each of the subarray and giving it a value of 0
        let temp = [elem[0], 0];
        while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
          //increasing the second item(value) in temp
          // by the amount in dollar equivalent to the currency unit
          temp[1] += UNIT_AMOUNT[elem[0]];

          //reducing the amount of the currency unit in cid by the amount removed
          elem[1] -= UNIT_AMOUNT[elem[0]];

          //calculating the remaining change
          changeToGive -= UNIT_AMOUNT[elem[0]];
          
          //rounding the amount to two places after the decimal
          changeToGive = changeToGive.toFixed(2);
        }

        //checking if any amount has been added
        if (temp[1] > 0) {
          changeArray.push(temp);
        }
      }
    
    }
    //checking if the amount of each currency unit in cid is not up to the change to give
    if (changeToGive > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArray};
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
