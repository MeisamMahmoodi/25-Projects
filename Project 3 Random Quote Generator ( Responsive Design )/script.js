const quotes = {
  "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
  "- Winston Churchill":
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
  "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
  "- Unknown":
    '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
  "- Vince Lombardi":
    '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
  "- Mahatma Gandhi":
    '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
  "- Martin Luther King Jr":
    '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
  "- Albert Einstein":
    '"Strive not to be a success, but rather to be of value."',
  "- Florence Nightingale":
    '"I attribute my success to this: I never gave or took any excuse."',
  "- Michael Jordan":
    '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
  "- Babe Ruth": '"Every strike brings me closer to the next home run."',
  "- John Lennon":
    '"Life is what happens to you while you’re busy making other plans."',
  "- Earl Nightingale": '"We become what we think about."',
  "- Mark Twain":
    '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
  "- Charles Swindoll":
    '"Life is 10% what happens to me and 90% of how I react to it."',
  "- Buddah": '"The mind is everything. What you think you become."',
  "- Chinese Proverb":
    '"The best time to plant a tree was 20 years ago. The second best time is now."',
  "- Woody Allen": '"Eighty percent of success is showing up."',
};

document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate() {
  const authors = Object.keys(quotes);
  const author = authors[Math.floor(Math.random() * authors.length)];
  const quote = quotes[author];

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function () {
  generate();
};
