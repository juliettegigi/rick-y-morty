import Card from "../Card/Card"
import s from "./cards.module.css"

export default function Cards(props){
   

    return(
        <div className={s.div}>
            {     props.personajes.map((personaje,i)=>{
                  return <>
                  <h3>{personaje.id}</h3>
                  <Card name={personaje.name}
                        species={personaje.species}
                        gender={personaje.gender}
                        image={personaje.image}
                        onClose={props.onClose}
                        id={personaje.id}
                        key={`${personaje.name}-${i}`}
                  />
                  </>
            })
            
            }
                  
        </div>
    )
}