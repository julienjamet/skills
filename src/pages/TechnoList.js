import React from "react"
import TechnoItem from "../components/TechnoItem"

function TechnoList(props) {
    const { technos, handleDeleteTechno } = props

    return (
        <div className="techno-list">
            <h1>All technos</h1>
            <div>
                {technos.map((techno) => (
                    <TechnoItem techno={techno} key={techno.technoId} handleDeleteTechno={handleDeleteTechno} />
                ))}
            </div>
        </div>
    )
}

export default TechnoList