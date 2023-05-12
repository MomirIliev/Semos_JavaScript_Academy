// First Assignment

// assignment b
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0)
        console.log(`number ${i} is even`);
    else
        console.log(`number ${i} is odd`);
};


// Second Assignment

// Assignment a
for (let i = 0; i < 10; i++){
    console.log(`${i} * 9 = ${i * 9}`); 
}

// Assignment b
let multipliers = [];
for (let i = 0; i < 10; i++) {
    multipliers[i] = [];
    for (let j = 0; j < 10; j++) {
        multipliers[i][j] = `${i} * ${j} = ${i * j}`;
    };
}
for (let i = 0; i < 10; i++)
console.log(multipliers[i]);


// Third Assignment

    for (let i = 0; i <= 100; i++){
        if (i >= 0 && i < 60)
        console.log(`Because you have only ${i} points your grade is F`);
        else if (i >= 60 && i < 70)
        console.log(`Because you have ${i} points your grade is D`);
        else if (i >= 70 && i < 80)
        console.log(`Because you have ${i} points your grade is C`);
        else if (i >= 80 && i < 90)
        console.log(`Because you have ${i} points your grade is B`);
        else if (i >= 90 && i <= 100)
        console.log(`Because you have ${i} points your grade is А`);
};


// Fourht Assignment

let hashtags = '';
for (let i = 0; i < 5; i++){
    hashtags += `#`;
    console.log(hashtags); 
};

for (let i = 0; i <= 5; i++){
    console.log(`#`.repeat(i));
}


// Fifth Assignment

let chessBoard = []; 
for (let i = 0; i < 8; i++) {
    chessBoard[i] = [];
    for (let j = 0; j < 8; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0)
                chessBoard[i][j] = '■';
            else chessBoard[i][j] = '□';
        }
        else
            if (j % 2 == 1)
                chessBoard[i][j] = '■';
            else chessBoard[i][j] = '□';
    }
};

for (let i = 0; i < chessBoard.length; i++)
console.log(chessBoard[i]);

