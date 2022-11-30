const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, 
{name: 'Album', price:10}, {name: 'Book', price:5},
 {name: 'Phone', price:500}, {name: 'Computer', price:1000}
            ]
            let minimumValue = 10;
        for(let i = 0; i < item.length; i++){
            if(item[i].price < minimumValue){
                console.log(item[i]);
            }
        }
        let expensiveLimit = 200;
        for(let i = 0; i< item.length; i++){
            if(item[i].price > expensiveLimit){
                console.log(item[i]);
            }
        }
        let sum = 0;
        for(let i = 0; i < item.length; i++){
            sum += item[i]['price'];
        }
        console.log(sum)
        for(let i = 0; i < item.length; i++){
          item[i].price >=10 ? sum +=item[i].price: undefined; 
        }
        console.log(sum)

