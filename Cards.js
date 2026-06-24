window.CardUtils = {};

CardUtils.SUITS = [
"S",
"H",
"C",
"D"
];

CardUtils.RANKS = [
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"J",
"Q",
"K",
"A"
];

CardUtils.makeDeck = function(){

const deck = [];

for(const suit of CardUtils.SUITS){

for(const rank of CardUtils.RANKS){

deck.push({
rank,
suit,
id: rank + suit
});

}

}

return deck;

};

CardUtils.shuffle = function(deck){

const copy = [...deck];

for(let i=copy.length-1;i>0;i--){

const j = Math.floor(
Math.random()*(i+1)
);

[copy[i],copy[j]] =
[copy[j],copy[i]];

}

return copy;

};
