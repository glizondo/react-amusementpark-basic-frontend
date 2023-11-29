import Background from '../images/background.jpg';
import ListPhotos from './ListPhotos';

function Body (props){
    
    return (
        <div>
        {props.menu === "main" && <img className="body-image" src={Background}></img>}
        {props.menu === "photos" && <ListPhotos/>}
        </div>
    )
}
export default Body;