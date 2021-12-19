//concepts---->push,pop,unshift,shift,slice,shallow copy,splice

//-----------PUSH(add) and POP(rem) works at rear end
// let arr=[100,200]
// console.log(arr)
// arr.push(300)
// console.log(arr)
// arr.push(500,500)
// console.log(arr)
//-----------UNSHIFT(add) and SHIFT(rem) at front end of arr
// let arr=[100,200]
// console.log(arr)
// arr.shift()//remove from front
// console.log(arr)
// arr.unshift(500,500)//add from front
// console.log(arr)
///--------------SLICE--used for cloning
// let arr=[100,200,300,400]
// console.log(arr.slice(2,5))
// console.log(arr.slice(1))
// console.log(arr.slice())//return complete arr
// console.log(arr.slice(-4,-1))//-1 excluded
//----------------SHALLOW COPY
//---(a)----------in case of INTEGER arr only values are copied thus original arr doesnt chnge
// let arr=[10,20,30]
// let narr=arr.slice()
// narr[0]=40
// console.log(arr)[ 10, 20, 30 ]
// console.log(narr)[ 40, 20, 30 ]
//---(b)----------SHALLOW COPY in OBJECT it refernce to same address
// let ob1={age:1}
// let ob2={age:2}
// let ob3={age:3}
// let arr=[ob1,ob2,ob3]
// let narr=arr.slice()
// narr[0].age=90
// console.log(arr)-> chnges original value at 0th index[ { age: 90 }, { age: 2 }, { age: 3 } ]
// console.log(narr)[ { age: 90 }, { age: 2 }, { age: 3 } ]
//----------------SPLICE->causes chnges in orginal arr
// let arr=[10,20,30,40]
// let na=arr.splice(2,1,100,200,300)//remove 1 ele from 2nd index and add 100,200,300 and return removed elemnt
// console.log(arr)
// console.log(na)
