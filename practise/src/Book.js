// Creating a book grid
import React from 'react';




 const Book = (props) => {
	// Attribute + event Handler
	const { img, title, author } = props;
	return (
		<article className='book'>
			<img src={img} alt='1984 Book' />
			<h1>{title} </h1>
			<h2>{author}</h2>
			<button type='button'>Buy this!</button>
			<button
				type='button'
				onMouseOver={() => {
					console.log(title);
					console.log(author);
				}}>
				Buy this!
			</button>
		</article>
	);
};

export default Book