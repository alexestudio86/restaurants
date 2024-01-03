import { useState, useEffect, useContext, createContext } from "react";


// CREATE CUSTOM HOOKS


//Use carContext
const carContext = createContext();
export function useCarContext () {
  return useContext(carContext)
};

//Use updateCarContext
const updateCarContext = createContext();
export function useUpdateCarContext () {
    return useContext(updateCarContext)
};

//Use CarChangesType
const carChangesTypesContext = createContext();
export function useCarChangesTypesContext () {
  return useContext(carChangesTypesContext)
};

//Use updateCarChangesTypeContext
const updateCarChangesTypesContext = createContext();
export function useUpdateCarChangesTypesContext () {
  return useContext(updateCarChangesTypesContext)
}

//Use guestNameContext
const guestNameContext  =   createContext();
export function useGuestNameContext () {
  return useContext(guestNameContext)  
}

//Use updateGuestNameContext
const updateGuestNameContext  = createContext();
export function useUpdateGuestNameContext () {
  return useContext(updateGuestNameContext)
}

// use totalItemsContext
const totalItemsContext   =  createContext();
export function useTotalItemsContext () {
  return useContext(totalItemsContext)
}

export function CarBasicProvider ( {children} ) {

  //Update Car
  const [car, setCar] = useState( JSON.parse(localStorage.getItem('car')) || []  );
  const updateCar = ( instruction, item ) => {
    switch ( instruction.actionType ){
      case 'CHECK_ITEM':
        // Search for ID
        const searchID = car.indexOf( car.find( c => c.id === item.id ) );
        // Search if ID is found
        if( searchID >= 0 ){
          // Search for variant
          const { variants } = car[searchID];
          const searchVariants = variants.indexOf( variants.find( variant => variant.vName === item.variants[0].vName ) );
          //Item founded for variants
          if( searchVariants >= 0 ){
            const newCar = car.map( c => {
              if( c.id === item.id ){
                //cVariants = c.variants
                return {
                  id:         item.id,
                  name:       item.name,
                  category:   item.category,
                  picture:    item.picture,
                  variants:   c.variants.map( v => {
                    if( v.vName === item.variants[0].vName ){
                      return {
                        vDiscount:    item.variants[0].vDiscount,
                        vName:        item.variants[0].vName,
                        vPicture:     item.variants[0].vPicture,
                        vPrice:       item.variants[0].vPrice,
                        vQuantity:    item.variants[0].vQuantity
                      }
                    }
                    return v
                  })
                }
              }
              return c
            } );
            setCar(newCar);
            setCarChangesTypes( { carStatus: 'VARIANT_UPDATED'} );
          }else{
            //Variant not found and created
            const newCar = car.map( c => {
              if( c.id === item.id ){
                //cVariants = c.variants
                return {
                  id:         item.id,
                  name:       item.name,
                  category:   item.category,
                  picture:    item.picture,
                  variants:   [...c.variants, item.variants[0]]
                }
              }
              return c
            } )
            setCar(newCar);
            setCarChangesTypes( { carStatus: 'VARIANT_CREATED'} );
          }
        }else{
          //Item not found and created
          setCarChangesTypes( 'ITEM_CREATED' );
          setCar( [...car, item] )
        }
        break;
      case 'DELETE_ITEM':
        //Delete one item with variable
        if( item.vIdx >= 0 ){
          //Find item for ID
          const searchID = car.indexOf( car.find( c => c.id === item.id ) );
          //if item has multiple variable
          if( car[searchID].variants.length >1 ){
            const newCar = car.map( c => {
              if( c.id === item.id ){
                return {
                  ...c,
                  variants: c.variants.filter( (v,i) => i !== item.vIdx )
                }
              }
              return c
            })
            setCarChangesTypes( 'VARIANT_DELETED' );
            setCar( newCar )
          }else{
            //if item has one variable
            setCarChangesTypes( 'VARIANT_DELETED' );
            setCar( car.filter( (c) => c.id !== item.id ) )
          }
        }else{
          //Delete item without variable
          setCarChangesTypes( {carStatus: 'ITEM_DELETED'} );
          setCar( car.filter( (c) => c.id !== item.id ) );
        }
        break;
      case 'CLEAR_ALL':
        setCar( [] )
        break;
      default:
        console.log('Action no Set')
        break;
    }
  }

  //Car changes type
  const [carChangesTypes, setCarChangesTypes] = useState( null );
  const updateCarChangesTypes = ( instruction = {carStatus: null} ) => {
    setCarChangesTypes(instruction.carStatus)
  }
  
  //Guest name
  const [guestName, setGuestName] = useState('');
  const updateGuestName = ( name ) => {
    setGuestName(name)
  }

  // Update local Storage
  useEffect( () => {
    const carString = JSON.stringify(car);
    localStorage.setItem('car', carString);
  },[car])

    //Total Items
  const [totalItems, setTotalItems] = useState(0);
  useEffect( () => {
    car.length > 0
    ? setTotalItems(
      Array.from(
        car.map( c => {
          return Array.from( c.variants.map( (v,i) => {
              return v.vQuantity
            } )
          ).reduce( (accumulator, object) => {
            return accumulator + object
          }, 0)
        } )
      ).reduce( (accumulator, object) => {
        return accumulator + object
      }, 0)
    )
    : setTotalItems(0)
  },[car])

  return (
    <carContext.Provider value={car}>
      <updateCarContext.Provider value={updateCar}>
        <carChangesTypesContext.Provider value={carChangesTypes}>
          <updateCarChangesTypesContext.Provider value={updateCarChangesTypes}>
            <guestNameContext.Provider value={guestName}>
              <updateGuestNameContext.Provider value={updateGuestName}>
                <totalItemsContext.Provider value={totalItems}>
                  {children}
                </totalItemsContext.Provider>
              </updateGuestNameContext.Provider>
            </guestNameContext.Provider>
          </updateCarChangesTypesContext.Provider>
        </carChangesTypesContext.Provider>
      </updateCarContext.Provider>
    </carContext.Provider>
  )

}