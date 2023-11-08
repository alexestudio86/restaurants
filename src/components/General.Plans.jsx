import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Placeholder from '../assets/General.Placeholder-web.jpg'


export function GeneralPlans ( {idxPkg} ) {

    const packagesOptions = [
        {
            title:      'Demos Basic',
            path:       'basic',
            elements:   [
                {
                    subtitle:   'Diseño 01',
                    subPath:    'option-01',
                    picture:    Placeholder
                },                {
                    subtitle:   'Diseño 02',
                    subPath:    'option-02',
                    picture:    Placeholder
                },{
                    subtitle:   'Diseño 03',
                    subPath:    'option-03',
                    picture:    Placeholder
                },{
                    subtitle:   'Diseño 04',
                    subPath:    'option-04',
                    picture:    Placeholder
                }
            ]
        },{
            title:      'Premium',
            path:       'premium',
            elements:   [
                {
                    subtitle:   'Diseño 01',
                    subPath:    'option-01'
                }
            ]
        },{
            title:      'Platinum',
            path:       'platinum',
            elements:   [
                {
                    subtitle:   'Diseño 01',
                    subPath:    'option-01'
                }
            ]
        }
    ]

    const settings = {
        className:      "center",
        centerMode:     true,
        infinite:       true,
        centerPadding:  "250px",
        slidesToShow:   1,
        speed:          500
    };

    return (
        <div className='w3-padding-32'>
            <h2 className='w3-padding fs-2'>{packagesOptions[idxPkg].title}</h2>
            <Slider {...settings} >
                {packagesOptions[idxPkg].elements.map( (pkgOpt, idx) => (
                    <Link to={`basics/${pkgOpt.subPath}`} className='w3-padding-large text-decoration-none' key={idx} >
                        <figure className='w3-border w3-border-light-gray w3-hover-shadow'>
                            <img src={Placeholder} alt="Imagen 01" width='300' height='300' style={ {width: '100%', height: 'auto', objectFit: 'cover'} } />
                            <div className="w3-padding w3-center">
                                <figcaption>{pkgOpt.subtitle}</figcaption>
                            </div>
                        </figure>
                    </Link>
                ) )}
            </Slider>
        </div>
    );
}