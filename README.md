# Arrayfy-javascript
Array Library to ease some problems i think js have with arrays

[Update: 21/08/2020 : 3:01PM]: First Methods to add are going to be, sorting one's ////------- Estatus : Working On

Just a method that i found for something interesting, REWORK NEEDED

function mode(array){
    if(array.length == 0){
        return null;        
    }

    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++){
        
        var el = array[i];
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