
 function  findDuplicates(arr){
        
        let arr1 = arr.sort((a, b) => a - b);
        let arr2=[];
        let j=-1;
        for(let i=0;i<arr1.length-1;i++){
         
            if(arr1[i]==arr1[i+1]){
               
                if(arr2[j]!=arr1[i]){
                    j++;
                    arr2[j]=arr1[i];
    
                }
                
            }
        }
        return arr2;
    }

let arr = [2, 3, 1, 2, 3];

console.log(findDuplicates(arr));


