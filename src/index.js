import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
    {
        id:1,
        title: "Pati Jinich Treasures of the Mexican",
        author:"Eric Carle",
        image: 'https://images-na.ssl-images-amazon.com/images/I/41Q7dRE4StL._AC_SX184_.jpg' 
    },
    {
        id:2,
        title: "I Love You to the Moon and Back",
        author:"Amelia Hepworth, Tim Warnes",
        image: 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._AC_SX184_.jpg' 
    },
    {
        id:3,
        title: "First 100 Board Book Box Set (3 books)",
        author:"Roger Priddy",
        image:"https://images-na.ssl-images-amazon.com/images/I/514CZz2fN-L._AC_SX184_.jpg"
    },
    {
        id:4,
        title: "First 100 Board Book Box Set (3 books)",
        author:"Roger Priddy",
        image:"https://images-na.ssl-images-amazon.com/images/I/514CZz2fN-L._AC_SX184_.jpg"
    }

]

function BookList(){
    return(
        <section className="bookList">
            {
                books.map((item,index)=>{
                    return <Book key={item.id} data={item} />
                })
            }
        </section>
    )

}

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



ReactDom.render(<BookList/>,document.getElementById('root'))