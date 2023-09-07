import List from './../../components/List'

function Students() {
    

    return (
        <>
            <div className="characters-header">
                <h1>Студенти Гоґвортсу</h1>
            </div>
            <div className='characters-list'>
                <List current_persons={'students'} />
            </div>
        </>
    )
}

export default Students