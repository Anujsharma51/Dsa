function runProgram(input) {
  var ni = input.split("\n");

  var tc = +ni[0];

  for (var i = 1; i <= tc; i++) {
    var [l, k] = ni[i * 2 - 1].split(" ").map(Number);
    // console.log(k);
    var arr = ni[i * 2].split(" ").map(Number);

    var sum = 0;
    // var temp = Infinity;
    for (var j = 0; j < k; j++) {
      sum = sum + arr[j];
    }
    // console.log("sum", sum);

    var temp = sum;

    for (var z = k; z < arr.length; z++) {
      temp = temp + arr[z] - arr[z - k];
      if (sum > temp) {
        sum = temp;
      }
    }
    // console.log(temp);
  }
}

runProgram(`2
5 3
9 9 -5 9 5 
5 4
2 7 6 2 -5
`);
