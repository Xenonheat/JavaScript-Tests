class CloneObj {
	optCloneObj(obj_to_be_cloned) {
		// Function that provides a easier implementation of cloning barring no functions in obj
		var obj = obj_to_be_cloned;
		var new_obj = JSON.parse(JSON.stringify(obj));
		return new_obj;
	}
}

describe('Test 2 - Clone Object', function () {
	// Create a new clone instance of the clone function
	var cloneable = new CloneObj();

	// It part of Jasmine
	it('Should clone an object', function () {

		// Create expected object
		var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
		    obj = {};
		console.log("Object: " + JSON.stringify(obj));
		console.log("Expected: " + JSON.stringify(expected));

		// Perform Clone Function
		obj = cloneable.optCloneObj(expected);

		// Log both objects to console
		console.log("After Object: " + JSON.stringify(obj));
		console.log("After Expected: " + JSON.stringify(expected));

		// Perform tests
		expect(obj).toEqual(expected);
		expect(obj).not.toBe(expected);

	});
});
