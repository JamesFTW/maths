let math = require('mathjs');

class hyper{
  constructor(x,n,M,N){
    this.x = x
    this.n = n
    this.M = M
    this.N = N
  }
  prob(x,n,M,N){
    let failure   = this.N - this.M
    let otherfail = this.n - this.x

    let success = math.combinations(this.M,this.x)
    let idk     = math.combinations(failure,otherfail)
    let idk2    = math.combinations(this.N,this.n)


    return (success*idk)/(idk2)
  }
}
const test9 = new hyper(14,23,14,28)
const test11 = new hyper(11,15,30,55)
const test12 = new hyper(12,15,30,55)
const test13 = new hyper(13,15,30,55)
const test14 = new hyper(14,15,30,55)
const test15 = new hyper(15,15,30,55)


console.log(test9.prob())
