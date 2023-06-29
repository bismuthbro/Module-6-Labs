function SingleCatInfo (props){
    return (
        <>
        <li>{props.catName}</li>
        <img src={props.image}></img>
        </>
    )
}

export default SingleCatInfo
