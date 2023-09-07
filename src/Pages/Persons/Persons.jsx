import { useState } from "react"
import List from "../../components/List"
import './Persons.css'

export default function Persons() {

    // State for select each house
    const [house, setHouse] = useState('Gryffindor');

    function selectHouse(event) {
        setHouse(event.target.value);
    };

    return (
        <>
            <div className="characters-header">
                <h1>Персонажі в певному будинку</h1>
            </div>
            <nav>
                <ul>
                    {['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'].map(key =>
                        <li key={key}><button className={'set-house ' + key.toLowerCase() + (key === house ? ' active-link' : '')} value={key} onClick={selectHouse}>{ key }</button></li>)}
                </ul>
            </nav>
            <div className="characters-list">
                <List current_persons={house} />
            </div>
        </>    
    )
};