let math = require('mathjs');

class Poisson {
  constructor(x,u,n){
    this.x = x
    this.u = u
    this.n = n
  }
  prob(){
    let something = Math.exp(-this.u)
    let other     = Math.pow(this.u,this.x)

    return (something * other)/math.factorial(this.x)
  }
}
let tester0 = new Poisson(8,8)
let tester1 = new Poisson(1,20)
let tester2 = new Poisson(2,20)
let tester3 = new Poisson(3,20)
let tester4 = new Poisson(4,20)
let tester5 = new Poisson(5,20)
console.log(tester0.prob())
