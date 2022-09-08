import React from "react"

function TechnoItem(props) {
    const { techno, handleDeleteTechno } = props

    return (
        <div className="card" key={techno.technoId}>
            <h2>{techno.technoName}</h2>
            <h3>Category</h3>
            <p>{techno.technoCategory}</p>
            <h3>Description</h3>
            <p>{techno.technoDescription}</p>

            <div>
                <button className="btn-delete" onClick={() => handleDeleteTechno(techno.technoId)}>Delete techno</button>
            </div>
        </div>
    )
}

export default TechnoItem