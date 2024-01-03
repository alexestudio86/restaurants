import { useLoaderData, useSearchParams, useNavigate } from "react-router-dom";
import { useCarContext, useUpdateCarContext } from "../../../context/plans/CarBasicProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './planPremium01.products.css';
import dummyImage from '../../../assets/general/dummy-product.jpg';


//Dummies
const dummyLabel        = 'Sin Categoría';
const dummyPrice        = 999;
const dummyTitle        = 'Sin Nombre';
const dummyVariant      = '';
const dummyDescription  = 'Sin descripción';


//Retrieve image
const filterPostImages = ( evt ) => {
  //Old regex
  const oldRegex = /\/(s[0-9]|w[0-9]|h[0-9]|c|d|-rw|p|k|no|nu).*?\//g;
  const newRegex = /=(s[0-9]|w[0-9]|h[0-9]|c|d|p|k|no|nu).*?(\/|\s)/g;
  //Recommended nomenclature p k no nu
  if(evt.url){
    if(evt.url.match(oldRegex)){
      return evt.url.replace(oldRegex,"/w316-h210-p-k-no-nu/")
    }else{
      return evt.url.replace(newRegex,"/w316-h210-p-k-no-nu/")
    }
  }else {
    return evt
  }
}

//Retrieve title
const retrieveTitle = ( evt ) => {
  if( evt.length > 3 ){
    return evt
  }
  return dummyTitle
}

//Retrieve label
const retrieveCategories = ( evt ) => {
  const labelTerms = [ ...( evt.map( e => e.term ) ).filter( e => isNaN( parseInt(e) ) ) ];
  return labelTerms

}

// Extract numbers only, and return 999 if evt has 2 prices
const retrievePrice = ( evt ) => {
  const prices = [ ...( evt.map( e => e.term ) ).filter( Number ) ];
  return(
    prices.length === 1 ? prices : dummyPrice
  )
}

// Extract text of json html elements
const retrieveDescription = ( evt ) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = evt;
  const text = divElement.innerText;
  if( text ){
    return `${text.substring(1, 141)}${text.length > 140 ? '...' : ''}`
  }
  return dummyDescription
}

//Retrieve Thumbnail
const filterThumbnailImages = ( evt ) => {
  const oldRegex = /\/(s[0-9]|w[0-9]|h[0-9]|c|d|-rw|p|k|no|nu).*?\//g;
  const newRegex = /=(s[0-9]|w[0-9]|h[0-9]|c|d|p|k|no|nu).*?(\/|\s)/g;
  //Eliminate p k no nu for c to sqaure
  if(evt.url){
    if(evt.url.match(oldRegex)){
      return evt.url.replace(oldRegex,"/s72-c-k-no-nu/")
    }else{
      return evt.url.replace(newRegex,"/s72-c-k-no-nu/")
    }
  }else {
    return evt
  }
}

// Retrieve postID
const retrievePostID = ( evt ) => {
  return evt.substring( evt.indexOf("post-")+5 );
}


export function PlanPremium01Products () {

  //Get post from loader
  const { posts } = useLoaderData();

  //Get Car
  const car = useCarContext();

  //Find item
  const findItem = (evt) => {
    const found = car.find( c => c.id === retrievePostID(evt) );
    return car.length > 0 ? (found ? found : false) : false
  }

  //Recovery car hook
  
  const updateCar   =   useUpdateCarContext();

  const navigate = useNavigate();
  const [params, setParams] = useSearchParams()

  const handleNext = () => {
    navigate(
      {
        pathname: 'search',
        search:   '?some=search-string'
      }
    )
  }
  

  return (
    <main id="products" className="w3-row w3-light-gray">
      <div className="w3-container">
        <h1 className="w3-center w3-xxlarge w3-padding-64">Nuestros Productos</h1>
        { posts ? posts.map( ( post, index ) => (
          <article key={index} className='w3-col m3 p-1' >
            <div className='w3-row w3-white w3-border-bottom'>
              {/* Desktop */}
              <div className='w3-hide-small w3-col m12 w3-display-container' >
                <img className='w-100' alt={retrieveTitle(post.title.$t)} src={ filterPostImages(post.media$thumbnail ? post.media$thumbnail : dummyImage) } width='auto' height='200px' style={ {objectFit: 'cover'} } />
                <div className="w3-display-bottommiddle black-transparent-medium w3-block w3-padding">
                  <span className="w3-large w3-text-white">{ retrieveTitle(post.title.$t) }</span>
                </div>
              </div>
              {/* Mobile */}
              <div className='w3-hide-large px-1 d-flex align-content-between flex-wrap'>
                <div className="w3-col s4">
                  <img alt={retrieveTitle(post.title.$t)} src={ filterThumbnailImages(post.media$thumbnail ? post.media$thumbnail : dummyImage) } width='100%' height='130px' style={ {objectFit: 'cover'} } />
                </div>
                <div className="w3-col s8 d-flex align-content-between flex-wrap">
                  <div className="w3-col">
                    <div className="w3-row">
                      <div className='w3-col s8'>
                        <h1 className="w3-medium fw-bold w3-padding-small">{ post.title.$t }</h1>
                        { post.category && retrieveCategories( post.category ).map( (p, idx) => <span key={idx} className="w3-tag w3-orange w3-medium m-1">{p}</span>) }
                      </div>
                      <div className="w3-rest">
                        <span className="w3-xlarge w3-text-teal price fw-bold">{ post.category ? retrievePrice(post.category) : 999 }</span>
                      </div>
                    </div>
                  </div>
                  <div className="w3-col">
                    <div className="w3-row w3-padding-small">
                      <div className="w3-col s12 w3-border w3-border-blue w3-round-large">
                      <div className="w3-col s4 w3-center">
                        <button className="w3-button w-100 w3-text-red">
                          <FontAwesomeIcon icon="fa-solid fa-minus" />
                        </button>
                      </div>
                      <div className="w3-col s4 w3-center">
                        <span className="w3-padding">{ findItem(post.id.$t) ? findItem(post.id.$t).quantity : 0 }</span>
                      </div>
                      <div className="w3-col s4 w3-center">
                        <button className="w3-button w-100 w3-text-blue0" onClick={ () => {
                          updateCar(
                            {
                              actionType: 'CHECK_ITEM'
                            },{
                              id:         retrievePostID(post.id.$t),
                              name:       post.title.$t  ||  'Dummy Title',
                              picture:    post.media$thumbnail.url,
                              price:      retrievePrice(post.category) || dummyPrice,
                              quantity:   1
                            }
                          )
                        }}>
                          <FontAwesomeIcon icon="fa-solid fa-plus" />
                        </button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )) :
          <p className='py-2'>No se encontraron productos</p>
        }
        { location.pathname !== '/' &&
          (
            <div className='w3-col s12 py-2'>
              { params.get('some') && <button className='w3-button w3-blue w3-left' >Anterior</button> }
              { posts &&  <button className='w3-button w3-blue w3-right' onClick={handleNext} >Siguiente</button> }
            </div>
          )
        }
    </div>
  </main>
  )
}