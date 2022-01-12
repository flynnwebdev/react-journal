import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function NewEntry({ categories, addEntry }) {
    const params = useParams()
    const [entry, setEntry] = useState("")
    const navigate = useNavigate()

    function submit(e) {
        e.preventDefault()
        addEntry(params.cat_id, entry)
        navigate("/")
    }

    return (
        <div>
            <h2>New Entry in {categories[params.cat_id]}</h2>
            <form onSubmit={submit}>
                <div>
                    <textarea value={entry} onChange={e => setEntry(e.target.value)} rows="10" cols="60"></textarea>
                </div>
                <button>Create New Entry</button>
            </form>
        </div>
    )
}
