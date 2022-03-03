
    $(".owl-one").owlCarousel({
        loop : true,
        nav : true,
        items: 2,
        margin : 5,
        padding : 5,
        stagePadding : 5,
        responsive : {
            0 : {
                items: 1,
                dots : false
            },
            485 : {
                items: 2,
                dots : false
            },
            728 : {
                items: 3,
                dots : false
            },
            940 : {
                items: 4,
                dots : true
            },
            1200 : {
                items: 2,
                dots : true
            }
        }
         
    }
        
    );

    
    $(".owl-two").owlCarousel({
        loop : true,
        nav : true,
        items: 2,
        margin : 5,
        padding : 5,
        stagePadding : 5,
        responsive : {
            0 : {
                items: 1,
                dots : false
            },
            485 : {
                items: 1,
                dots : false
            },
            728 : {
                items: 2,
                dots : false
            },
            940 : {
                items: 2,
                dots : true
            },
            1200 : {
                items: 3,
                dots : true
            }
        }
         
    }
        
    );

    $(".owl-three").owlCarousel({
        loop : true,
        nav : true,
        items: 2,
        margin : 5,
        padding : 5,
        stagePadding : 5,
        responsive : {
            0 : {
                items: 1,
                dots : false
            },
            485 : {
                items: 1,
                dots : false
            },
            728 : {
                items: 2,
                dots : false
            },
            940 : {
                items: 2,
                dots : false
            },
            1200 : {
                items: 2,
                dots : false
            }
        }
         
    }
        
    );



    /*===============Frequent  QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

