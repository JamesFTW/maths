let math = require('mathjs');

class BPD{
  constructor(n,p,q,x){
    this.n = n
    this.p = p
    this.q = q
    this.x = x
  }
  bpd(n,p,q,x){
    let combinations = math.combinations(this.n,this.x)
    let success      = Math.pow(this.p,this.x)
    let failure      = Math.pow(this.q,this.n-this.x)

    return combinations*success*failure
    }
  mean(n,p){
    let samplesize = this.n
    let success    = this.p

    return samplesize * success
  }
  standardDev(n,p,q){
    let samplesize  = this.n
    let success     = this.p
    let failure     = this.q

    return Math.sqrt((samplesize * success * failure))
  }
}

//usage
var test = new BPD(25,.3,.7,0)

console.log(test.standardDev())
