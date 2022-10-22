
let btn = document.querySelector('.clicked_btn')
let popup = document.querySelector('.popup')
let openMContainer = document.querySelector('.modal-container')
let modalBtn = document.querySelector('.modal-btn');
let modalTitle = document.querySelector('.modal-title')
let modalImg = document.querySelector('.modal-img')
let modalImg1 = document.querySelector('.modal-img1')

let randomNumber = Math.round(Math.random()*21)


modalBtn.addEventListener('click', ()=>{
    findNumber();
    popup.classList.remove('open-popup')
    openMContainer.classList.remove('modal-container-open')
} )

function openModal(){
    popup.classList.add('open-popup')
    openMContainer.classList.add('modal-container-open')
}

function findNumber(){
    let input = document.querySelector('.write-number');
    let explanatoryText = document.querySelector('.explanatory-text')
    let chance = document.querySelector('.chance-number')
    let chanceValue = chance.textContent--;

    if(chanceValue > 0){
        if(input.value - 0 == randomNumber){

            modalTitle.textContent = 'You won !!!'
            modalImg.classList.add('modal-img1')
            modalImg1.classList.add('modal-img1-1')
            popup.classList.add('open-popup')
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