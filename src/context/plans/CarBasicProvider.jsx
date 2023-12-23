import { useState, useEffect, useContext, createContext } from "react";


// function for create hooks


const carChangesTypesContext = createContext();
export function useCarChangesTypesContext () {
  return useContext(carChangesTypesContext)
};

const updateCarChangesTypesContext = createContext();
export function useUpdateCarChangesTypesContext () {
  return useContext(updateCarChangesTypesContext)
}

const carChangesContext = createContext();
export function useCarChangesContext () {
    return useContext(carChangesContext)
};

const carContext = createContext();
export function useCarContext () {
  return useContext(carContext)
};

const updateCarContext = createContext();
export function useUpdateCarContext () {
    return useContext(updateCarContext)
};

export function CarProvider ( {children} ) {

  //Car changes type
  const [carChangesTypes, setCarChangesTypes] = useState( null );
  const updateCarChangesTypes = ( instruction = {carStatus: null} ) => {
    setCarChangesTypes(instruction.carStatus)
  }

  //
  const [car, setCar] = useState( JSON.parse(localStorage.getItem('car')) || []  );
  const updateCar = ( instruction, item ) => {
    switch ( instruction.actionType ){
      case 'CHECK_ITEM':
        // Compare ID
        const searchID = car.indexOf( car.find( c => c.id === item.id ) );
        // Search for ID
        if( searchID >= 0 ){
          // Item found an update
          const newCar = car.map( c => {
            if( c.id === item.id ){
              //cVariants = c.variants
              return {
                id:         item.id,
                name:       item.name,
                picture:    item.picture,
                variants:   [
                  {
                    name:       '',
                    price:      item.price,
                    quantity:   item.quantity+1
                  }
                ],
              }
            }
            return c
          } );
          setCar(newCar);
          setCarChangesTypes( { carStatus: 'ITEM_UPDATED'} );
        }else{
          //Item not found and created
          setCar( [...car, item] );
          setCarChangesTypes( { carStatus: 'ITEM_CREATED'} );
        }
        break;
      case 'DELETE_ITEM':
        //Delete one item with variable
          //Delete item without variable
          setCarChangesTypes( {carStatus: 'ITEM_DELETED'} );
          setCar( car.filter( (c) => c.id !== item.itemID ) )
        break;
      case 'CLEAR_ALL':
        setCar( [] )
        break;
      default:
        console.log('Action no Set')
        break;
    }
  }
  
  //Guest name
  const [guestName, setGuestName] = useState('');
  const updateGuestName = ( name ) => {
    setGuestName(name)
  }

  // Check car length
  useEffect( () => {
    const carString = JSON.stringify(car);
    localStorage.setItem('car', carString);
  },[car])

  return (
    <updateCarChangesTypesContext.Provider value={updateCarChangesTypes}>
      <carChangesTypesContext.Provider value={carChangesTypes}>
        <updateCarContext.Provider value={updateCar}>
          <carContext.Provider value={car}>
            {children}
          </carContext.Provider>
        </updateCarContext.Provider>
      </carChangesTypesContext.Provider>
    </updateCarChangesTypesContext.Provider>
  )

}