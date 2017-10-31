
var data = [1,2,4,8,16]
var px   = [0.05,0.15,0.35,0.4,0.05]


class Variance{
  constructor(data,px){
    this.data = data
    this.px   = px
  }
  getMean(data){
    let sum = 0
    let mean

    for(let i = 0; i < this.data.length; i++){
      sum += this.data[i]
    }
    mean = sum/this.data.length
    return mean
  }
  sampleVariance(data,px){
    let vari = 0

    for(let i = 0; i < this.data.length; i++){
      let deviation = this.data[i] - anotherMean(this.data, this.px)

      vari += (Math.pow(deviation, 2)) * pxaarry[i]
    }
    return vari
  }
  anotherMean(data,px){
    let sum = 0
    let mean

    for(let i = 0; i < this.data.length; i++){
      sum += this.data[i] * this.px[i]
    }

    return sum
  }
}
const test = new Variance(data,px)

console.log(test.getMean())
