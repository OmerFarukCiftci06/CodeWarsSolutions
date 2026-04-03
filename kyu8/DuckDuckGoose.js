//https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
//My solution
function duckDuckGoose(players, goose) {
  const index = (goose - 1) % players.length;

  return players[index].name;
}
