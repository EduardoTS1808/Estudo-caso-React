import React, {useState} from 'react';
import './style.css'

const SearchInput = ({ data }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [ativo, setAtivo] = useState(false)

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleClick = () => {
    setAtivo(!ativo);
  };


  return (
    <div className='returno'>
      <h2>Pesquisar modelo específico</h2>
        

      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        />
        <button  onClick={handleClick}>
     Pesquisar
      </button>
      <ul  className={`lista ${ativo ? 'ativo' : ''}`}>
        {filteredData.map(item => (
          <div className='lista-produtos'>
          <li  key={item}>{item.title}  , 
           Preço R$: {item.preco} reais</li>
          <button>Ver</button>
          </div>
          ))}
      </ul>
          </div>
  );
};

export default SearchInput;