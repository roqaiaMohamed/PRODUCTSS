var productName =document.getElementById("productnameinp")
var productPrice =document.getElementById("productpriceinp")
var productCategory =document.getElementById("productcategoryinp")
var productDesc =document.getElementById("productdescinp")


var productContainer ;
if(localStorage.getItem("ourProductLast")== null){
    productContainer=[]
}
    else{
        productContainer= JSON.parse(localStorage.getItem("ourProductLast"))

        displayProducts()
    }



function addproduct() {
    if (validationProductName()) {
        var product = {
            productName: productName.value,
            productPrice: productName.value,
            productCategory: productName.value,
            productDesc: productName.value,
    
    
        }
    
        productContainer.push(product)
        console.log(productContainer)
    
        localStorage.setItem("ourProductLast",JSON.stringify(productContainer))
        // localStorage.setItem("user","ahned")
    
    
    
        displayProducts()
        clearForm()
    }

    
    }
   
function displayProducts() {
    var cartona = ``
    for(var i = 0 ; i<productContainer.length ; i++){
        cartona+=`
        
        <tr>
        <td>${i}</td>
        <td>${productContainer[i].productName}</td>
        <td>${productContainer[i].productPrice}</td>
        <td>${productContainer[i].productCategory}</td>
        <td>${productContainer[i].productDesc}</td>
        <td><button class="btn btn-warning">rerrrr</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger" >Delete</button></td>
        
        </tr>
        
        
        `
    }

    document.getElementById("myTable").innerHTML= cartona
}

function clearForm() {
    productName.value="",
    productPrice.value="",
    productCategory.value="",
    productDesc.value=""
}



function deleteProduct(index) {
    productContainer.splice(index,1)
    localStorage.setItem("ourProductLast")
    JSON.stringify(productContainer)


    displayProducts()
}


function search(term) {
    var searchcontainer = [];
    for (var i =0 ; i< productContainer.length; i++){
        if (productContainer[i].name.tolowerCase().includes(term.tolowerCase()) || productContainer[i].cat.tolowerCase().includes(term.tolowerCase()) ){
            searchcontainer.push(productContainer[i])
        } 
    }
    display(searchcontainer)
}

function validationProductName(){
    var regx = /^[A-Z][a-z]{1,4}$/
    if (regx.test(productName.value)) {
        return TextTrackCue;
    }
    else {
        return false;
    }
}