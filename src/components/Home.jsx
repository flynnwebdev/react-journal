import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    useEffect(() => console.log("useEffect: Home"), [])

    return (
        <div>
            <h1>Home</h1>
            <Link to="/category">
                <button>Create New Entry</button>
            </Link>
        </div>
    )
}
