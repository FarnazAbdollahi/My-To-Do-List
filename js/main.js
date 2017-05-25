function addNew() {
    //create <p> tags
    pTag = document.createElement("P");
    span = document.createElement("SPAN");
    tick = document.createTextNode(" ✓ ");
    tickAtt = document.createAttribute("class");
    tickAtt.value = "span"; 
    span.setAttributeNode(tickAtt);
    span.appendChild(tick);
    pTag.appendChild(span);
    //put the added plans into p tags
    if (document.getElementById("newPlan").value === '') {
    window.alert("You must write something!");
    }
   else {
    toDo = document.createTextNode(document.getElementById("newPlan").value);
    pTag.appendChild(toDo);
    document.getElementById("newPlan").value="";
   
    
    
    //creating class attribute for every <p>
    pAtt = document.createAttribute("class");
    pAtt.value = "showToDo"; 
    pTag.setAttributeNode(pAtt);
    //create <butuun> tags
    bTag = document.createElement("BUTTUN");
    bText = document.createTextNode("×");      
    bTag.appendChild(bText); 
    //creating class attribute for buttun tags
    bAtt = document.createAttribute("class");
    bAtt.value = "button"; 
    bTag.setAttributeNode(bAtt);
    //creating onclick attribute for buttun tags
    remove = document.createAttribute("onclick");
    remove.value = "this.parentNode.remove();";
    bTag.setAttributeNode(remove);
    //creating <br> tag
    brTag = document.createElement("BR");
    
    pTag.addEventListener("click", addline);

    function  addline() {
        if (this.style.textDecoration=='line-through')
        {
            this.style.textDecoration='none';
            var child=this.childNodes[0];
            child.style.display='none';
        }   
        else
        {
            this.style.textDecoration='line-through';
            var child=this.childNodes[0];
            child.style.display='inline-block';  
        }
                     
        }
    
    pTag.appendChild(bTag);
    pTag.appendChild(brTag);
    document.body.appendChild(pTag);
   }
}

