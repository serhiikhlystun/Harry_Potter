import { useState, useEffect } from 'react';
import Person from './Person';

export default function List({ current_persons }) {

    // State for saving information getting from API
    const [personsData, setPersonsData] = useState([]);
    
    // Getting information from API
    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
            .then(response => response.json())
            .then(data => setPersonsData(data))
    })

    let persons = []

    // Formation of the list depending on the request
    if (current_persons === 'students') { 
        persons = personsData.filter(item => item.hogwartsStudent)        
    } else if (current_persons === 'staff') {
        persons = personsData.filter(item => item.hogwartsStaff);
    } else {
        persons = personsData.filter(item => item.house === current_persons);
    }

    return (
        <ul>
            {persons.slice(0, 8).map(item => <Person key={item.id} person={item} />)}
        </ul>
    )
}