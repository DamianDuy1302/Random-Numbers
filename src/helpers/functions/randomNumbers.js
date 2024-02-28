export const randomNumber = (quantity, min, max)=>{
    let arr = []
    for(let i = 0; i < quantity; i++){
        const randomValue = Math.floor(Math.random() * (max - min)) + min;
        arr.push(randomValue)
    }
    return arr
}