//for  

for (let i = 0; i <10; i++) {
    const element = i;
    const e=i;
    if (e==5) {
        //console.log("5 is best");
        
    }
    //console.log(e);                                                                      //ctrl+shift+dropdown,//double click:ctrl+d//click:alt
    
    
}

for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop ${i}`);
    
   for (let j = 1; j <=10; j++) {
     //console.log(`inner loop ${j}  and ${i}`);
    //console.log(i*j ,"=");
    
   }
    
}
let arr=[1,2,3,4,5,6]
//console.log(arr.length  ,":");

for (let v = 0; v < arr.length; v++) {
    const element = arr[v];
    //console.log(element);
    
}

//break    ;continue
for (let i = 1; i <10; i++) {
    const element = i;
    const e=i;
    if (e==5) {
       // console.log("5 is best");
        continue
    }
    //console.log(e);                                                                      //ctrl+shift+dropdown,//double click:ctrl+d//click:alt
    
    
}
// **********************************************************while & do while*******************************************************************
let i=0
while (i<=10) {
    //console.log(`value:${i}`);
    i++
}

let iarr=['a','b','c','d']
    let m=0
    while (m<iarr.length) {
    // console.log(`hello ${iarr[m]}`);
     m++
    }

    let h=1
do {
    console.log(`score ${h}`);
    h++
} while (h<=10);

