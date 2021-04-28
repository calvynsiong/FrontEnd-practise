import React from 'react';
import ReactDom from 'react-dom';
import './index.scss'; //CSS
import Book  from "./Book";
import Books, {greeting} from "./Books";

// Array
// Iterating throgh Book components
function Booklist() {
	return (
		<section className='BookList'>
			{Books.map((book) => {
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}



ReactDom.render(<Booklist />, document.getElementById('root'));
