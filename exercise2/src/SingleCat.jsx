const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
];
import cheetah from './assets/Cheetah.jpg'
import cougar from './assets/Cougar.jpg'
import jaguar from './assets/Jaguar.jpg'
import leopard from './assets/Leopard.jpg'
import lion from './assets/Lion.jpg'
import snowLeopard from './assets/SnowLeopard.jpg'
import tiger from './assets/Tiger.jpg'

let catImages = [cheetah,cougar,jaguar,leopard,lion,snowLeopard,tiger]


function SingleCatInfo (props){
    let catName = cats[props.item].name
    return(
        <>
        <li key={props.item}>{catName}<img src={catImages[props.item]}></img></li>  
        </>      
    )
}

export default SingleCatInfo