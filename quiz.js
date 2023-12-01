const questions =[{
    'que': '121 Divided by 11 is ',
    'a': '11',
    'b': '10',
    'c': '19',
    'd': '18',
    'correct': 'a'
},
{
    'que': 'Which is the biggest continent in the world?',
    'a': 'North America',
    'b': 'Asia',
    'c': 'Africa',
    'd': 'Australia',
    'correct': 'b'
},
{
    'que': '20+(90÷2) is equal to:',
    'a': '50',
    'b': '55',
    'c': '65',
    'd': '60',
    'correct': 'c'
},
{
    'que': 'Which is the largest ocean in the world?',
    'a': 'Indian Ocean',
    'b': 'Pacific Ocean',
    'c': 'Arctic Ocean',
    'd': 'Atlantic Ocean',
    'correct': 'b'
},
{
    'que': '50 times of 8 is equal to:',
    'a': '80',
    'b': '400',
    'c': '800',
    'd': '4000',
    'correct': 'b'
},
]
let index = 0,
    total = questions.length;
let right = 0,
    wrong = 0;
const quesBox= document.getElementById("quesBox")
const optionInput = document.querySelectorAll('.options')
const loadQuestions = () => { //different way of creating functions it is the same as function and them types both work same there is no difference
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index] 
    //quesBox.innerText = data.que;
    quesBox.innerText = `${index +1})  ${data.que}`; //this dollar sign helps to put values in place
   // console.log('${index +1}  ${data.que}')
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}
function submitQuiz(){
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct) {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}
function getAnswer(){
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    ) 
    return answer;   
}

function reset(){
    optionInput.forEach(
        (input) => {
            input.checked = false
        }
    ) 
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = ` 
     <div style= "text-align: center">
     <h3> Thankyou for playing the quiz </h3>
    <h2> ${right} / ${total} are correct</h2>
       </div>`
    
}

 
loadQuestions();

