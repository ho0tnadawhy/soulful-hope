// soulful-insights.js

const moment = require('moment');

// Function to check if a given date is a significant milestone in one's soulful journey
function isSoulfulMilestone(date) {
  const birthday = moment(date);
  const today = moment();
  const age = today.diff(birthday, 'years');
  
  // Check if the age is a perfect square
  return Math.sqrt(age) % 1 === 0;
}

// Function to calculate the days until the next soulful milestone
function daysUntilNextSoulfulMilestone(date) {
  const nextBirthday = moment(date).add(1, 'years');
  const nextMilestone = Math.pow(Math.ceil(Math.sqrt(nextBirthday.diff(moment(), 'years'))), 2);
  const daysUntilNext = nextBirthday.diff(moment(), 'days');
  return { days: daysUntilNext, milestone: nextMilestone };
}

// Function to generate a soulful affirmation based on the current date
function generateSoulfulAffirmation() {
  const affirmations = [
    "I am worthy of love and belonging.",
    "I trust the journey of my soul.",
    "I embrace the present moment with gratitude.",
    "I am connected to the universe and all its wisdom.",
    "I radiate positive energy and attract abundance into my life.",
    "I am aligned with my purpose and follow my soul's calling."
  ];
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  return affirmations[randomIndex];
}

module.exports = {
  isSoulfulMilestone,
  daysUntilNextSoulfulMilestone,
  generateSoulfulAffirmation
};
