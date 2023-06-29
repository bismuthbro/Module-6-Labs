import { useState } from "react"
function CatForm(props) {
    const [name, setCatName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setCatImage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddCat({name, latinName, image})
        }
       
    return (
        <div className="AddMovieForm componentBox">
            <form onSubmit={()=>handleSubmit}>
                <label>Cat Name:
                    <input name="name" value={name}
                        onChange={(e) => setCatName(e.target.value)} />
                </label>
                <label>Latin Name:
                    <input name="latinName" value={latinName}
                        onChange={(e) => setLatinName(e.target.value)} />
                </label>
                <label>Image:
                    <input name="image" value={image}
                        onChange={(e) => setCatImage(e.target.value)} />
                </label>
                <button>Add Cat</button>
            </form>
        </div>
    )
}

export default CatForm