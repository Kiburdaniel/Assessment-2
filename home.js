///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

const greetUser = (username) => {
    return `Welcome back, ${username}`;
  };
  
  // Example usage:
  const greeting = greetUser('Daniel');
  console.log(greeting);
  
  //////////////////PROBLEM 2////////////////////
  /* 
      Below is an array of zip codes that are in
      the restaurant's delivery zone. 
  
      Write a function called `canWeDeliver` that
      takes in one argument, `zipCode`.
  
      If the zip code passed in is in the array,
      return a string letting the user know they
      are eligible for delivery. If they are not, 
      return a string letting them know that. 
  
      For example:
      canWeDeliver(84606) 
          // `Sorry, we can't deliver to that address`
      canWeDeliver(85205) 
          // `You're in our delivery zone!`
  */
  
  const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]
  
  const deliveryZone = [85205, 90210, 75001, 60601, 84606];
  
  const canWeDeliver = (zipCode) => {
    if (deliveryZone.includes(zipCode)) {
      return "You're in our delivery zone!";
    } else {
      return "Sorry, we can't deliver to that address";
    }
  };
  
  // Example usage:
  console.log(canWeDeliver(84606)); // `Sorry, we can't deliver to that address`
  console.log(canWeDeliver(85205)); // `You're in our delivery zone!
  
  
  /* 
      Problem 2 Continued
  
      Now you're going to rewrite your function.
  
      If you wrote `canWeDeliver` using a loop of
      some kind, write a new function (`canWeDeliverTwo`)
      below, using the `includes` array method. 
      Look it up on MDN if you're not sure how to use 
      it. 
  
      If you already used the `includes` method, 
      write a new function using some sort of 
      loop (for loop, higher order array method).
      Name your new function `canWeDeliverTwo`.
  */
  
  const canWeDeliverTwo = (zipCode) => {
    for (let i = 0; i < deliveryZone.length; i++) {
      if (deliveryZone[i] === zipCode) {
        return "You're in our delivery zone!";
      }
    }
    return "Sorry, we can't deliver to that address";
  };
  
  // Example usage:
  console.log(canWeDeliverTwo(84606)); // `Sorry, we can't deliver to that address`
  console.log(canWeDeliverTwo(85205)); // `You're in our delivery zone!
  
  
  //////////////////PROBLEM 3////////////////////
  /* 
      Below is an array of objects that have some
      information about a couple of deals that are
      available at the restaurant currently. 
  
      You are going to access the object's properties 
      and change some values. Don't edit the array 
      directly, let's use the `replace` method.
  
      Read on for more instructions.
  */
  
  /*
      The owner has decided to take the 15% off
      deal down to 10%.
  
      Reassign the value of the first deal's title
      to be itself, but use the `replace` method
      to replace the 15 with a 10.
  
      (Hint: If you don't remember the `replace` method, there is an example
      in the handout for the "Intro to JS" lecture)
  */
  
  //CODE HERE
      
  
  // Copy the array to avoid modifying it directly
  updatedDeals[0].title = updatedDeals[0].title.replace('15%', '10%');
  const updatedDeals = [...deals];
  
  // Update the first deal's title using the replace method
  updatedDeals[0].title = updatedDeals[0].title.replace('15%', '10%');
  
  // Log the updated array in a readable format
  console.log(JSON.stringify(updatedDeals, null, 2));
  
  
  [ { "title": "10% Off!", "desc": "Applied to your entire order when you spend $30 or more" }, { "title": "Free Kids Meal with 2 Regular Entrees", "desc": "This deal lasts until the end of March!" } ]
  
  
  
  /*
      The restaurant is going to continue its
      family deal for another month. 
  
      Reassign the value of the second deal's desc
      to be itself, but use the `replace` method
      to replace the word March with April.
  */
  
  //CODE HERE
  const deals = [
    {
      title: '15% Off!',
      desc: 'Applied to your entire order when you spend $30 or more'
    },
    {
      title: 'Free Kids Meal with 2 Regular Entrees',
      desc: 'This deal lasts until the end of March!'
    }
  ];
  
  // Copy the array to avoid modifying it directly
  
  // Update the second deal's desc using the replace method
  updatedDeals[1].desc = updatedDeals[1].desc.replace('March', 'April');
  
  // Log the updated array in a readable format
  console.log(JSON.stringify(updatedDeals, null, 2));
  
  [ { "title": "15% Off!", "desc": "Applied to your entire order when you spend $30 or more" }, { "title": "Free Kids Meal with 2 Regular Entrees", 
  "desc": "This deal lasts until the end of April!" } ]