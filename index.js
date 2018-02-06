module.exports = function (item, immutableArray) {
    let {array} = immutableArray
    const {length} = immutableArray
    if (array.length > length) {
        array = array.slice(0, length)
    }
    array[length] = item
    return {
        array,
        length: length + 1
    }
}
