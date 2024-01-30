function magic(arr, num){
     let newArr = [];
     let sum = 0;
     for ( let i=0; i <arr.length; i ++){
          for ( let j=i+1; j <arr.length; j ++){
               if (arr[i] + arr[j] === num){
                 newArr.push(arr[i],arr[j]);
                  
               }
          }
     }
     console.log(newArr.join('\r\n'));
      //('\r\n')
     //console.log(`${newArr[2]} ${newArr[3]}`);
     //console.log(`${newArr[4]} ${newArr[5]}`);


}
    
//magic([1,7,6,2,19,23], 8);
magic([14,20,60,13,7,19,8], 27);
//magic([1,2,3,4,5,6], 6);