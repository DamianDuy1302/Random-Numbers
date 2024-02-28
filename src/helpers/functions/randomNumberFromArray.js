export const randomNumbersFromArray = (quantity, string)=>{
    let arrString = string.split(" ");
    let arrNumber = []
    arrString.forEach(item=>{
        arrNumber.push(parseInt(item))
    })
    arrNumber.sort((a, b)=>{
        if(a>b) return 1;
        if(a<b) return -1;
        return 0
    })
    const maxy = arrNumber[arrNumber.length-1]
    const miny = arrNumber[0]
    console.log(arrNumber)
    let arr = []
    const quantityy = Math.min(arrNumber.length, quantity)
    let count = 0
    console.log(quantityy)
    while(count < quantityy)
    {
        
        const randomValue = Math.floor(Math.random() * (quantityy));
        if(!arr.includes(arrNumber[randomValue]))
        {
            arr.push(arrNumber[randomValue])
            count+=1
        }
        // console.log(randomValue)
        // arr.push(arrNumber[randomValue])
        // count++;
        
    }
    return arr
}