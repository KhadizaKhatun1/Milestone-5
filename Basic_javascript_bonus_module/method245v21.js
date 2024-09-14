// const numbers=[45,65,23,98,19]
// for(let i=0;i<numbers.length;i++){
//     const number=numbers[i]
//     console.log(number)

// }
// for(const number of numbers){
//     console.log(number[0])
// }
const products=[
    {id:1, name:'waltone phone',price:19000},
    {id:2, name:'Xami phone',price:19000},
    {id:3, name:'mac book air',price:19000},
    {id:4, name:'lenove laptop',price:19000},
    {id:5, name:'samsung phone note',price:19000},
    {id:6, name:'dell inspiron laptop',price:19000},
    {id:7, name:'Nokia old age phone gone',price:19000},
    {id:8, name:'phone one',price:19000}
]
// for(const product of products){
//     console.log(products)
// }
function matchProducts(products,search){
    const matched=[];
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
       }
    }
    return matched;
}
const result=matchProducts(products,'phone');
console.log(result)