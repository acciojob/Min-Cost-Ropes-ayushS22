function mincost(arr)
{ 
//write your code here
// return the min cost
	 let totalCost = 0;// This will keep track of the total cost

    // Loop until only one rope remains
    while (arr.length > 1) {//As long as there are more than one rope, we keep connecting them.
        // Sort the array to get two smallest ropes
        arr.sort((a, b) => a - b);
		//Sort the array in ascending order, so the shortest ropes come first.
        //a and b are two elements being compared.
        //(a - b) sorts numbers from smallest to largest.

        // Remove the two smallest ropes
		//.shift() removes and returns the first element from the array.
        // After sorting, the two smallest ropes are at the front, so this gets them.
        let first = arr.shift();
        let second = arr.shift();

        // Combine them
		//Combine the two smallest ropes: cost = first + second.
        //Add this cost to totalCost.
        let cost = first + second;
        totalCost += cost;

        // Add the combined rope back to the array
		//The new combined rope (with length cost) is added back into the array.
        //It may be used in future combinations.
        arr.push(cost);
    }
//Once only one rope is left, we return the total cost of all combinations.
    return totalCost;
  
}

module.exports=mincost;
