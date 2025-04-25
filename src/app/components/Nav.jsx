import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <div className="links">
                    <Link href='/' >Index</Link>
                </div>
            </div>
            <div className="links">
                <div className="link">
                    <Link href='/projects' >Projects</Link>
                </div>
                <div className="link">
                    <Link href='/info' >Info</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
