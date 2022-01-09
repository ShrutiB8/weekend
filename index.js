console.log("Hi, 🙋‍♀️🙋‍♀️");
var a =[2,3,4]
console.log(typeof a)
var x=3;
var x1="5";
console.log(x-x1);
console.log(typeof null)
var m="abc" - "fgh";
console.log(m,typeof m)
let sum=0
 sum=sum +x + x1
 console.log(sum)
 var a=4;
 var b=4;
 var y1=[2,3]
 var y2=[2,3]
 var y3=y1;   // call by refrence (copy y3 to same address of y1)
 console.log(a===b);
 console.log(y1===y2);
 console.log(y1===y3);
 var q5=[700,800]
//  ...q5 (spread operator) use for call by value (address channges)

var student ={ 
    name:"vani" ,
     batch:"b31wd",
      gender :"female" }
console.log(student.name)
var x="batch"
console.log(student[x])
  
  for (var key in student) {
    console.log("Key is", key, "Value is", student[key]);
  }

  const marks =[40,90,80,20,30]
  let len=marks.length;
  max=marks[len-1]
  for(let i=0;i<len;i++){
    if(marks[len] > max){
      max = myarr[len]
  }
}
  console.log(max)