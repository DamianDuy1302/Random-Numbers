export const randomNumbersFromArray = (quantity, string) => {
    let sep = /\s+/;
    let arrString = string.split(sep);
    let arrNumber = []
    arrString.forEach(item => {
        arrNumber.push(parseInt(item))
    })
    arrNumber.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0
    })
    const maxy = arrNumber[arrNumber.length - 1]
    const miny = arrNumber[0]
    console.log(arrNumber)
    let arr = []
    const quantityy = Math.min(arrNumber.length, quantity)
    let count = 0
    console.log(quantityy)

    arrNumber.push(-1)
    while (count < quantityy) {

        const randomValue = Math.floor(Math.random() * (maxy+1 - miny)) + miny;
        if (!arr.includes(randomValue) && arrNumber.includes(randomValue)) {
            arr.push(randomValue)
            count += 1
        }
        // console.log(randomValue)
        // arr.push(arrNumber[randomValue])
        // count++;

    }
    return arr
}