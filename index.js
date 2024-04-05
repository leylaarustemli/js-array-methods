// ? 1. Prompt vasitesile daxil olunmush ededin faktorialini tapin.
// Numune : 3 daxil olarsa,1*2*3 cavab 6 qaytarsin.


// let eded=parseInt(prompt("ededi daxil edin"))
// let say=1
// for (let i = 1; i <= eded; i++) {
//     say*=i
// }
// console.log(say)


// ?Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.
// let arr = [2,4,6,7,10,12,58,9]
// let boyukEded=arr[0];
// let kicikEded=arr[0];
 
// for (let i = 1; i < arr.length; i++) {
//     if(arr[i]>boyukEded){
//         boyukEded=arr[i]
//     }
//    if(arr[i]<kicikEded)  {
// kicikEded=arr[i]
//     }
// }console.log(boyukEded,kicikEded)
// let transfer=boyukEded;
// boyukEded=kicikEded
// kicikEded=transfer
// console.log(arr)



// ?Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını
// ?tapan proqram tərtib edin.
// Example:[123,7,53,99] -> (123 + 7) /2 -> 65
// let arr = [2,4,6,7,10,12,58,9]
// let minEded=arr[0];
// let maxEded=arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>maxEded){
//         maxEded=arr[i]
//     }
//     if (arr[i]<minEded){
//         minEded=arr[i]
//     }
    
// }let edediOrta=(minEded+maxEded)/2
// console.log(edediOrta)



// //? 5. arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function
// let arr = [2,4,6,7,10,12,58,9];
// let min=arr[0];
// let max=arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// let cem=0
// for (let i = 0; i < arr.length; i++) {
//    cem+=arr[i]
// }let toplam=cem-(min+max)
// console.log(toplam)
