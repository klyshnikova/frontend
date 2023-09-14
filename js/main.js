function myFuncHero(){
    const valueBtnHero = document.querySelectorAll('.btn-hero')
    if (valueBtnHero[0].onclick){
        valueBtnHero[0].style.color = 'red'
    }else{
        valueBtnHero[0].style.color = 'white'
    }
}
function myFunc(){
    const valueBtn = document.querySelectorAll('.btn')
    if (valueBtn[0].onclick){
        valueBtn[0].style.color = 'red'
    }else{
        valueBtn[0].style.color = 'white'
    }
}