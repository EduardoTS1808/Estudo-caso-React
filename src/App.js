import React,{useState} from 'react';
import './App.css';
import Cards from './components/Cards/script'
import Apiii from './components/inputPesquisa/pesquisa'

function App() {
 
  const produtos = [
    {
        title: 'galaxs s22',
        camera: '40 Mpx',
        bateria: '5000 mph',
        cor: 'cinza',
        preco: 7000,
        id: 1
    },
   {
    title: 'galaxs a30',
    camera: '20 Mpx',
    bateria: '3000 mph',
    cor: 'azul',
    preco: 1300,
    id: 2
}
,
 {
     title: 'galaxs m20',
     camera: '35 Mpx',
     bateria: '3800 mph',
     cor: 'branco',
     preco: 1500,
     id: 4
},
 {
     title: 'motorola g200 5G',
     camera: '60 Mpx',
     bateria: '6000 mph',
     cor: 'prata',
     preco: 2100,
     id: 5
},
 {
     title: 'motorola g71 5G',
     camera: '70 Mpx',
     bateria: '6500 mph',
     cor: 'branco',
     preco: 1800,
     id: 6
},
{
    title: 'motorola g31',
    camera: '45 Mpx',
    bateria: '4000 mph',
    cor: 'rosa',
    preco: 1250,
    id: 3
},
{
    title: 'Lenovo k22 ',
    camera: '50 Mpx',
    bateria: '4500 mph',
    cor: 'prata',
    preco: 899,
    id: 7
}

]


// console.log(cart);


  return (
    < div className='App'>

      <Apiii produtos={produtos} />

      <Cards modelos={produtos}/>
      


    </ div>
  );
}


export default App;