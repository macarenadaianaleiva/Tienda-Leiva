const productos =[
    {
        id:'01',
        name:'Zapa1',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        precio:1234,
        img:'https://i.pinimg.com/564x/53/30/1a/53301adb2c9ca1225445fe2c310a1e4b.jpg',
        stock:12
    },
    {
        id:'02',
        name:'Zapa2',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        precio:1234,
        img:'https://i.pinimg.com/564x/53/30/1a/53301adb2c9ca1225445fe2c310a1e4b.jpg',
        stock:12
    },
    {
        id:'03',
        name:'Zapa3',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        precio:1234,
        img:'https://i.pinimg.com/564x/53/30/1a/53301adb2c9ca1225445fe2c310a1e4b.jpg',
        stock:12
    },
    {
        id:'04',
        name:'Zapa4',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        precio:1234,
        img:'https://i.pinimg.com/564x/53/30/1a/53301adb2c9ca1225445fe2c310a1e4b.jpg',
        stock:12
    },
    {
        id:'05',
        name:'Zapa5',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        precio:1234,
        img:'https://i.pinimg.com/564x/53/30/1a/53301adb2c9ca1225445fe2c310a1e4b.jpg',
        stock:12
    },
    {
        id:'06',
        name:'Zapa6',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        precio:1234,
        img:'https://i.pinimg.com/564x/53/30/1a/53301adb2c9ca1225445fe2c310a1e4b.jpg',
        stock:12
    }
 
]
 
export const data = new Promise((resolve,reject)=>{
 
    let condicion =true
    setTimeout(()=>{
        if(condicion){
           resolve(productos)
        }
        else{
            reject('Algo salio mal')
        }
    },2000)
})
 
//simulacion de datos
