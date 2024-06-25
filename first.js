let x=0;
let newarr=[];

let arr=[250,645,300,900,50];
let count=0;
for(x; x<=arr.length; x++){

  let h=arr[x];
    
   h=h*10/100;

   k=arr[x]-h;

   newarr[x]=k;

}
console.log(arr)
console.log(newarr);

