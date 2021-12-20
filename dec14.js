//REDUCE/CUSTOM REDUCE/
//-----------REDUCE->reduce krke ek value bnadeta h
// let arr=[10,20,30,40]
// let s1=arr.reduce((prevVal,currVal,currIndx,arr)=>{
//     console.log(prevVal+" "+currVal+" "+currIndx);
//     return prevVal+currVal;
// })//takes prev val as frst ele of arr
// console.log(s1);
// let s2=arr.reduce((prevVal,currVal,currIndx,arr)=>{
//     console.log(prevVal+" "+currVal+" "+currIndx);
//     return prevVal+currVal;
// },10)//takes prev val as 10 
// console.log(s2)
//------------CUSTOM REDUCE
// Array.prototype.myReduce=function(cb,initialVal)
// {
    
//     let prev=initialVal==undefined?this[0]:initialVal;
//     let initialIdx=initialVal==undefined?1:0;
//     for(let i=initialIdx;i<this.length;i++)
//     {
//         prev=cb(prev,this[i],i,this);
//     }
//     return prev;
// }
// let arr=[10,20,30,40]
// let s1=arr.myReduce((prevVal,currVal,currIndx,arr)=>{
//     console.log(prevVal+" "+currVal+" "+currIndx);
//     return prevVal+currVal;
// },10)//takes prev val as frst ele of arr
// console.log(s1);
//---------FLATEN 2D array
// let arr2d=[[1,2,3,4,5],[4,45,5,6,5,43,3,66],[],[11,543,8765,3,32,3]]
// let flatArr=arr2d.reduce((prev,curr,ci,arr)=>{
//     let a=prev.concat(curr);
//     return a;
// },[]);
// console.log(flatArr);

