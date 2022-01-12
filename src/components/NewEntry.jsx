import { useEffect } from 'react'
import { useParams } from 'react-router'

export default function NewEntry(props) {
    useEffect(() => console.log("useEffect: NewEntry"), [])
    const params = useParams()

    return (
        <div>
            <h2>New Entry in {params.category}</h2>
        </div>
    )
}
