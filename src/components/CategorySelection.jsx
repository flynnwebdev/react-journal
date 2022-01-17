import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import journalContext from '../journalContext'

export default function CategorySelection() {
    const { state: { categories }} = useContext(journalContext)

    return (
        <div>
            <h2>Please select a category</h2>
            <ul>
                {categories.map((cat, index) => (
                    <li>
                        <Link to={`/entry/new/${index}`}>{cat}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
