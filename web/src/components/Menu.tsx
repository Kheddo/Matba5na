import 'bootstrap/dist/css/bootstrap.min.css'
import Frozen from "./Frozen";
import Breakfast from './Breakfast';
import MainDishes from './MainDishes';
import Casseroles from './Casseroles';
import Traditional from './Traditional';
import International from './International';
import Rice from './Rice';

export default function Menu() {
    
  return (
    <div className="Menu">
        <h2>Frozen</h2>
        <Frozen/>
        <h2>Breakfast Specials</h2>
        <Breakfast/>
        <h2>Main Dishes</h2>
        <MainDishes/>
        <h2>Casseroles & Oven-Baked Dishes</h2>
        <Casseroles/>
        <h2>Traditional Egyptian Favorites</h2>
        <Traditional/>
        <h2>International Flavors</h2>
        <International/>
        <h2>Rice Selections</h2>
        <Rice/>
    </div>
  );
};
