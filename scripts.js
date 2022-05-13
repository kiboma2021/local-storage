
/*Example
const car = {
  color: 'red',
  wheels: 4
}

/*Convert data to json 
const convertToJson=JSON.stringify(car);  */

/*  Send json data to local storage 
localStorage.setItem('list',convertToJson);

*/

/* Get data from local storage */
const data=localStorage.getItem('list');

/* Convert the data back to js format */

const data2=JSON.parse(data);

const h3= document.querySelector('h3');
const p= document.querySelector('h3');

p.textContent=data2.color
h3.textContent=data2.wheels