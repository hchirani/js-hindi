const myNums = [1,2,3]

// const myTotals = myNums.reduce ( function(acc, curval) {
//      console.log(`acc: ${acc} and curval: ${curval}`);
//      return acc + curval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "dhosa",
        price: 130
    },
    {
        itemname: "vadapau",
        price: 20
    },
    {
        itemname: "manchuriam",
        price: 90
    },
    {
        itemname: "panipuri",
        price: 30
    },
]

const priceToPay = shoppingCart.reduce ( (acc, item) => acc + item.price, 0)

console.log(priceToPay);