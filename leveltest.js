const quiz = document.getElementById('btn_quiz_start')
const main = document.querySelector('.main_con.v2');
const quiz1 = document.querySelector('.con_qz_1');

quiz.addEventListener('click', ()=> {
    main.style.display ='none';
    quiz1.style.display ='block';
})



// next버튼
const btnNext = document.querySelectorAll('.btn_next')
let i = 1;
var answer = []
btnNext.forEach( o => {
    o.addEventListener('click', ()=> {
        let radio = document.querySelector(".con_qz_" + i ).querySelectorAll('input[type="radio"]')
        let radioChecked = 0
        

        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) { //답을 체크한 수가 1개이면 true
                var thisAnswer = radio[i].value //체크한 답을 thisAnswer에 할당한다
                radioChecked++   
            } 
        }

        
        
        if (radioChecked !== 1) { //답을 입력하지 않으면 넘어가질 않음
            alert('다음 질문 넘길 수 없음')

        }else{ //지금 질문을 숨기고 다음 질문을 보이게 한다
            document.querySelector(".con_qz_" + i ).style.display ='none';
            answer.splice((i-1), 1, thisAnswer) //체크한 답을 배열에 추가한다. 수정하면 수정한다.
            i++
            document.querySelector(".con_qz_" + i ).style.display ='block';  
            console.log(answer)
        }              
    })
})
//prev버튼
const btnPrev = document.querySelectorAll('.btn_prev')
btnPrev.forEach( o => {
    o.addEventListener('click', ()=> {
        document.querySelector(".con_qz_" + i ).style.display ='none';
        i--
        document.querySelector(".con_qz_" + i ).style.display ='block';      
    })
})

// 문장만들기
const answerCheck = document.querySelectorAll('.seq_area .answer_check');
console.log(answerCheck)

var textAnswer = []
for (let i = 0; i < answerCheck.length; i++) {
    const element = answerCheck[i];
    element.addEventListener('click', function(){
        this.parentNode.classList.toggle('on')
        if(this.parentNode.classList.contains('on')){
            
            var thisTextAnswer = this.dataset.no
            
            textAnswer.push(thisTextAnswer) // data-no 값이 클릭 순서대로 입력
            this.parentNode.parentNode.parentNode.parentNode.querySelector('.show_seq').innerHTML = textAnswer

        }else {

            textAnswer.splice(textAnswer.indexOf(this),1) // 클릭한 값과 같은 data-no 값을 삭제
            this.parentNode.parentNode.parentNode.parentNode.querySelector('.show_seq').innerHTML = textAnswer
            
        }
    })
    
}
