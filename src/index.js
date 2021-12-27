import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import {books} from './components/booksData'
import Book from './components/Book'



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


ReactDom.render(<BookList/>,document.getElementById('root'))