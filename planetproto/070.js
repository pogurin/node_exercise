// -> Define an object called 'Robot'
var Robot = {
	new: function() {
		return Object.create(this);
	}
};
// -> Define a method called 'new' in Robot
// -> When Robot.new is called is should return a 
//  new object with Robot as its prototype 
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot: Robot
}
