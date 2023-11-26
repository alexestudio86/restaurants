import { useLoaderData, useSearchParams, useNavigate } from "react-router-dom";
import { useUpdateCarContext } from "../../../context/plans/CarBasicProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


// General function for get to unique label
const retrieveLabels = ( evt ) => {

  const terminos = [ ...( evt.map( e => e.term ) ).filter( e => isNaN( parseInt(e) ) ) ];
  return terminos

}

// General function fot get to unique image
const filterPostImages = ( evt, body ) => {
  if(evt){
    return evt.replace("s72","s320")
  }else if(body) {
    const tmp = document.createElement('div');
    tmp.innerHTML = body;
    const getImages = tmp.querySelectorAll('img');
    const allImages = Array.from(getImages).map( img => img.getAttribute('src') )
    if( allImages.length === 0 ){
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
    }else if( allImages.length === 1 ){
      return allImages[0].replace('s1024', 's320')
    }else{
      return allImages[0].replace('s1024', 's320')
      }
  }else{
    console.log('No hay imágenes');
    return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
  }
}

// Extract text of json html elements
const retrieveDescription = ( evt ) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = evt;
  return divElement.innerText
}

// Extract numbers only, and return 999 if evt has 2 prices
const retrievePrice = ( evt ) => {
  const prices = [ ...( evt.map( e => e.term ) ).filter( Number ) ];
  return(
    prices.length === 1 ? prices : 999
  )
}


export function PlanBasic01Products () {

  //Recovery car data
  const updateCar   =   useUpdateCarContext();

  //Get post from loader
  const { posts } = useLoaderData();

  const [items, setItems] = useState();

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
    <main className="w3-row w3-light-gray">
      <div className="container">
        <h1 className="w3-center w3-xxlarge w3-padding-64">Nuestros Productos</h1>
        { posts ? posts.map( ( post, index ) => (
          <article key={index} className='w3-half p-1' >
            <div className='w3-row w3-white w3-border-bottom'>
              <div className='w3-col s5' >
                <img className='w-100' alt={post.title.$t} src={ filterPostImages(post.media$thumbnail.url, post.content.$t) } width='auto' height='200px' />
              </div>
              <div className='w3-rest px-1'>
                <div className="w3-row pt-2">
                  <div className="w3-col s12">
                    <div className="w3-row">
                      <h1 className='w3-col s8 w3-large text-uppercase fw-bold'>{ post.title.$t }</h1>
                      <div className="w3-rest">
                        <span className="w3-right w3-xxlarge w3-text-teal price fw-bold">{ post.category ? retrievePrice(post.category) : 999 }</span>
                      </div>
                    </div>
                    { post.category && retrieveLabels( post.category ).map( (p, idx) => <span key={idx} className="w3-tag w3-teal w3-small m-1">{p}</span>) }
                    <p className='w3-medium w3-justify' style={ {height: '60px'} }>{ retrieveDescription(post.content.$t) }</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-row w3-white">
              <div className="w3-col s4 w3-center">
                <button className="w3-button w3-teal w-100">
                  <FontAwesomeIcon icon="fa-solid fa-minus" />
                </button>
              </div>
              <div className="w3-col s4 w3-center">
                <span>{ items ? items.find( () => items.id === post.id) : 0 }</span>
              </div>
              <div className="w3-col s4 w3-center">
                <button className="w3-button w3-teal w-100" onClick={ () => {
                  updateCar(
                    {
                      actionType: 'CHECK_ITEM'
                    },{
                      id:       post.id,
                      name:     post.title  ||  'Dummy Title',
                      picture:  post.media$thumbnail.url
                    }
                  )
                }}>
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                </button>
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