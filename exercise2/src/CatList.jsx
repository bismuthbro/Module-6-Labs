import SingleCatInfo from './SingleCat'

function CatList(){
    //const catList = cats.map((cat, index) => (<li key={index}>{cat.name}</li>));
    return (
        <ul>
        <SingleCatInfo item='0'></SingleCatInfo>
        <SingleCatInfo item='1'></SingleCatInfo>
        <SingleCatInfo item='2'></SingleCatInfo>
        <SingleCatInfo item='3'></SingleCatInfo>
        <SingleCatInfo item='4'></SingleCatInfo>
        <SingleCatInfo item='5'></SingleCatInfo>
        <SingleCatInfo item='6'></SingleCatInfo>
        </ul>
    ) 
}
export default CatList
  