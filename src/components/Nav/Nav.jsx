import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
export const Nav=(props)=>{

           return(
            <nav>

                <Link to="/home">🏠 Home</Link>
                <Link to="/about">🤷‍♂️ About</Link>
                <Link to="/favorites">💗 Favorites</Link>
                <button onClick={props.logout }> 🚪 Logout </button>
                <SearchBar onSearch={props.onSearch}/>
                
            </nav>
           )
}