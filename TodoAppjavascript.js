var todo = document.getElementById('todo')
var todoarray = []
var diver = document.getElementById('diver')
var editindex;
var todoBtn = document.getElementById('addBtn');

function todofun(){
  todoarray.push(todo.value)
  todo.value = ''
  mainfun()
}
function mainfun(){
  diver.innerHTML = ''
  for(var i= 0;i<todoarray.length;i++){
    var div = document.createElement('div')
    var span = document.createElement('span')
    var spantext = document.createTextNode(todoarray[i])

    var deltbtn = document.createElement('button')
    var delttext = document.createTextNode('Deleat')
    deltbtn.appendChild(delttext)
    deltbtn.setAttribute('onclick','deleatfun('+i+')')

    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    editbtn.appendChild(edittext)
    editbtn.setAttribute('onclick','editfun('+i+')')

    span.appendChild(spantext)
    div.appendChild(span)
    div.appendChild(deltbtn)
    div.appendChild(editbtn)
    diver.appendChild(div);
  }
}

function deleatfun(todiindex){
  todoarray.splice(todiindex)
  //console.log(todiindex)
  mainfun()
}

function editfun(todiindex) {
  editindex = todiindex
  todo.value = todoarray[editindex]; 
  //console.log(editindex)
  todo.value = ''      
  todoBtn.innerHTML = 'Save';
  todoBtn.setAttribute('onclick','savefun()')
}  
function savefun(){
  todoarray.splice(editindex, 1, todo.value)
  //console.log(todo.value)
  todo.value = ""
  todoBtn.innerHTML = "Add"
  todoBtn.setAttribute('onclick','todofun()')
  mainfun()
}