 import React from "react"

 
 var Book = (props) => {
    const data = props.data
    console.log(props)
    return(
        <article className="book">        
            <img src={data.image} alt="Books"/>
            <h2>{data.title}</h2>
            <h4>{data.author}</h4>
        </article>

    )
}

export default Book