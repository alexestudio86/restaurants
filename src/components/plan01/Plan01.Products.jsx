import { useLoaderData } from "react-router-dom"


export function Plan01Products () {

    const { posts } = useLoaderData();
    const items = posts.items;

    return (
        <main>
            { items ? items.map( (item, index) =>(
                <article className="row p-3 bg-white mb-4" key={index}>
                    <div className="col-md-6">
                        { item.gallery.length > 0 ?
                            <img className="w-100" src={ item.gallery[0].url } alt={ item.title } />
                            :
                            <p>No hay imágenes</p>
                        }
                    </div>
                    <div className="col-md-6 text-end">
                        <span className="fs-4 fw-bold text-info text-uppercase">Ver mas</span>
                    </div>
                    <div className="col-md-12">
                        <h1 className="text-uppercase fs-1">
                            <Link className="link-info" to={`/products/${item.id}`}>{ item.title }</Link>
                        </h1>
                    </div>
                </article>
            ) ) :
                <p>No se encontraron productos</p>
            }
        </main>
    )
}