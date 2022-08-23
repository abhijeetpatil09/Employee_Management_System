import React from 'react'

const Header = () => {
    return (
        <div>
            <header  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "https://javaguides.net" className = "navbar-brand">
                              Employee Management Application
                        </a>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header