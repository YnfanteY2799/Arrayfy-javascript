
Array.prototype.uniqueValues = () =>{        
        let modeMap = {},maxEl = array[0], maxCount = 1;
        
        for(let i = 0; i < this.length; i++){
            
            let el = array[i];
            if(modeMap[el] == null){
                modeMap[el] = 1;
            }else{
                modeMap[el]++;  
            }
            if(modeMap[el] > maxCount){
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
}

String.prototype.toArray = function(){
        
        console.log(this)



}

Number.prototype[Symbol.iterator] = function* () {
        let i = 0;
        for(; i< this; yield ++i);
}
      
      
String.prototype[Symbol.iterator] = function* () {
         let i = 0;
         for(; i< this.length; yield ++i);
}