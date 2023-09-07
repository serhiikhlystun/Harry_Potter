import { Link } from 'react-router-dom'
import './Person.css'

export default function Person({person}) {

    // Preparing a card for each character
    return (
        <>
            <li>
                <div className="front-side">
                    <Link to='#' className='person-link'>
                        <img src={person.image} alt='person_image' />
                        <div className="characters-info">
                            <h3>{person.name}</h3>
                            <p>{person.alternate_names[0]}</p>
                            <p>{person.house}</p>
                            <p>{person.dateOfBirth}</p>
                            <div className="more-info"> 
                                Більше інфомації
                                <span className="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                                        <g clipPath="url(#clip0_16_179)">
                                            <path d="M16 -3.49691e-07C16 0.742 16.733 1.85 17.475 2.78C18.429 3.98 19.569 5.027 20.876 5.826C21.856 6.425 23.044 7 24 7M24 7C23.044 7 21.855 7.575 20.876 8.174C19.569 8.974 18.429 10.021 17.475 11.219C16.733 12.15 16 13.26 16 14M24 7L-3.0598e-07 7" stroke="white" strokeWidth="1.5"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_16_179">
                                            <rect width="14" height="24" fill="white" transform="translate(24) rotate(90)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="ellipse">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="10" fill="#F9B50C"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                            <div className="gradient"></div>
                    </Link>
                </div>
                <div className="back-side">
                    <p>Name: <span>{ person.name }</span></p>
                    <p>Alternate names: <span>{ person.alternate_names.join(', ') }</span></p>
                    <p>Species: <span>{ person.species }</span></p>
                    <p>Gend: <span>{ person.gender }</span></p>
                    <p>House: <span>{ person.house }</span></p>
                    <p>Date of birth: <span>{ person.dateOfBirth }</span></p>
                    <p>Year of birth: <span>{ person.yearOfBirth }</span></p>
                    <p>Wizard: <span>{ person.wizard.toString() }</span></p>
                    <p>Ancestry: <span>{ person.ancestry }</span></p>
                    <p>Eye colour: <span>{ person.eyeColour }</span></p>
                    <p>Hair colour: <span>{ person.hairColour }</span></p>
                    {/* <p className='key'>Wand:<span className='value'>{ person.wand.toString() }</span></p> */}
                    <p>Patronus: <span>{ person.patronus }</span></p>
                    <p>Hogwarts student: <span>{ person.hogwartsStudent.toString() }</span></p>
                    <p>Hogwarts staff: <span>{ person.hogwartsStaff.toString() }</span></p>
                    <p>Actor: <span>{ person.actor }</span></p>
                    <p>Alive: <span>{ person.alive.toString() }</span></p>
                </div>
            </li>
        </>
    )
}