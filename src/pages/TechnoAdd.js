import React from "react"
import { useState } from "react"

function TechnoAdd(props) {
    const [techno, setTechno] = useState({
        technoName: "",
        technoCategory: "",
        technoDescription: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setTechno({ ...techno, [name]: value })
    }

    const { handleAddTechno } = props
    function handleSubmit(e) {
        e.preventDefault()
        handleAddTechno(techno)
        setTechno({
            technoName: "",
            technoCategory: "",
            technoDescription: ""
        })
    }

    return (
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="technoName">Name</label>
                    <br />
                    <input type="text" name="technoName" id="technoName" value={techno.technoName} onChange={(e) => handleChange(e)} />
                    <br />
                    <label htmlFor="technoCategory">Category</label>
                    <br />
                    <select name="technoCategory" id="technoCategory" value={techno.technoCategory} onChange={(e) => handleChange(e)} >
                        <option value="">Select a category</option>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Fullstack">Full stack</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="technoDescription">Description</label>
                    <br />
                    <textarea name="technoDescription" id="technoDescription" cols="30" rows="10" value={techno.technoDescription} onChange={(e) => handleChange(e)} ></textarea>
                    <br />
                    <input type="submit" value="Add techno" className="btn" />
                </form>
            </div>
        </div>
    )
}

export default TechnoAdd