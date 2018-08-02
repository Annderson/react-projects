
export default props => {
    if(props.test === "true") {
        return props.children
    }
    else if(props.test2 === "false") {
        return props.children
    }
    else {
        return  false
    }
}