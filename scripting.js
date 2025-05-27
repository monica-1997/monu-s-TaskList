function addTask(){
    const input = document.getElementById('taskInput');
    const taskText=input.value.trim();
    if(taskText === ''){
        alert('Please enter a task.');
     return;
    }

    
    const li = document.createElement('li');
    

    const span = document.createElement('span');
    span.textContent= taskText;
    span.onclick=()=>li.classList.toggle('done');
       

    const delBtn=document.createElement('button');
    delBtn.textContent='X';
    delBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(delBtn);
    

    document.getElementById('taskList').appendChild(li);
    input.value='';
}