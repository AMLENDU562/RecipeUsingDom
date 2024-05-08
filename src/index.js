function add() {
var text=document.getElementById("text").value;
const node = document.createElement("li");
const textnode = document.createTextNode(text);
node.appendChild(textnode);
document.getElementById("group").appendChild(node);
}

function successful()
{
    var s=document.getElementById("group");
    var text=document.getElementById("text").value;
    const textnode = document.createTextNode(text);
    const node = document.createElement("h1");
    node.appendChild(textnode);
    s.prepe(node);
    
    s.id="successful";
    var n=document.createElement("div");
    n.id="group";
   
    document.body.appendChild(n);
}
