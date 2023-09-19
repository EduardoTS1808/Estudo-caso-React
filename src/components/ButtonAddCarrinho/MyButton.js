import React from "react";
function MyButtonAddCarrinho ({onClick} ){
   const myButton = {
      border: "none",
   }

        
     return(
        <div>
            <button className={myButton} onClick={onClick}   >+ Carrinho</button>
        </div>
     )
  }
  export default MyButtonAddCarrinho