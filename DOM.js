myBtn = document.getElementById('myBtn');


myBtn.addEventListener('click',function(){
   
    let text = document.createElement('h3');
    let myInput = document.querySelector('input') 
    text.innerHTML = myInput.value

    let DeleteBtn = document.createElement('button')
    DeleteBtn.className='deleteBtn'
    DeleteBtn.innerHTML = 'Delete'
    DeleteBtn.className= 'btn btn-danger'
    

    let DoneBtn = document.createElement('button')
    DoneBtn.className='doneBtn'
    DoneBtn.innerHTML = 'Done'
    DoneBtn.className='btn btn-secondary'

    let line = document.createElement('hr')

    let row = document.createElement('div')
     row.appendChild(text)
     row.appendChild(DeleteBtn)
     row.appendChild(DoneBtn)
     row.appendChild(line)

    let container = document.getElementsByClassName('container')
    container[0].appendChild(row)

    myInput.value = '';


    DeleteBtn.addEventListener('click', function(){
        row.remove()
    })

    DoneBtn.addEventListener('click', function(){
      
        text.classList.toggle('lined')

        if(DoneBtn.innerHTML == 'Done'){
            DoneBtn.innerHTML= 'UnDone'
        }
        else {
            DoneBtn.innerHTML = 'Done'
        }
        
    })
})
