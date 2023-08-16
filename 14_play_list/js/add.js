const instruments = ['piano', 'drums', 'trumpet'];
instruments.push( 'guitar', 'violin', 'triangle' );
instruments.unshift( 'cowbell', 'tuba' );

const brass = [ ['trumpet'], ['tuba'], ['trombone'] ];
const musics = [...brass];

console.log(musics.shift().shift()); 
//  "trumpet"
console.log(musics);
//[['tuba'], ['trombone'] ]

//  Notice how the brass array is also affected by this:
console.log(brass);
//  [ [], ["tuba"], ["trombone"] ]