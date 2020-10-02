const removeFromArray = function(array, ...arg) {
    Array.from(arg)     // put whatever input into array
    Array.from(array)
loop:   for (i = 0; i < arg.length; i++){
            if (array.includes(arg[i])){        //if include in array find index
                index = array.indexOf(arg[i]); 
                array.splice(index, 1);         //splice using index
            } else continue
        }
    console.log(arg)
    return  array
}

module.exports = removeFromArray
