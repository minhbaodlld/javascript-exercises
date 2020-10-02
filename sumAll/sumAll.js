const sumAll = function(start, end) {
    let step = 0;
    let sum = 0;  
    let con = start;
    let i = 0; 
    if (start > 0 && end > 0){  
        do{
            if (typeof(start) != 'number' || typeof(end) != 'number'){
                return sum = "ERROR";
            }else if (start < end){
                step = end - start + 1;
                sum += con++;
            }else if (start > end){
                step = Math.abs(end -start)+1;
                sum += con--;
        }
        i++
        }while (i < step)
    }else return sum = "ERROR";
    return sum
}   

module.exports = sumAll
