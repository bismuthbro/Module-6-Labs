export default function GreetingComponent(props) {
    let message
    props.name ? message = props.name : message = 'World'
    if (props.children) {return (props.children)} else {return (<p>Hello {message}</p>)}
}