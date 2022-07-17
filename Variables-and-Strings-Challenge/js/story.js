// 1. Declare variables and capture input.

let person = prompt("Enter a person's name.");
let adjective01 = prompt("Enter an adjective.");
let adjective02 = prompt("Enter an adjective.");
let noun01 = prompt("Enter a noun.");
let adjective03 = prompt("Enter an adjective.");
let noun02 = prompt("Enter a noun.");
let adjective04 = prompt("Enter an adjective.");
let color01 = prompt("Enter a color.");
let verb01 = prompt("Enter a present-tense verb.");
let verb02 = prompt("Enter a present-tense verb.");
let verb03 = prompt("Enter a past-tense verb.");
let adjective05 = prompt("Enter an adjective.");
let verb04 = prompt("Enter a present-tense verb.");

// 2. Combine the input with other words to create a story.

let madLib01 = `Yesterday, ${person} and I went to the park.  On our 
way to the ${adjective01} park, we saw a ${adjective02} ${noun01} 
on a bike. We also saw big ${adjective03} balloons tied
to a ${noun02}.`;

let madLib02 =`Once we got to the ${adjective04} park,
the sky turned ${color01}. It started to ${verb01} and ${verb02}. 
${person} and I ${verb03} all the way home.`;

let madLib03 = `Tomorrow, we will try to go to the ${adjective05} park again and 
hope it doesn't ${verb04}.`;

// 3. Display the story as a <p> inside the <main> element.
//    Learned that String Literal newlines do *not* make new paragraphs

document.querySelector('main').innerHTML = '<p>' + madLib01 + '</p>' + 
                                           '<p>' + madLib02 + '</p>' + 
                                           '<p>' + madLib03 + '</p>';