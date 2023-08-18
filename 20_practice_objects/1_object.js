
const book = {}

book.title = "Guerre et Paix";
book.author = "Tolstoï";
book.publishedYear = 1869;


for (let key in book){
    console.log(`${key}: ${book[key]}`);
}

