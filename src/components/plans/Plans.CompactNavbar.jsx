import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export function PlansCompactNavbar () {

    const sections = [
        {
            icon:   'fa-regular fa-circle-left',
            path:    '/'
        },
        {
            icon:   'fa-solid fa-house',
            path:    'basics'
        }
    ]

    return (
        <div className='sticky-top w3-light-grey' id="compact-navbar">
            <div className="w3-row container">
                { sections.map( (section, index) => (
                    <Link key={index} className="w3-col m6 w3-button" to={section.path} >
                        <FontAwesomeIcon className='fa-2x' icon={section.icon} />
                    </Link>
                ) ) }
            </div>
        </div>
    )
}