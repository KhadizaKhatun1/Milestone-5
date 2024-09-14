const hero={
    name:'sakib khan',
    id:123,
    address:'movie cinema',
    isSingle:true,
    friends:['Apu','Razz','Salman','Amir'],
    movies:[{name:'no-1',year:2005},{name:'king khan',year:2018}],
    tour:{ 
        special:['thailand','usa','singapore']
    },
    act: function(){
        console.log('acting like sakib khan')
    },
    fact:function kh(){
        console.log("this is kh function")
    },
    car:{
        brand:'tesla',
        price:5000000,
        made:2025,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask',
            country:'USA'

        }
    }
}
// console.log(student.car)
hero.fact();

