import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import journalContext from '../journalContext'

export default function CategorySelection() {
    const { state: { categories }} = useContext(journalContext)

    return categories ? (
        <div>
            <h2>Please select a category</h2>
            <ul>
                {categories.map(cat => (
                    <li>
                        <Link to={`/entry/new/${cat.id}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    ) : (<p>Loading ...</p>)
}
