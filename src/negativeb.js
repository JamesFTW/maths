let math = require('mathjs');

class NegativeB {
  constructor(x,r,p){
    this.x = x
    this.r = r
    this.p = p
  }
  prob(){
    let something = this.x + this.r - 1
    let othersome = this.r - 1
    let shit      = Math.pow(this.p,this.r)
    let somethine = Math.pow((1 - this.p),this.x)

    let combo = math.combinations(something,othersome)

    return combo * shit * somethine
  }
}

const tester0 = new NegativeB(0,4,0.4)
const tester1 = new NegativeB(1,4,0.4)
const tester2 = new NegativeB(2,4,0.4)

console.log(tester0.prob() + tester1.prob() + tester2.prob())
