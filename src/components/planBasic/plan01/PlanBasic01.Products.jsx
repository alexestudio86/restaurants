import { useLoaderData } from "react-router-dom";
import { useCarContext, useUpdateCarContext } from "../../../context/plans/CarBasicProvider";
import { useEffect } from "react";
import dummyImage from '../../../assets/general/dummy-product.jpg'


//Dummies
const dummyPrice        = 999;
const dummyTitle        = 'Lorem Ipsum';
const dummyDescription  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

//Retrieve image
const filterPostImages = ( evt ) => {
  if(evt.url){
    return evt.url.replace("s72","w320-h160")
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
const retrieveLabels = ( evt ) => {

  const terminos = [ ...( evt.map( e => e.term ) ).filter( e => isNaN( parseInt(e) ) ) ];
  return terminos

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
    return `${text.substring(1, 141)}${text.length > 140 && '...'}`
  }
  return dummyDescription
}

//Retrieve Thumbnail
const filterThumbnailImages = ( evt ) => {
  if(evt.url){
    return evt.url.replace("s72","w72-h72")
  }else {
    return evt
  }
}

// Retrieve postID
const retrievePostID = ( evt ) => {
  return evt.substring( evt.indexOf("post-")+5 );
}


export function PlanBasic01Products () {

  //Get post from loader
  const { posts } = useLoaderData();
  
  //Recovery car hook
  const updateCar   =   useUpdateCarContext();
  
  //Get Car
  const car = useCarContext();
  useEffect( () => {
    //Select all articles
    const articles = [...document.querySelectorAll('article[id]')];
    articles.map( a => {
      //Search car in articles
      const found = car.find( c => c.id === a.id );
      if(found){
        const btnPushed = document.querySelector(`article[id='${found.id}'] button`);
        btnPushed.classList.remove('w3-yellow');
        btnPushed.classList.add('w3-light-gray');
        btnPushed.setAttribute('disabled', 'true');
        const icon = document.querySelector(`article[id='${found.id}'] i[data-ident='icon']`);
        //unicode, hex code, html code, html entity
        icon.innerText = '✓'
      }else{
        const btn = document.querySelector(`article[id='${a.id}'] button`);
        btn.classList.remove('w3-light-gray');
        btn.classList.add('w3-yellow');
        btn.removeAttribute('disabled');
        const icon = document.querySelector(`article[id='${a.id}'] i[data-ident='icon']`);
        //unicode, hex code, html code, html entity
        icon.innerText = '+'
      }
    } )
    //const found = car.find( c => c.id === retrievePostID(evt) );
  }, [car])

  return (
    <main id="products" className="w3-row w3-light-gray">
      <div className="container">
        <h1 className="w3-center w3-xxlarge w3-padding-64">Nuestros Productos</h1>
        <div className="w3-row">
          { posts ? posts.map( ( post, index ) => (
            <article key={index} className='w3-col m6 p-1' id={retrievePostID(post.id.$t)} >
              <div className="w3-row w3-white">
                <div className='w3-col m5 s3' >
                  <img className='w-100 w3-hide-small' alt={retrieveTitle(post.title.$t)} src={ filterPostImages(post.media$thumbnail ? post.media$thumbnail : dummyImage) } width='320px' height='160px' style={ {objectFit: 'cover'} } />
                  <img className='w-100 w3-hide-medium w3-hide-large w3-circle' alt={retrieveTitle(post.title.$t)} src={ filterThumbnailImages(post.media$thumbnail ? post.media$thumbnail : dummyImage) } width='100%' height='auto' style={ {objectFit: 'cover'} } />
                </div>
                <div className='w3-col m7 s9'>
                  <div className="w3-row">
                    <div className="w3-col s8 w3-container">
                      <h1 className='text-uppercase fw-bold' style={ {fontSize: '1rem'} }>{ retrieveTitle(post.title.$t) }</h1>
                      <span className="w3-text-teal price fw-bold" style={ {fontSize: '1rem'}}>{ retrievePrice(post.category ? post.category : [{'term': dummyPrice}]) }</span>
                    </div>
                    <div className="w3-col s4">
                      <button className="w3-hide-mediium w3-hide-large w3-button w-100" onClick={ () => {
                        updateCar(
                          {
                            actionType: 'CHECK_ITEM'
                          },{
                            id:         retrievePostID(post.id.$t),
                            name:       retrieveTitle(post.title.$t),
                            picture:    filterThumbnailImages(post.media$thumbnail ? post.media$thumbnail : dummyImage),
                            variants:   [
                              {
                                name:       'Dummy Variant Details',
                                price:      retrievePrice(post.category ? post.category : dummyPrice),
                                quantity:   1
                              }
                            ],
                          }
                        )
                      }}>
                        <i data-ident='icon' className="w3-large">+</i>
                      </button>
                    </div>
                  </div>
                  <p className='w3-justify w3-container py-1' style={ {fontSize: '1rem', height: '60px'} }>{ retrieveDescription(post.content.$t) }</p>
                </div>
              </div>
            </article>
          )) :
            <p className='py-2'>No se encontraron productos</p>
          }
        </div>
    </div>
  </main>
  )
}