function test(){
    console.log(sum(0)==0?"Passed":"Failed");
    console.log(sum(2)==3?"Passed":"Failed");
    console.log(sum(4)==10?"Passed":"Failed");
    sum("abc");
    sum("bc");
    var boli ="true"
    sum(boli);
    var sequence1 = [1, 1, 2];
    console.log(arraysEqual(getFibonnaci(2),sequence1));
    var sequence2 = [1, 1, 2, 3, 5];
    console.log(arraysEqual(getFibonnaci(5),sequence2));
    
    console.log(getFibonnaci().localeCompare("not allowed"));
    console.log(getFibonnaci(20).localeCompare("not allowed"));
   }
    test();
    