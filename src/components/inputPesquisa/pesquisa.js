import React from 'react';
import SearchInput from './inputPesquisa';

const Apiii = ({produtos}) => {

// const soTitulos = []
// const tiraTitulo = (produtos)=>{
//   produtos.filter((item)=>{
//     soTitulos.push(item.title)
//   })

// }
// tiraTitulo()
// console.log(soTitulos);

  return (
    <div>
      <SearchInput data={produtos } />
    </div>
  );
};

export default Apiii;
