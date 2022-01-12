import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function NewEntry(props) {
    const params = useParams()
    const [entry, setEntry] = useState("")

    function submit(e) {
        e.preventDefault()
        // const entry = { cat_id: , text: entry }
    }

    return (
        <div>
            <h2>New Entry in {params.category}</h2>
            <form onSubmit={submit}>
                <div>
                    <textarea value={entry} onChange={e => setEntry(e.target.value)} rows="10" cols="60"></textarea>
                </div>
                <button>Create New Entry</button>
            </form>
        </div>
    )
}
