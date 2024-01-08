console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('ticket');
        }, 3000)
 });

 const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
 const addButter = new Promise((resolve,reject) => resolve('butter'));
 const addColdDrinks = new Promise((resolve,reject) => resolve('coldDrinks'));

let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');



let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need my coldDrinks on my popcorn');

let coldDrinks = await addColdDrinks;

    console.log(`husband: i got some ${coldDrinks}`);
    console.log('husband: we should go in');
    console.log('wife: I need my butter on my coldDrinks');    

let butter = await addButter;
console.log(`husband: i got some ${butter}`);
console.log('husband: anything else darling?');    
console.log('wife: Lets got we ar getting late');
console.log('husband: thank you for the remaindeer *grins*');

return ticket
}
preMovie().then((m) => console.log(`person3: shows ${m}`));


console.log('person3: shows ticket');
console.log('person4: shows ticket');