





// var fire=document.getElementById("demo");
// document.addEventListener("mousemove", function (e){
//     fire.style.left= e.clientX;
//     fire.style.top= e.clientY;
    

// })






var nameInpot = document.getElementById("nameInp")
var priceInput = document.getElementById("priceInp")
var categoryInput = document.getElementById("categoryInp")
var testInput = document.getElementById("testInp")

var  cc = document.getElementById('cc')

var procontainer =[]
var currentIndex=0;

if (localStorage.getItem("local") != null){
    procontainer =JSON.parse(localStorage.getItem("local"))
    desplay(procontainer) 
}

else{
    procontainer = [] 
    
}

function funsend(){

    var  pro= {
        
    nameInp : nameInpot.value,
    priceInp : priceInput.value,
    categoryInp : categoryInput.value,
    testInp : testInput.value
    }

// console.log(pro)

// procontainer.push(pro)
procontainer.push(pro)
// body()
localStorage.setItem("local" , JSON.stringify(procontainer))

// console.log(procontainer)
desplay (procontainer)
fady()
// updatepro()



}

// nameInpot.onkeyup=function(){

//     var validNameInput =/^[A-Z][a-z]{2,8}$/;

//     console.log(validNameInput.test(nameInpot.value))


//     if (validNameInput.test(nameInpot.value) ){

//         cc.removeAttribute('disabled');

//     }


//     else{
//         cc.disabled='true'
//     }


// }


function desplay (ayhaga){

    var cartona =``

    for (var i=0 ; i<ayhaga.length ; i++){

        cartona += `
        <tr>
        <td>${i}</td>
        <td>${ayhaga[i].nameInp}</td>
        <td>${ayhaga[i].priceInp}</td>
        <td>${ayhaga[i].categoryInp}</td>
        <td>${ayhaga[i].testInp}</td>
        <td><button onclick="updatepro (${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deletepro(${i})" class="btn btn-danger">Delete</button></td>
    </tr>
        
        `

    }
    // procontainer.push(cartona)
    document.getElementById("demo").innerHTML= cartona
   
}

function fady(){

    
    
        
    nameInpot.value = ""
    priceInput.value = ""
    categoryInput.value = ""
    testInput.value = ""
    
    
}


function deletepro (index){
    procontainer.splice(index,1)
    localStorage.setItem("local" , JSON.stringify(procontainer))
    desplay(procontainer)
    
}
function updatepro(index){

    currentIndex=index;

    // for(var i=0 ; i<procontainer.length ; i++){

    //     console.log(procontainer[i])
    // }
    nameInpot.value = procontainer[index].nameInp
    priceInput.value = procontainer[index].priceInp
    categoryInput.value = procontainer[index].categoryInp
    testInput.value = procontainer[index].testInp

   document.getElementById("bb").style.display = "inline"
   document.getElementById("cc").style.display = "none"

}
// if (cc.innerHTML='update product'){
   
//     update()

// }
// else{
   
// }



function update(){


    procontainer[currentIndex].nameInp = nameInpot.value
    procontainer[currentIndex].priceInp = priceInput.value 
    procontainer[currentIndex].categoryInp = categoryInput.value
    procontainer[currentIndex].testInp = testInput.value

    localStorage.setItem("local" , JSON.stringify(procontainer))

    
      document.getElementById("bb").style.display = "none"
      document.getElementById("cc").style.display = "inline" 


    desplay(procontainer)
    fady()

}






















// function updatepro (index){
//     currentIndex = index;
//    console.log(procontainer[index])
//    nameInpot.value = procontainer[index].nameInp
//    priceInpot.value = procontainer[index].priceInp
//    categoryInpot.value = procontainer[index].categoryInp
//    testInpot.value = procontainer[index].testInp


//    document.getElementById("bb").style.display = "inline"
//    document.getElementById("cc").style.display = "none"

// }

// function updatePro(){
//     // // var pop=[]
//     // for (var i=0 ; i<procontainer.length ; i++){
 
//         procontainer[currentIndex].nameInp =nameInpot.value
//         procontainer[currentIndex].priceInp =priceInpot.value
//         procontainer[currentIndex].categoryInp =categoryInpot.value
//         procontainer[currentIndex].testInp =testInpot.value


//         // nameInpot.value = procontainer[i].nameInp
//         // priceInpot.value = procontainer[i].priceInp
//         // categoryInpot.value = procontainer[i].categoryInp
//         // testInpot.value = procontainer[i].testInp

//         localStorage.setItem("local" , JSON.stringify(procontainer))

//         document.getElementById("bb").style.display = "none"
//         document.getElementById("cc").style.display = "inline" 
        

//     // }
//  desplay ()
//  fady ()
// }


// function addEdit() {
    
//     var  pro= {
        
//         nameInp : nameInpot.value,
//         priceInp : priceInpot.value,
//         categoryInp : categoryInpot.value,
//         testInp : testInpot.value
//         }
    
//     // console.log(pro)
    
//     // procontainer.push(pro)
//     procontainer.push(pro)
//     localStorage.setItem("local" , JSON.stringify(procontainer))
    
//     // console.log(procontainer)
//     forl ()
//     fady()



    
// }
// function body(){

// nameInpot.value=""
// priceInpot.value=""
// categoryInpot.value=""
// testInpot.value=""
// }

// function dede(index){
// procontainer.splice(index,1)
// // console.log(for1())
// forl()
// } 

function search(term){
    
var proro = []
    

    // console.log(procontainer)
    for(var i = 0 ; i<procontainer.length ; i++){
        // console.log(procontainer[i].nameInp.toLowerCase().includes(term.toLowerCase()))

    if (procontainer[i].nameInp.toLowerCase().includes(term.toLowerCase()) == true ){
        proro.push(procontainer[i])
        // procontainer[i]=proro
        
        desplay(proro)
    
    }
 

    }
}


//     console.log(proro)
// //    for(i=0 ; i<procontainer.length ; i++){
// //     var cartona =``
// // // Text.tolowerCase
// //         // if (procontainer[i].nameInp.tolowerCase().includes(term.tolowerCase())==true){
            

           
        
// //         //         cartona += `
// //         //         <tr>
// //         //         <td>${i}</td>
// //         //         <td>${procontainer[i].nameInp}</td>
// //         //         <td>${procontainer[i].priceInp}</td>
// //         //         <td>${procontainer[i].categoryInp}</td>
// //         //         <td>${procontainer[i].testInp}</td>
// //         //         <td><button onclick="updatepro (${i})" class="btn btn-warning">Update</button></td>
// //         //         <td><button onclick="deletepro(${i})" class="btn btn-danger">Delete</button></td>
// //         //     </tr>
                
// //         //         `
            
        
        
        
// //         //     }
// //             // procontainer.push(cartona)
// //             // document.getElementById("demo").innerHTML= cartona
        
        

// //         }



//     }

//     // search("no")
