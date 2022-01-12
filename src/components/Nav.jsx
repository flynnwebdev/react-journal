import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/category">Category</Link> | 
            <Link to="/entry/new">Entry</Link>
        </nav>
    )
}
