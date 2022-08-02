// export default function isMersenne(number){
//   let n = 2
//   let mersenne = 2**n-1
//     for (n=2; 2**n-1<=number; n++){
//       if (2**n-1 === number)
//         console.log(`${number} IT'S a MERSENNE NUMBER...`)
//     } 
//   }

export default function isMersenne(num,newnum=num-1){   
    if(newnum%2==0){
        if(newnum==2){
            console.log(`this number - ${num} is a Mersenne number`)
        }
        else{
            mersenne(num,newnum/2)
        }
    }
}