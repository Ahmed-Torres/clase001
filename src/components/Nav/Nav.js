const Nav = (props) => {
    console.log(props)
    return ( 
        <div className="Nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
     );
}
 
export default Nav;