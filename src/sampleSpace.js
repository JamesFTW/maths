class SampleSpace {
  constructor(array){
    this.array = array
  }


  getAllSampleOutcomes(array){
    let set = []
    let outcome = []
    

    for(var i = 0; i < this.array.length; i++){
      let char = this.array[i]

      if(this.array.indexOf(char) != i)
        continue

      let remainingString = this.array.slice(0,i) + this.array.slice(i+1, this.array.length)

      for(var subPermutation of permut(remainingString))
        permutations.push(char + subPermutation)
    }
    console.log(outcome)
  }
}

var test = new SampleSpace([1,2,3])

test.getAllSampleOutcomes()
