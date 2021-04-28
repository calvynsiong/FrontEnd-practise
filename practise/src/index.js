import React from 'react';
import ReactDom from 'react-dom';
import './index.scss'; //CSS
import image1 from './1984.jpg';
import image2 from './af.jpg';

export default {
	image1,
	image2,
};
//Must have self closing tags and be placed in html or root div
const Books = [
	{
		id:1,
		title: 'Animal Farm',
		img: image1,
		author: 'George Orwell',
	},
	{
		id:2,
		title: '1984',
		img: image2,
		author: 'George Orwell',
	},
	{
		id:3,
		title: '1984',
		img: image2,
		author: 'George Orwell',
	}
];

function Booklist() {
	return <section className='BookList'>{Books.map((book) => {
		return (
			<Book key={book.id}  {...book}></Book>
		);

	})}</section>;
}
const Book = (props) => {
	const {img, title, author} = props
	return (
		<article className='book'>
			<img src={img} alt='1984 Book' />
			<h1>{title} </h1>
			<h2>{author}</h2>
		</article>
	);
};

ReactDom.render(<Booklist />, document.getElementById('root'));
