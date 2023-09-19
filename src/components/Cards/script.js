import React, {useState, createContext} from 'react';
import './style.css'
import ButtonCarrinho from '../ButtonAddCarrinho/MyButton'
import Carrinho from '../Carrinho/Carrinho'

 function Cards ({modelos}){
    const UserContext = createContext()
    const count = modelos.length;
    let heading = <div></div>;
    if (count > 0) {
        const noun = count > 1 ? 'produtos' : 'produto';
        heading = count + ' ' + noun;
    }
    const [listaP, setListaP] = useState(modelos);

    const AddItem = (newItem)=>{
      setListaP([...listaP, newItem])
      adicionar(newItem)
      
    }
    const [cart, setCart] = useState([])
    
    const adicionar = (y)=>{
        cart.push(y)
    }

    return (
        <> 
            <h1>
                {heading}
            </h1>
               
            <div className="componentes ">
                {modelos.map((item) => (
                <div key={item.id} className='Card'>
                    <h3 >{item.title}</h3>
                    <p>Descrições</p>

                    <ul>
                        <li> Camera: {item.camera},</li>
                        <li> Cor: {item.cor},</li>
                        <li> Bateria: {item.bateria}</li>

                    </ul> 
                     <p>Preço Promocional R$: {item.preco} reais</p> 
                        <ButtonCarrinho onClick={()=>AddItem(item)}/> 
                    
                </div>
                ) )}
                    
                   
            </div>
            <UserContext.Provider value={cart}>
      
            <Carrinho dados={cart}/>
            </UserContext.Provider>

           
            
          
        </>
     
    )
}

export default Cards