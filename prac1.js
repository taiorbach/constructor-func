
/// 1
function Address (city , street , buildingNumber){

    this.city = city
    this.street = street
    this.buildingNumber = buildingNumber
}

Address.prototype.fullAddress = function(){
    return this.city + " " + this.street +" "+ this.buildingNumber
}

function Person (firstName , lastName){
    this.firstName = firstName 
    this.lastName = lastName
    
}

Person.prototype.fullName = function (){
    return this.firstName + " " + this.lastName
}





function Customer (firstName , lastName  , city , street , buildingNumber ){

    Person.call(this , firstName , lastName)
   // Address.call(this ,city , street , buildingNumber)
    this.address = new Address(city , street , buildingNumber)
    
   }

   Customer.prototype = Object.create(Person.prototype)
   
  
   

Customer.prototype.customerDetails = function(){
    return  this.fullName() +" "+ this.address.city +" "+ this.address.street +" "+ this.address.buildingNumber
}


//const myCustomer = new Customer('Tai' , 'Orbach', 'Rinatya' , 'HaRimonim' , 47) 

 


//console.log(myCustomer)
//console.log(myCustomer.customerDetails())






function Item (itemName , itemId , itemPrice){
    this.itemName = itemName
    this.itemId = itemId
    this.itemPrice = itemPrice
}


function Order(orederId  ){
    this.orederId = orederId
    this.items = []
   
   
}


Order.prototype.addItemToOrder = function(itemName , itemId , itemPrice){
   let someItem = new Item(itemName , itemId , itemPrice)
    this.items.push(someItem)
        
        
    


}


Order.prototype.getTotalPrice = function (){
    let totalPrice = 0
    for(let item of this.items){
        totalPrice = totalPrice + item.Price
    }
    return totalPrice
}

/*let myOrder = new Order(1 ,  'Tai' , 'Orbach', 'Rinatya' , 'HaRimonim' , 47)
let myOrder2 = new Order(4 ,  'yaniv' , 'cohen', 'tel Aviv' , 'alenbi' , 3)
myOrder.addItemToOrder('phone' , 33 , 1000)
myOrder2.addItemToOrder('television' , 101 , 5000)
*/


const form = $("<div><form></form></div>")
/*function renderAll(){
 
 $('body').append(form);
 renderReadPerson()
  renderReadAddress()
  renderReadItem()
  const saveBtn = $('<div><button onclick=saveOrder()>SAVE</button></div>')
  $(form).append(saveBtn);
  

}
renderAll()
*/

function UiRender(){
   

}


function createButton(){
    const saveBtn = $('<div><button onclick=saveOrder()>SAVE</button></div>')
    $(form).append(saveBtn)
}




UiRender.prototype.renderReadPerson = function() {
    const firstNameInput = $('<div>first name : <input type="text" name="firstName" id="firstNameInput"/></div>')
    const lastNameInput = $('<div>last name : <input type="text" name="lastName" id="lastNameInput"/></div>')
    $(form).append(firstNameInput)
    $(form).append(lastNameInput)
}

UiRender.prototype.renderReadAddress = function(){
    const cityInput = $('<div>city :<input type="text" name="cityInput" id="cityInput"/></div>')
    const streetInput = $('<div>street : <input type="text" name="streetInput" id="streetInput"/></div>')
    const buildingNumberInput = $('<div>number :<input type="text" name="buildingNumber" id="buildingNumberInput"/></div>')
    $(form).append(cityInput)
    $(form).append(streetInput)
    $(form).append(buildingNumberInput)
}


UiRender.prototype.renderReadItem = function(){
    const itemSelectInput = $('<div>select item: <select id="itemSelect"><option id="1">phone</option><option id="2">PS5</option><option id="3">XBOX</option></div>')
    const priceSpan = $('<span id="priceSpan"></span>')
    if($('#itemSelect') === 'phone'){
       $('#priceSpan').html('1000$')
    }
   
    $(form).append(priceSpan)
    $(form).append(itemSelectInput)
    
    

}


function saveOrder(){
    const container = $('<div></div>')
   const customer = new Customer($('#firstNameInput').val(), $('#lastNameInput').val() ,$('#cityInput').val() ,$('#streetInput').val() ,$('#buildingNumberInput').val() )
   console.log(customer)
    const item = new Item( $('#itemSelect').val(),105 , '1000$' ) 
  //  const item2 = new Item($('#2').val(), 4756 ,1700 ) 
   // const item3 = new Item($('#3').val(), 585 , 1200 ) 
   console.log(item)
   
}
    


$(document).ready(function() {
    const renderOnLoad = new UiRender()
    $('body').append(form)
    renderOnLoad.renderReadPerson()
    renderOnLoad.renderReadAddress()
    renderOnLoad.renderReadItem()
    createButton()
});

