import { useLoaderData } from "react-router-dom";
import dummyImage from '../../../assets/general/dummy-product.jpg'


//Retrieve image in big size
const expandImage = ( evt ) => {
    if(evt.url){
      return evt.url.replace("s72","s320")
    }else {
      const tmp = document.createElement('div');
      tmp.innerHTML = evt.$t;
      const getImages = tmp.querySelectorAll('img');
      const allImages = Array.from(getImages).map( img => img.getAttribute('src') )
      if( allImages.length === 0 ){
        return dummyImage
      }else if( allImages.length === 1 ){
        return allImages[0].replace('s1024', 's320')
      }else{
        return allImages[0].replace('s1024', 's320')
        }
    }
}

// Extract text of json html elements
const retrieveDescription = ( evt ) => {
    const divElement = document.createElement('div');
    divElement.innerHTML = evt;
    return divElement.innerText
}

export function PlanBasic01Promos () {

    const { pages } = useLoaderData();


    return (
        <div className="w3-row" id="promotions">
            <div className="container">
                <h1 className="w3-center w3-xxlarge w3-padding-64">Promociones</h1>
                { pages && pages.map( (page, index) => (
                    <div key={index} className="w3-third" style={ {margin: '0 0 64px 0'} }>
                        <div className="w3-container">
                            <figure className="w3-card">
                                <img className="w-100" src={ expandImage(page.media$thumbnail ? page.media$thumbnail : dummyImage)} alt={page.title.$t} width='72' height='72' style={ {height: '300px', objectFit: 'cover'} } />
                                <div className="w3-container">
                                    <figcaption className="w3-xlarge" style={ {height: '64'} }>{page.title.$t}</figcaption>
                                    <p className="w3-medium" style={ {height: '64'} }>{ retrieveDescription(page.content.$t) }</p>
                                </div>
                            </figure>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}