// Control Flow includes if statements and switch statements

// If Statements use the keywords if, else if, and else
const x = 10;
const y = 20;
const z = 30;

if (z < x) {
  console.log('30 is greater than 10');
} else if (y + x === z) {
  console.log('20 + 10 is equal to 30');
} else {
  console.log('None of these statements are true');
}

// Switch Statements use the keywords switch, case, break, and default
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(day);

