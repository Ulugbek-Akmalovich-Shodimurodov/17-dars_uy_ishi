
let btn = document.querySelector('.clicked_btn')
let popup = document.querySelector('.popup')
let randomNumber = Math.round(Math.random()*20)
let modalBtn = document.querySelector('.modal-btn');

modalBtn.addEventListener('click', ()=>{
    findNumber();
    popup.classList.remove('open-popup')
} )

function openModal(){
    popup.classList.add('open-popup')
}

function findNumber(){
    let input = document.querySelector('.write-number');
    let explanatoryText = document.querySelector('.explanatory-text')
    let chance = document.querySelector('.chance-number')
    let chanceValue = chance.textContent--;
    console.log(randomNumber);
    console.log(input.value);
    if(chanceValue){

        if(input.value - 0 == randomNumber){
            openModal()
        } else if(input.value - 0 < randomNumber){
            explanatoryText.textContent = 'The number entered is small'
        }else{
            explanatoryText.textContent = 'The number entered is large'
        }

          
        input.value = ''
        }
    
    else{
        chance.textContent = '0'
        openModal();
    }



}

btn.addEventListener('click', findNumber)