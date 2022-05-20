
// import React from "react";
// import {IState as IProps } from "./../interfaces"


// const List: React.FC<IProps>= ({people}) => {

//     const renderList = ():JSX.Element[]=> {
//         return people.map((person) => {
//             return (
//                 <li className="List" key={person.id}>
//                     <div className="List-header">
//                         <img className="List-img" src={person.url} alt="img"></img>
//                         <h2>{person.name}</h2>
//                     </div>
//                     <p>{ person.age} years old</p>
//                     <p className="List-note">{ person.note}</p>
//                 </li>
//         )
//         })
//     }

//     return (
//         <ul>
//         {renderList()}
//         </ul>
//     )
// }

// export default List;


import React from "react";
import {IState as IProps } from "./../interfaces"


const List: React.FC<IProps>= ({people}) => {

    const renderList = ():JSX.Element[]=> {
        return people.map((person) => {
            return (
                <li className="list-item" key={person.id}>
                    <div className="people-container">
                        <div className="left-site">
                            <div className="people-img">
                            <img className="avatar-img" src={person.url} alt="img"/>
                            </div>
                            <div className="people-info">
                            <div className="people-name">{person.name}</div>
                            <div className="people-age">{ person.age} years old</div>
                            </div>
                            
                        </div>
                        <div className="right-site">
                            <p className="text-about">{ person.note}</p>
                        </div>
                    </div>
                </li>
            )
        })
    }
    
    return (
        <ul>
        {renderList()}
        </ul>
    )
}

export default List;
