// Write your code here!
let main = document.querySelector('#main');
main.remove();

let newHeader = document.createElement('h1');
document.body.append(newHeader);


newHeader.id = 'victory';
let h1 = document.getElementById('victory');
h1.innerHTML = 'Martin is the champion';

