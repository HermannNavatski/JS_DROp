//random.index.js

function randomValues(){
    itemNameTicket = Math.floor((Math.random() * 100) + 1);
    itemRareTicket = Math.floor((Math.random() * 5) + 1);
    console.log(itemNameTicket+ " ==> " + itemRareTicket);
}