import  { useContext } from 'react'
import { Contexto } from '../context/ContextProvider';
import Card from "./Card";
function Cards() {
    const { cards, handleDeleteCard } = useContext(Contexto);
  
   
    return (
      <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            imag={card.imageUrl}
            titulo={card.title}
            id={card.id}
            onDelete={handleDeleteCard}
          />
        ))}
      </div>
    );
  }
  

export default Cards