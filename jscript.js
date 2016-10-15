function add() {
    
    //gets the outer div
    var outerCont = document.getElementById("adds");
    
    //adds a new div
    var newItem = document.createElement("div");
    outerCont.appendChild(newItem);
    newItem.setAttribute("ID", "newDiv")
      
    //adds the "picture" (okay again, its a div, but i prefer to use background-image for its flexibility)
    var newImg = document.createElement("div");
    newItem.appendChild(newImg);
    newImg.setAttribute("ID", "newImg")

    //adds inner divs    
    var innerRight = document.createElement("div");
    newItem.appendChild(innerRight);
    innerRight.setAttribute("ID", "innerRight")

    //adds the "header" (techincally its a div but i dont like using h3)
    var newHeader = document.createElement("div");
    innerRight.appendChild(newHeader);
    newHeader.setAttribute("ID", "newHeader")
    
    //adds the "div" (okay its what its supposed to be this time so)
    var innerDiv = document.createElement("div");
    innerRight.appendChild(innerDiv);
    innerDiv.setAttribute("ID", "innerDiv")
    
    var headerInp = document.getElementById("header")
    var divInp = document.getElementById("content")
    var imgInp = document.getElementById("image")
    
    headerInp = headerInp.value;
    divInp = divInp.value;
    imgInp = imgInp.value;
    
    newHeader.innerHTML = headerInp;
    innerDiv.innerHTML = divInp;
    newImg.style.backgroundImage = "url(" + imgInp +")";
}


function clear() {
    alert("attempting");
//    var outerCont = document.getElementById("adds");
//    
//    var newItem = document.getElementById("newDiv");
//    var newImg = document.getElementById("newDiv");
//    var innerRight = document.getElementById("newDiv");
//    var newHeader = document.getElementById("newDiv");
//    var innerDiv = document.getElementById("newDiv");
//    
//    innerRight.document.removeChild(innerDiv);
//    innerRight.document.removeChild(newHeader);
//    newItem.document.removeChild(newImg);
//    newItem.document.removeChild(innerRight);
//    outerCont.document.removeChild(newItem);
}