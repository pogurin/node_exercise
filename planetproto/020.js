// -> Create a machine object
//    with a property motors = 4
var machine = {
	motors: 4
};


// -> Create a robot object
//    with a property friendly = true
var robot = {
	friendly: true
};

// -> Create a robby object
var robby = {};

robot.__proto__ = machine;
// -> Make machine the prototype of robot

robby.__proto__ = robot;
// -> Make robot the prototype of robby
claim(robby.motors, 4);
// -> What is `robby.motors`?
claim(robby.friendly, true);

// -> What is `robby.friendly`?



// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
