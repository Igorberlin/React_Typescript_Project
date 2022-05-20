import React, { useState } from "react";
import AddToList from '../components/AddToList';
import List from '../components/List';
import { IState } from "../interfaces";
import peopleArray from "./../api/peopleApi"


const PeopleListPage: React.FC = () => {

    const [people, setPeople] = useState<IState["people"]>(peopleArray
    );
    
    return (
        <>
            <h1 className="people-list-title">People List</h1>
            {people.length === 0? <div><h1>No people in list. Please add people!</h1></div>: <List people={people} />}
        
        <AddToList people={people} setPeople={setPeople} />
        </>
    )
}

export default PeopleListPage;