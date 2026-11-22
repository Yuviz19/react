# Dealing with forms in react

## FORM

- how a generic form looks like

```html
<form action="some website url" method="GET/POST" id="form-data">
    <label for="first-name">First Name: </label>
    <input type="text" id="first-name" name="firstName" class="input">
    <br />
    
    <!--react has "for" as "htmlFor"-->
    <!--also it has to be same as the id of the input used-->
    <label for="last-name">Last Name: </label> 
    <input type="text" id="last-name" name="lastName" class="input">
    <br />
    
    <!--<input type="submit" value="submit">-->
    <!--a button inside a form is an input type submit-->
    <button type="submit" >
</form>
```
- and then in js we would do

```js
document.getElementById("form-data").addEventListner("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  // then do whateven you want to with the data
  // and then reset the form and clear the fields
  event.currentTarget.reset();
})
```

- in newer versions of react this all is not really requried as
- we can use the form's action itself
- in the action we can provide {} a new function

1. it does not recieve the event it directly recieves the form data
2. behind the scenes the form's action handles the prevent default 
3. and we directly get the form data so we do not need the "event.currentTarget" and all
4. also it resets the form automatically

- also we do not need to give the method to the form, as we are providing it a function

```js
// and to handle that submit
function signUp(formData){
  // since it is a 
  const email = formData.get("email");
}
```

- textarea fields work the same way, uses the attribute name.

- for radio buttons, since the group must have the same name property, also remember to give them the value property too
- a general tip is to use a fieldset around the radios and its labels 
- and also give a legend tag at the start
- and the rest stays the same

- for checkboxes
- they are the siblings of redio buttons, 
- just one quirk is that to get all the selected items we can use
- formData.getAll("{name_attribute}")
- returns the array of all the selected values

- next is the select and option field which give the dropdown menu option
- it has a select tag with as many options tags inside it, you can add a defaultValue="something"
- each option has it's own value attribute, but no name attribute
- the name attribute only goes to the select tag

- let we have multiple form entries, we can get them in the form of an object 
#NOTE -  Object.formEntries(formData)
