
var data = [2.71, 2.53, 2.76, 3.75, 2.27, 2.76, 3.95, 4.30, 3.85, 4.34, 3.48, 4.55, 2.44, 3.75, 2.85, 3.47, 2.91]

class SimpleVariance {
  constructor(data) {
    this.data = data
  }
  sum() {
    let sum = 0

    for(var i = 0; i < this.data.length; i++) {
      //this is the Sum xi^2
      sum += Math.pow(this.data[i], 2)
    }
    return sum
  }

  mean() {
    let sum = 0
    let mean = 0

    for(let i = 0; i < this.data.length; i++) {
      sum += this.data[i]
    }

    mean = sum/this.data.length
    return mean
  }

  sampleVariance() {
    let n = this.data.length
    let vari = 0
    let total = 0

    for(let i = 0; i < n; i++) {
      let deviation = this.data[i] - this.mean()

      vari += (Math.pow(deviation, 2))
    }
    let blah = n-1
    total = vari/blah


    return total
  }

}
const test = new SimpleVariance(data)

console.log(test.mean())
console.log(test.sampleVariance())
console.log(test.sum())
