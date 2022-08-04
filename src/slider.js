const slider = '.slider'
const item = ['.item']
const point = document.querySelectorAll('.punto')

// cuado se clickea en un item del menú:
    // busco la posición 
item.forEach(
    (cadaItem, i)=>{
        item[i].addEventListener('click',
            ()=> {
                let posición = i
                let operracion = posición * -25
                slider.style.transform = 'translateX(50%)'
            }
        )
    }
)