module.exports = function longestConsecutiveLength(array) {
    let length = 0;
    let count = 0;

    let sortArr = array.sort((a, b) => {
        return a - b;
    });

    sortArr.forEach((item, index, array) => {
        if(item + 1 === array[index+1]) {
            count += 1;
                if(count + 1 > length) { 
                    length = count + 1;
                }
        } else if(item === array[index+1]) {
            return;              
        } else { 
          count = 0 
        };
    });

    if(sortArr.length > 0 && length === 0) {
        length = 1
    };

    return length;
};
