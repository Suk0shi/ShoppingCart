import { Link } from "react-router-dom";
import '../styles/Home.css'



function Header({cartNum}) {

  return (
    <>
      <header>
        <div className="title">
            <h1>Shop Name</h1>
        </div>
        <div className="pageLinks">
            <Link to="/home">
                Home
            </Link> 
            <Link to="/shop">
                Shop
            </Link>
            <Link to="/cart">
                Cart({cartNum})
            </Link> 
        </div>
      </header>
    </>
  )
}

export default Header