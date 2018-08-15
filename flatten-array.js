class FlattenArray {
	flatten(arr_flat) {
		// Function - Use concat built-in func() to merge arrays into a single variable
		var arr = arr_flat;
		//var new_arr = arr.reduce((a, b) => a.concat(b), []);
		if (Array.isArray(arr)) {
			flatten(arr);
		}
		else return arr;
	}
}


// INITIAL ATTEMPT AT CODE
function flattenNestArray(cur_arr, arr) {
	if (!arr) {
		arr = []
	}
	for (var index =0; index < cur_arr.length; index++) {
	    if (cur_arr[index].constructor == Array) {
	        arr.concat(flattenNestArray(cur_arr[index], arr));
	    }
	    else {
	        arr.push(cur_arr[index]);
	    }
	}
	return arr;
}

// OPTIMIZED VERSION OF THE CODE
const flattenOpt = arr => arr.reduce(
	(a, b) => a.concat(Array.isArray(b) ? flattenOpt(b) : b), []
);

describe('Test 3 - Flatten array', function () {
	// Create a new variable to hold the flatten instance
	var flatten = new FlattenArray();

	// Perform 'it' oper
	it('Should flatten an array', function () {
		var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
	    	expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

	    // Create new variable to hold new list
	    var arr_mod = [];
	    var arr_opt = [];

	    console.log("Arr: " + JSON.stringify(arr));
		console.log("Expected: " + JSON.stringify(expected));

		// Perform Flatten Function
		arr_mod = flattenNestArray(arr);

		// Perform Optimized Flatten Function
		arr_opt = flattenOpt(arr);

		// Log objects to console
		console.log("After Arr: " + JSON.stringify(arr_opt));

		// Sort List in ascending order
		arr_opt = arr_opt.sort((a, b) => a - b);

		// Log objects to console
		console.log("After Arr 2: " + JSON.stringify(arr_opt));
		console.log("After Expected: " + JSON.stringify(expected));

		// Perform test
    	expect(arr_opt).toEqual(expected);
  })
});