import RandomNumber from "../RandomNumber";

const RandomArray = (array) => {
    let newArray = [];
    let rand = RandomNumber(0,3);
    newArray[rand] = array[0];

    let k = 1;

    for(let i=0; i<array.length; i++)
    {
        if(i == rand)
        {
            continue;
        }

        newArray[i] = array[k];
        k++;
    }

    return newArray;
}

export default RandomArray;