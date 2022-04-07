//ԽՆԴԻՐՆԵՐ ․․․․․․

//1.  Ունենք array որը պետքա սորտավորել:

// let num = [3,0,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,-2,35,6,32];
// num.sort((a, b) => a - b);
// console.log(num);
 

//2. Գտնել զանգվածի մեջից min և max :

// const array = [4, 2, 9, 8, 6];

// let max = 0;
// let min = array[0];

// for(let i = 0; i < array.length; i++) {
// 	if (array[i] > max) {
// 		max = array[i]
// 	}
// }

// for(let i = 0; i < array.length; i++) {
// 	if (array[i] < min) {
// 		min = array[i]
// 	}
// }
// console.log({min, max});

//3. Հաշվի առնելով տողերի զանգվածը, որտեղ կան տարբեր «length» ունեցող string տողեր: վերադարձրեք մեկ այլ զանգված,որը պարունակում է ամենաերկար տողերը: այսինքն նոր Array-ում push լինի ամենաերկար length ունեցող string տողեր-ը
// const arr = ["Aram", "Davit", "Hovhannes","Vardan"] այս օրինակում պետք է Push անել Հովհաննես -ը :

// const arr = ["Aram","Davit","Hovhannes","Vardan"];
// let new1 = []
// let array = []

// for (let i = 0; i < arr.length; i++){
//     new1.push(arr[i].length)
// }

// for (let i = 0; i < arr.length; i++){
//   if (Math.max(...new1) === arr[i].length){
//     array.push(arr[i])
//   }
// }

// console.log(array)



//4.Կա compareArray անվանում ունեցող function որ ընդունում է 2 parameters «ունի երկու arguments a, b »
// Function կանչելու ժամանակ a եւ b -ի արժեք տեղադրելու եմ array
// որոնք ունեն իրենց մեջ է անկանոն թվեր,պահանջը զանգվածները համեմատել եթե երկուսն էլ նման են իրար վերադարձնի true հակառակ դեպքում false

// function compareArray(arr1,arr2) {
//     arr1.sort();
//     arr2.sort();
//     if (arr1.length === arr2.length) {
//         for (var i = 0; i < arr1.length; i++) {
//             if (arr1[i] !== arr2[i]) {
//                 return false;
//             }
//         }
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(compareArray([2,6,1], [1,4,2]))

//5 Ստեղծել մի ֆունկցիա որը կանչելով և նրան տալով 2 string parametr, foo(‘react’, ‘redux’) //կստուգի տվյալ 2 տողերի մեջ նույն symbol քանի հատ կա //եւ վերադարձնի քանակը այսինքն react, redux 
// երկու բառերն էլ իրենց մեջ ունեն ‘r’, ‘e’ հետևաբար կվերադարձվի 2 ,Դիտարկենք մեկ այլ օրինակ foo(‘volvo’, ‘tesla’) այստեղ պետք է վերադարձնի 1 քանի որ միայն մեկ տառ է կրկնվում ‘l’


// function foo(str1, str2) {
//     let str = ''
//        for (let i = 0; i < str1.length; i++) {
//         if(str2.includes(str1[i])){
//             if(!(str.includes(str1[i]))){
//                 str += str1[i]
//           }
//       }
//     }
//             return str.length
//     }
//     console.log(foo('relux', 'redux'))


//6
//while - ի միջոցով ֆակտորիալ հաշվել .....

// let i =1;
// fact=1;
// num=5;
// while (i<=num) {
//     fact = fact ;
//     i++;
// }
// console.log(fact);


//7.Հաշվենք For-ի միջոցով  0-ից 10 փակ միջակայքերի զուըգ թվերը 


// for (i=0;i<10;i++) {
//     if(i%2 ===0) {
//         console.log(i);
//     }
// }

//2.1  tpel kent tvery

// for (i=0;i<=10;i++) {
//     if (i%2 === 0) continue;{
//         console.log(i);
//     }
// }



//2.2  գրել այնպես ,որ հասնի 6 և կանգնի 

// for (i=0;i<=10;i++) {
//     if (i===6) break ;{
//         console.log(i);
//     }
// }


////////Array/////

// array.push(6);
// console.log(array);//ktpi [1,2,3,4,5,6]

//1.1pop// hanum e elemnty arrayi verjic 
// array.pop(5);
// console.log(array); //ktpi [1,2,3]

//1.2 shift -ը// array սկզբից հանում է էլեմենտը 

// array.shift(5);
// console.log(array); //[2,3,4]

//1.2 unshift սկզբից ավելացնում է էլեմենտը
//  array.unshift(10);
// console.log(array);//ktpi [10,1,2,3,4]

//Ունենք տարբեր տեսակի array , պետք է առաձնացնել նույն տեսակի էլեմենտներով դնել իրենց համապատասխան տեսակի array մեջ :


// const array =[false,1,'hello',NaN,null,7,true,'js'];
// const nmb=[];
// const str=[];
// const boo =[];
// for (let i=0;i<array.length;i++) {
//     if(typeofarray[i]=== 'string'){
//         str.push(array[i])
//     }else if (typeof array[i] === 'boolean'){
//         boo.push(array[i])
//     }else if (typeof array[i]=== 'number'){
//         nmb.push(array[i])
//     }
// }

// console.log(str);   //kberi 'hello',"js" orinak 



//indexof ցույց է տալիս որոնվող արժեքի ինդդեքսը սկզբից ։

//unenq
// const array=[7,1,5,6,4];
// const search=1;
// let result=-1;
// for (let i=0;i<array.length;i++){
//     if (array [i] === search){
//         result =i 
//     }
// }
// console.log(array.indexOf(1)); //ktpi es depkum indexy 1 ,, 


//lastIndexof գտնում է որոնվող արժեքի ինդեքսը ,բայց վերջից ,եթե log անենք օրինակ 
// console.log(array.lastIndexOf(6)); //գտնում է վերջից առաջին այդ թիվը ։


///////sort ev includes /////
//unenq array petq e sortavorenk ev log anenq bacaka andamnery 

// const arra=[8,1,3,10];
// array.sort();
// const result=[];
// //kta [1,3,8,10]
// const min =array[0];
// const max=array[array.length-1];
// console.log(min); //ktpi 1
// console.log(max); //ktpi 10

//includes եթե կա true եթե չկա  false //եթե չկա push անենք resulti մեջ այդ դեպքում ։

// for (let i=min;i<max;i++){
//     if (! Array.includes(i)){
//         result.push(i)
//     }
// }
// console.log(result,'result');  //2,4,5,6,7,9



//polindrom և առաջից և վերջից կարդալիս նույնը լինի  ...օրինակ  alla/alla
//reverse շրջում  է ։ 

// const array [1,2,3]
// const arr=array.reverse(); //kberi 3,2,1


//split  տողը բաժանում է ենթատողերի /////. կլինի իրինակ alla// -----> a/l/l/a 
//join zզանգվածը որպես տող է սարքում ։

//splice // զանգվածի ինդեքսից սկսաց քանի անդամ ջնջի կամ ,որ ինդդեքսում  ինչ որ նոր անդամ ավելացնի։ 
//  const arr=['js','html','css','react'];
// /// orinak html css jnjenk
// arr.splice(2,2)

///իսկ ավելացնելը օրինակ ՝ css 
// arr.splice(1,0,"css");





 