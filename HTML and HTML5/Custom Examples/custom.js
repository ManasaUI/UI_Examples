//retrive the information from data/custum attributes-->
var cust_atribute=document.getElementById("id_demo");
console.log(cust_atribute);
//using the DOM getAttribute() property
var user=cust_atribute.getAttribute('data-user');
document.write(user);
cust_atribute.setAttribute('data-extend','Venu');
document.write(cust_atribute.getAttribute('data-user'));
cust_atribute.removeAttribute('data-user');
document.write(cust_atribute.getAttribute('data-user'));"<br/>"
//using javascript dataset property. 
var user1=cust_atribute.dataset.age
document.write(user1);"<br/>"
cust_atribute.dataset.age="25";
document.write(cust_atribute.dataset.age);
cust_atribute.dataset.age="null";
document.write(cust_atribute.dataset.age);
/*we can create custom elements by using the registerElement(). and we have to instantiate the 
element by using the new keyword.  */
var new_element=document.registerElement('manansa-newelement');
document.body.appendChild(new new_element());
/* this is the anotheeeer way to create the custom elements.
document.registerElement('x-component');
var dom = document.createElement('x-component');
document.body.appendChild(dom);*/
/* Adding the features to the custom elements */
/*var p_type=Object.create(HTMLElement.prototype);
p_type.name='Custom Element';
p_type.alert=function()
{

}
var new1=document.registerElement('vitamin-food',{
	prototype:p_type,
	extends:'button'
});
document.body.appendChild(new new1());

var cust_ele=document.registerElement('x-food',{
	proptotype:Object.create(HTMLElement.prototype),
	//this extends the native features of html to custum element
	extends:'button'
});
document.body.appendChild(new cust_ele());
*/