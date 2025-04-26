"use client";
import NavLink from "@/components/NavLink";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <div className="links">

                    <NavLink href="/" transitionType="topToBottom">
                        Index
                    </NavLink>
                </div>
            </div>
            <div className="links">
                <div className="link">

                    <NavLink href="/projects" transitionType="leftToRight">Projects</NavLink>
                </div>
                <div className="link">
                    <NavLink href="/info" transitionType="rightToLeft">Info</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav
