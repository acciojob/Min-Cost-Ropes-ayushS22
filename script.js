function mincost(arr)
{ 
//write your code here
// return the min cost
	 let totalCost = 0;

    // Loop until only one rope remains
    while (arr.length > 1) {
        // Sort the array to get two smallest ropes
        arr.sort((a, b) => a - b);

        // Remove the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Combine them
        let cost = first + second;
        totalCost += cost;

        // Add the combined rope back to the array
        arr.push(cost);
    }

    return totalCost;
  
}

module.exports=mincost;
