import data from "../../data/questions.json";

const GenerateQuestion = () => {
    
    let dataLen = data.length;
    
    let rand = Math.floor(Math.random() * dataLen);

    return data[rand];
    
}

export default GenerateQuestion;