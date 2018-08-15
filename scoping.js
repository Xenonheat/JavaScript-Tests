describe('Test 3 - Scoping', function () {

  it('should correctly deal with scoping `this` back to the callee', function () {

    function Module () {
      this.foo = 'bar';
    };

    // Create global variables for system
    var mod = new Module(); // Holds a new module instance
    var request; // Declared object used as a callback redirection method

    // Initialized request method that will return the function within the parameterized callback variable
    request = function (callback) {
      // console.log("Method 1: " + this.getFoo());
      return callback();
    };

    // Method of module used as a getter for the foo object variable
    Module.prototype.method = function() {
      // Loses scope in this method.
      // console.log("Method 2: " + this.getFoo());
      return this.foo;
    };

    // Method of module used to initialize the system
    Module.prototype.req = function() {
      /*console.log("Req Function - Calling Request method")
      console.log("Req Function 1: " + this);
      console.log("Req Function 2: " + JSON.stringify(this));*/
      return request(this.method.bind(this));
    };

    console.log("MOD: " + mod.req());
    expect(mod.req()).toBe('bar');

  });

});