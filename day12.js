//--->map/custom map/filter/custom filter

//----------MAP ->return arr of original arr length,takes callback fyunction as input,this cb takes i(index),v(value),orr(originl arr) as input
// let arr=[2,3,5,7,9,34,5,66]
// let narr=arr.map(function(v,i,arr)
// {
//     return v*v;
// })
// console.log(arr)[2, 3, 5, 7,9, 34, 5, 66]
// console.log(narr)[4,9, 25,49,81,1156,25, 4356]
//----------CUSTOM MAP
// Array.prototype.myMap=function(callback)
// {
//     let res=[]
//     for(let i=0;i<this.length;i++)
//     {
//         let val=this[i];
//         let ans=callback(val,i,this);
//         res.push(ans);
//     }
//     return res;
// }
// let arr=[1,2,3,4]
// let narr=arr.myMap((v,i,arr)=>v*v)
// console.log(arr)[ 1, 2, 3, 4 ]
// console.log(narr);[ 1, 4, 9, 16 ]

//----------FILTER ->returns those value for which cb return true
// let arr=[54,88764,9088,44324,978,65,43234,909]
// let narr=arr.filter((v,i,arr)=>v%2==1)
// console.log(arr)[54,88764,9088,44324,978,65,43234,909]
// console.log(narr)[ 65, 909 ]
//------------CUSTOM FILTER
// Array.prototype.myFilter=function(cb)
// {
//     let res=[]
//     for(let i=0;i<this.length;i++)
//     {
//         let ans=cb(this[i],i,this)
//         if(ans==true)
//         {
//             res.push(this[i]);
//         }
//     }
//     return res;
// }
// let narr=arr.myFilter((v,i,arr)=>v%2==1)
// console.log(narr)