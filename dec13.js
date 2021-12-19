//SOME/CUSTOM SOME/EVERY/CUSTOM EVERY/FIND/CUSTOM FIND/FIND INDEX/CUSTOM FIND INDEX

// let arr=[
//     {name:'a',gender:'f'},
//     {name:'kk',gender:'f'},
//     {name:'h',gender:'m'},
//     {name:'e',gender:'f'},
//     {name:'d',gender:'f'}
// ]
//---------SOME->atleast one cb return true thn true
// let isAnyFemale=arr.some((v,i,arr)=>v.gender=='f')
// console.log(isAnyFemale)
//--------CUSTOM SOME
// Array.prototype.mySome=function(cb)
// {
    
//     for(let i=0;i<this.length;i++)
//     {
//         if(cb(this[i],i,arr)==true)
//         {
//             return true;
//         }
//     }
//     return false;
// }
// let isAnyFemale=arr.mySome((v,i,arr)=>v.gender=='f')
// console.log(isAnyFemale)

///--------------EVERY->return true only if all ele eof arr meets condition
// let isAllMale=arr.every((v,i,arr)=>v.gender=='m')
// console.log(isAllMale)
//----------------CUSTOM EVERY
// Array.prototype.myEvery=function(cb)
// {
    
//     for(let i=0;i<this.length;i++)
//     {
//         if(cb(this[i],i,arr)==false)
//         {
//             return false;
//         }
//     }
//     return true;
// }
// let isAllMale=arr.myEvery((v,i,arr)=>v.gender=='m')
// console.log(isAllMale)

//--------------------FIND->RETURNS FRST VALUE
// let arr=[
//     {name:'a',gender:'f'},
//     {name:'kk',gender:'f'},
//     {name:'h',gender:'m'},
//     {name:'e',gender:'f'},
//     {name:'d',gender:'m'}
// ]
// console.log(arr.find((v,i,arr)=>v.gender=='m'))
//-------------------CUSTOM FIND
// Array.prototype.myFind=function(cb)
// {
//     for(let i=0;i<this.length;i++)
//     {
//         if(cb(this[i],i,arr)==true)
//         {
//             return this[i];
//         }
//     }
//     return -1;
// }
// console.log(arr.myFind((v,i,arr)=>v.gender=='m'))

//-------------------FIND INDEX->RETURNS FRST VALUE
// let arr=[
//     {name:'a',gender:'f'},
//     {name:'kk',gender:'f'},
//     {name:'h',gender:'m'},
//     {name:'e',gender:'f'},
//     {name:'d',gender:'m'}
// ]
// console.log(arr.findIndex((v,i,arr)=>v.gender=='m'))
//-------------------CUSTOM FINDINDEX
// Array.prototype.myFindIndex=function(cb)
// {
//     for(let i=0;i<this.length;i++)
//     {
//         if(cb(this[i],i,arr)==true)
//         {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(arr.myFindIndex((v,i,arr)=>v.gender=='m'))
