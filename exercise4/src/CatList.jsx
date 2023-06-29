import SingleCatInfo from './SingleCat'
import { useState } from 'react'
import Cheetah from './assets/Cheetah.jpg'
import Cougar from './assets/Cougar.jpg'
import Jaguar from './assets/Jaguar.jpg'
import Leopard from './assets/Leopard.jpg'
import Lion from './assets/Lion.jpg'
import SnowLeopard from './assets/SnowLeopard.jpg'
import Tiger from './assets/Tiger.jpg'


function CatList(){
    const cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: Cheetah},
        { name: 'Cougar', latinName: 'Puma concolor', image: Cougar},
        { name: 'Jaguar', latinName: 'Panthera onca', image: Jaguar},
        { name: 'Leopard', latinName: 'Panthera pardus', image: Leopard},
        { name: 'Lion', latinName: 'Panthera leo', image: Lion},
        { name: 'Snow leopard', latinName: 'Panthera uncia', image: SnowLeopard},
        { name: 'Tiger', latinName: 'Panthera tigris', image: Tiger},
    ];
    let [currentList,setListState] = useState(cats)
    return (
        <>
        <button onClick={()=>setListState((currentList)=> [...currentList].reverse())}>Reverse List</button>
        <button onClick={()=>setListState((currentList)=> currentList.filter((element) => element.latinName.includes('Panthera')))}> Show only Panthera</button>
        <button onClick={()=>setListState(cats)}>Reset</button>
        <ul>{currentList.map((cat)=> (<SingleCatInfo key={cat.latinName} catName={cat.name} image={cat.image}></SingleCatInfo>))}</ul>
        </>
    ) 
}
export default CatList  