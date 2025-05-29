const course={
    name:"js",
    price:"999",
    wm:function () {
        console.log(` wecome to our course ${this.name}`);
        console.log(this);
        
    }

    }
    // course.wm()
    // course.name="c++"
    //  course.wm()
     //console.log(this);
     
    //  function chai() {
    //     let username="vidhya"
    //     console.log(this.username);
        
    //  }
    //  chai()

    const chai=() =>{
         let username="vidhya"
          console.log(this)
    }
    //chai()
    // const add=(n1,n2)=>{
    //       return n1+n2
    // }
    // console.log(add(3,4));

   //const add=(n1,n2)=>  n1+n2
   //  const add=(n1,n2)=>(  n1+n2)
   const add=(n1,n2)=>  ({username:"vidhya"})
    console.log(add(3,4));
    

    const arr=[1,2,5,7,9]

    arr.forEach(()=>{})