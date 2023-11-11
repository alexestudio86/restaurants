import { useLoaderData, useSearchParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


// General function for get to unique label
const filterLabels = (e) => {
    if(e.length === 0){
      return 'Varios'
    }else if (e.length === 1) {
      return e[0]
    } else {
      return e[1]
    }
}


// General function fot get to unique image
const filterPostImages = ( evt, body ) => {
    if(evt){
      if(evt.length === 0){
        return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
      }else if (evt.length === 1) {
        return evt[0].url.replace("s1024","s320")
      } else {
        return evt[0].url.replace("s1024","s320")
      }
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
      console.log('No hay imágenes')
    }
}

export function PlanPremium01Products () {

  const { items, nextPageToken } = useLoaderData();

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
        <h1 className="w3-center w3-xxlarge w3-padding-64">Nuestro Productos</h1>
        { items ? items.map( ( item, index ) => (
          <article key={index} className='w3-half p-1' >
            <Link to={ `/products/${item.id}` } style={ {textDecoration: 'none'} } >
              <div className='w3-row w3-white w3-border-bottom w3-hover-opacity'>
                <div className='w3-col s5' >
                  <img className='w-100' alt={item.title} src={ filterPostImages(item.images, item.content) } width='auto' height='200px' />
                </div>
                <div className='w3-rest px-1'>
                  <div className="w3-row pt-2">
                    <div className="w3-col s12">
                      <h1 className='w3-large text-uppercase fw-bold' style={ {height: '55px'} }>{ item.title }</h1> 
                      <span className='w3-large w3-text-teal'>{ filterLabels( item.labels ) }</span>
                      <p className='w3-medium w3-justify' style={ {height: '60px'} }>{ item.content }</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w3-row w3-white">
                <div className="w3-col s12 w3-right-align">
                  <span className="w3-right w3-xxlarge w3-text-teal price fw-bold">{ item.labels[0] }</span>
                </div>
              </div>
              <div>

              </div>
            </Link>
          </article>
        )) :
          <p className='py-2'>No se encontraron productos</p>
        }
        { location.pathname !== '/' &&
          (
            <div className='w3-col s12 py-2'>
              { params.get('some') && <button className='w3-button w3-blue w3-left' >Anterior</button> }
              { nextPageToken &&  <button className='w3-button w3-blue w3-right' onClick={handleNext} >Siguiente</button> }
            </div>
          )
        }
    </div>
  </main>
  )
}