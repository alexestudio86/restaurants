import { useLoaderData } from "react-router-dom";

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
                                <img className="w-100" src={page.media$thumbnail.url} alt={page.title.$t} width='72' height='72' style={ {height: '300px', objectFit: 'cover'} } />
                                <div className="w3-container">
                                    <figcaption className="w3-xlarge" style={ {height: '64'} }>{page.title.$t}</figcaption>
                                    <p className="w3-medium" style={ {height: '64'} }>{page.content.$t}</p>
                                </div>
                            </figure>
                        </div>
                        page.title.$t
                    </div>
                ) )}
            </div>
        </div>
    )
}