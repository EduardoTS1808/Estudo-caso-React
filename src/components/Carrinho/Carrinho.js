import React from 'react'




export default function Carrinho({dados}) {
   
  
   
  
    // console.log({dados});

    // criar funcao semelhante a que eu criei no meu site casamento e chamala no evento onclick do botao.
    
        return (
            
                <div className='Carrinho'> 
                        <h1> Seu carrinho</h1>
                   
                  
                       {dados.map((iten) => (
                                <>
                                <div className="card">
                                <h3 key={iten.id}  > {iten.title}</h3>
                                <p>{iten.preco}</p>

                                
                                
                                </div>
                                
                                </>
                                ))}
                               
                
                </div>

            
        )
    }

