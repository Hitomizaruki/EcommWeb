// section intersectionObserver
export const intersectionObserver=(param)=>{
    const elements=document.querySelectorAll(param)

    const observe=new IntersectionObserver(e=>{
        e.forEach(t=>{
            if(t.isIntersecting){
                t.target.classList.add('show')
            }else{
                t.target.classList.remove('show')
            }
        })
    })

    elements.forEach(e=>observe.observe(e))
}

//Cards horizotalScrollWheel
export const horizotalScrollWheel=(param)=>{
    param.addEventListener("wheel",e=>{
        e.preventDefault()
        param.scrollLeft+=e.deltaY    
    })
}