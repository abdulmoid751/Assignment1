

//1. Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let PersonName = "abdul moid";
console.log( "Answer Q2");
console.log("Hello " , PersonName, ", would you like to learn some Python today?");
console.log( "----------------------------------------------");

//2. Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
console.log( "Answer Q3");
console.log( PersonName.toLowerCase() );
console.log( PersonName.toUpperCase() );
let titlecase = PersonName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log( titlecase);
console.log( "----------------------------------------------");


//3. Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author. Your output should look something like the following,
// including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let AuthorName = "Albert Einstein";
let AuthorQuote = "“A person who never made a mistake never tried anything new.“";
console.log( "Answer Q4");
console.log( AuthorName ,", " ,AuthorQuote );
console.log( "----------------------------------------------");


// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable 
//called famous_person. Then compose your message and store it in a new variable called message.
// Print your message.
console.log( "Answer Q5");
console.log( AuthorName ,", " ,AuthorQuote );
console.log( "----------------------------------------------");

// Stripping Names: Store a person’s name, and include some whitespace characters at the 
// beginning and end of the name. Make sure you use each character combination, "\t" and "\n", 
// at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

console.log( "Answer Q6");
let PersonName2 = "   \t\n\t   \t\n\t   Abdul Moeed   \t\n\t    ";
console.log( PersonName2 );
console.log( PersonName2.trim() );


console.log( "----------------------------------------------");

// Number Eight: Write addition, subtraction, multiplication, and division operations 
//that each result in the number 8. Be sure to enclose your operations in print statements to 
//see the results.

console.log( "Answer Q7 , 8");
console.log("addition 5+3 = " , 5+3);
console.log("subtraction 16-8 = " , 16-8);
console.log("division 16/2 = " , 16/2);
console.log("multiplication 4*4 = " , 4*4);
console.log( "----------------------------------------------");

//9. Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.

console.log( "Answer Q9");
let FavoriteNumber = 5;
console.log( "My Favorite Number : " , FavoriteNumber);

console.log( "----------------------------------------------");

//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.

console.log( "Answer Q10");
console.log("My Name is : " , PersonName);
console.log("Current Date is : " , Date.now());
console.log("This is : Getting Started Exercises with TypeScript and Node.js ");

console.log( "----------------------------------------------");

//11. Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

console.log( "Answer Q11");
console.log( "Friends Name");

let FriendsNames = ["Ali" , "Waqas" , "Abdul" ,"Ahmad"]
FriendsNames.forEach(element => {
    console.log(element);
});
console.log( "----------------------------------------------");

//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized 
//with the person’s name.
console.log( "Answer Q12");
FriendsNames.forEach(element => {
    console.log("Hi " , element , "How are you?");
});
console.log( "----------------------------------------------");

//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make 
//a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
console.log( "Answer Q13");
let Favorite_Transportation = ["motorcycle" , "car" , "bicycle" ]
Favorite_Transportation.forEach(element => {
    console.log("I would like to own a Honda ", element);
});
console.log( "----------------------------------------------");

//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
console.log( "Answer Q14");
FriendsNames.forEach(element => {
    console.log("Hi " , element , "How are you? I would like to inviting ", element ," to dinner");
});
console.log( "----------------------------------------------");

//15. Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log( "Answer Q15");
console.log( "Let Guest no 2 is not coming");
let GuestNotAvailalbe = 1;
let NewGuestName = "Shah G";
for(let i = 0; i < FriendsNames.length ; i++)
{
    if(GuestNotAvailalbe == i)
    {
        console.log( "Guest is not coming : " ,FriendsNames[i] );
        console.log( "New Guest Name is : " , NewGuestName );
        FriendsNames[i]  = NewGuestName;

    }
}
console.log( "Sending New invitation messages")
FriendsNames.forEach(element => {
    console.log("Hi " , element , "How are you? I would like to inviting ", element ," to dinner");
});
console.log( "----------------------------------------------");

// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

console.log( "Answer Q16");
console.log( "found a bigger dinner table");
//FriendsNames.unshift( "Test1");
//FriendsNames.push( "Test2");
FriendsNames.splice(0,0, "Kaiser");
FriendsNames.push( "Zain");
let ListMid = FriendsNames.length/2;
console.log( "ListMid " , ListMid);

FriendsNames.splice(ListMid,0, "Fatima");

console.log(FriendsNames );
console.log( "----------------------------------------------");

//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that 
//you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, 
//letting them know they’re still invited.
console.log( "Answer Q17");
console.log( "bigger dinner table is not available so i can invite only two people for dinner");

FriendsNames = FriendsNames.slice(0,2);
console.log(FriendsNames );



// • Remove the last two names from your list, so you have an empty list.
 //Print your list to make sure you actually have an empty list at the end of your program.
console.log( "Making List empty");

 FriendsNames = [];
 console.log(FriendsNames );

console.log( "----------------------------------------------");


//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// •  Reverse the order of your list. Print the array to show that its order has changed.
// •  Reverse the order of your list again. Print the list to show it’s back to its original order.
// •  Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log( "Answer Q18");
let FevPlaces = ["Makah" , "Madina" , "Deosai" , "silicon valley"  ];
console.log( "favorite places");
console.log(FevPlaces );

console.log( "Apply Sorting");

let SortFevPlaces = FevPlaces.sort();
console.log(SortFevPlaces );

console.log( "orignal list ");
console.log(FevPlaces );

console.log( "Apply reverse");

let RevFevPlaces = SortFevPlaces.reverse();
console.log(RevFevPlaces );

console.log( "orignal list ");
console.log(FevPlaces );

console.log( "Apply reverse agian");
FevPlaces = FevPlaces.reverse();
console.log(FevPlaces );

console.log( "Apply reverse agian");
FevPlaces = FevPlaces.reverse();
console.log(FevPlaces );


console.log( "Apply Sorting agian");
 FevPlaces = FevPlaces.sort();
 console.log(FevPlaces );


console.log( "Apply Sorting reverse alphabetical order.");
 FevPlaces = FevPlaces.sort();
 FevPlaces = FevPlaces.reverse();
 console.log(FevPlaces );

 
console.log( "----------------------------------------------");

//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log( "Answer Q19");

FriendsNames.forEach(element => {
    console.log("Hi " , element , "How are you? I would like to inviting ", element ," to dinner");
});
console.log( "----------------------------------------------");



// Think of something you could store in a array. For example, 
//you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
//Write a program that creates a list containing these items.

console.log( "Answer Q20");

let countriesList = ["Afghanistan","Dominica","Brazil","Pakistan","Oman","Libya"]
console.log("list of countries" );
console.log(countriesList );
console.log( "----------------------------------------------");

//21 They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

console.log( "Answer Q21");

const ObjContries: { countries: string[] } = {
    countries: countriesList,
   
  };
  console.log(ObjContries );

  console.log( "----------------------------------------------");


//22. Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.
console.log( "Answer Q22");

console.log( "----------------------------------------------");


//23. Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')


