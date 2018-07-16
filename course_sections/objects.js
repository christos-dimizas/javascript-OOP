// ------------------------ //
// --- Object Literal syntax
// ------------------------ //
// The simplest way to create an object is using an object literal
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: () => console.log('draw')
};
circle1.draw();


// To create multiple objects with the same structure and behavior (methods), use a factory or a constructor

// ------------------------ //
// --- Factories
// ------------------------ //
function createCircle() {
    return {
        radius: 1,
        draw: () => console.log('draw'),
    };
}

const circle2 = createCircle();

// ------------------------ //
// --- Constructors
// ------------------------ //
function Circle1(radius) {
    this.radius = radius;
    this.draw = () => console.log('draw');
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object.
const x = {};
x.constructor; // returns Object()

const circle3 = new Circle1(1);

// In JavaScript, functions are objects. They have properties and methods.
Circle1.name;
Circle1.length;
Circle1.constructor; // returns Function()
Circle1.call({}, 1); // to call the Circle function
Circle1.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference.
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array

// JavaScript objects are dynamic. You can add/remove properties:
circle3.location = {};
circle3['location'] = {};

delete circle3.location;

// ------------------------ //
// --- Abstraction (expose only essentials)
// ------------------------ //
// Abstraction means hiding the complexity/details and showing only the essentials.
// We can hide the details by using private members. Replace "this" with "let".
function Circle2(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    let computeOptimumLocation = function (factor) {
        //
    }; // Using let instead of this this variable becomes private.
    this.draw = () => {
        computeOptimumLocation(0.1);
        console.log('draw');
    };
}

const circle4 = new Circle2(10);
circle4.draw();

// ------------------------ //
// --- Getters and Setters
// ------------------------ //
// To define a getter/setter, use Object.defineProperty():
function Circle3(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = () => defaultLocation;
    this.draw = () => {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: () => defaultLocation,
        set: (value) => {
            if (!value.x || !value.y) {
                throw new Error('Invalid location');
            }
            defaultLocation = value
        }
    })
}

const circle5 = new Circle3(10);
circle5.draw();