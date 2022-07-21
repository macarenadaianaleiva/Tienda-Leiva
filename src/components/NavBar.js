

export const NavBar = ({children}) =>{
    return(
        <nav>
            <h1>LOGO</h1>
            <ul>
                <li><a href=''>Auriculares</a></li>
                <li><a href=''>Teclados</a></li>
                <li><a href=''>Mouse</a></li>
                <li><a href=''>Sillas</a></li>
                <li><a href=''>LOGIN</a></li>
                <li><a href=''>{children}</a></li>
            </ul>
        </nav>
    )
}