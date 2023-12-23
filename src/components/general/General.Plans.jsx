import { Link } from 'react-router-dom';
import { packagesOptions } from './packagesOptions.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


export function GeneralPlans ( {idxPkg} ) {
    return (
        <div className='w3-padding-32'>
            <h2 className='w3-padding fs-2'>{packagesOptions[idxPkg].title}</h2>
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}

                initialSlide={0}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                  }}
                modules={[EffectCoverflow, Pagination]}
                breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    }
                  }}
            >
                {packagesOptions[idxPkg].elements.map( (pkgOpt, idx) => (
                    <SwiperSlide key={idx}>
                        <Link to={`planes/basic/${pkgOpt.subPath}`} className='w3-padding-large text-decoration-none'>
                            <figure className='w3-border w3-border-light-gray w3-hover-shadow'>
                                <img src={pkgOpt.picture} alt="Imagen 01" width='300' height='300' style={ {width: '100%', height: 'auto', objectFit: 'cover'} } />
                                <div className="w3-padding w3-center">
                                    <figcaption>{pkgOpt.subtitle}</figcaption>
                                </div>
                            </figure>
                        </Link>
                    </SwiperSlide>
                ) )}
            </Swiper>
        </div>
    );
}