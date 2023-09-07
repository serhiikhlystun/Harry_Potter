import List from "../../components/List";

export default function Staff() {


    return (
        <>
            <div className="characters-header">
                <h1>Співробітники Гоґвортсу</h1>
            </div>  
            <div className="characters-list">
                <List current_persons={'staff'} />        
            </div>
        </>
    )
};