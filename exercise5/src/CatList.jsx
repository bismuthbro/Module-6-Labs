import SingleCatInfo from './SingleCat'
import CatForm from './CatForm'
import { useState } from 'react'


function CatList(){
    const cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/800px-TheCheethcat.jpg'},
        { name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg'},
        { name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/1200px-African_leopard_male_%28cropped%29.jpg'},
        { name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg'},
        { name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg'},
        { name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://files.worldwildlife.org/wwfcmsprod/images/Snow_Leopard_hero_species_2021/story_full_width/7w97onamik_species_snowleopard_hero.jpg'},
        { name: 'Tiger', latinName: 'Panthera tigris', image: 'https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg'},
    ];
    let [currentList,setListState] = useState(cats)
    const handleAddCat = (newCat) => {
        setListState([...currentList, newCat])
    }
    return (
        <>
        <button onClick={()=>setListState((currentList)=> [...currentList].reverse())}>Reverse List</button>
        <button onClick={()=>setListState((currentList)=> currentList.filter((element) => element.latinName.includes('Panthera')))}> Show only Panthera</button>
        <button onClick={()=>setListState(cats)}>Reset</button>
        <CatForm onAddCat={handleAddCat}></CatForm>
        <ul>{currentList.map((cat)=> (<SingleCatInfo key={cat.latinName} catName={cat.name} image={cat.image}></SingleCatInfo>))}</ul>
        </>
    ) 
}
export default CatList