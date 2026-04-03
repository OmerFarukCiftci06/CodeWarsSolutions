//https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
//mysolution
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    let memberOfWeight = this.crew * 1.5;
    return this.draft - memberOfWeight > 20 ? true : false;
  }
}

//copilot solution
// class Ship {
//   constructor(draft, crew) {
//     this.draft = draft;
//     this.crew = crew;
//   }
