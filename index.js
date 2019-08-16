// # javascript-class-review1-cw
//
// ### Problem 1:
//
// Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author.
// Create 3 instances of Books and put them in an array.
// Afterwards print each one in the format below:
//     ```
// The book [BOOK NAME] has [RATING] stars!!!
// ```

class Book
{
    constructor (name,rating,genre,author)

    {
        this.name_p =name;
        this.rating_p=rating;
        this.genre_p=genre;
        this.author_p=author;

    }

}

function main ()
{

  let book1 = new Book ("Alchemist",8,"Philosophy","Paulo Coelho");

  let book2 = new Book ("Aha",4,"Fiction","JKF");

  let book3 = new Book ("Seven Habbits",10,"Motivational","Steven Cohen");

  let arrayOfBooks = [];

   arrayOfBooks.push(book1);
   arrayOfBooks.push(book2);
   arrayOfBooks.push(book3);

  console.log(arrayOfBooks);


    arrayOfBooks.forEach
    (
        function (eachElement)
        {
            console.log (eachElement);
            console.log("The book   " + eachElement.name_p +" has "+ eachElement.rating_p + "    stars!!!");
        }
    );
}

main();






