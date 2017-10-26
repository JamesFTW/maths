let math = require('mathjs');

bpd = (n,p,q,x) => {
  let combinations = math.combinations(n,x)
  let success      = Math.pow(p,x)
  let failure      = Math.pow(q,n-x)

  return combinations*success*failure
}

console.log(
  (bpd(25,.05,.95,0)+bpd(25,.05,.95,1) + bpd(25,.05,.95,2) +
  bpd(25,.05,.95,3)))
