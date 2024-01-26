const book={
    bookAuthorName:"JavaScript",
    price:296,
    author:"chgsdh"
}

const {bookAuthorName}=book //This syntax is a shorthand for extracting a property from an object and creating a variable with the same name.
console.log(bookAuthorName);

const {bookAuthorName:author}=book // we can destruct this object

console.log(author);


