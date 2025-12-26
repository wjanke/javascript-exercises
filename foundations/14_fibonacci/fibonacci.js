const fibonacci = function(num) {
  fibnum=parseInt(num);
  if (fibnum == 0) return 0;
  if (fibnum < 0) return "OOPS";
  fibarr=[1,1];
  len = fibarr.length;
  while (fibarr.length < fibnum) {
    fibarr.push(fibarr[len-1] + fibarr[len-2]);
    len = fibarr.length;
  };
  return fibarr[len-1];
};

// Do not edit below this line
module.exports = fibonacci;
