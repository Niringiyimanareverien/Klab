const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, ];

const cheaper = item.filter(cheap => cheap.price<=100);
const expensive = item.filter(expe => expe.price>=200);
console.log(cheaper);
console.log(expensive);

item.forEach(element => {
    element += element.price;
    console.log(element);
});