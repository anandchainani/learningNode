function addFunction (a,b){
    console.log(`the sum of two numbers is ${a+b}`);
}

// addFunction(2,3);

let ace = (c,d) => {
    console.log(`the sum is ${c+d}`);
};

// ace(3,3);

let aced = () => console.log(`this is working`);

// aced();

module.exports = {
    addFunction, 
    ace,
    aced
};