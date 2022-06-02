import React from 'react';

const items = [
	'Lorem ipsum dolor sit amet.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	'Lorem ipsum dolor sit amet consectetur adipisicing.',
];

function MainContent() {
	return (
		<div className="project-1-main-content">
			<div className="content-wrapper">
				<h1>Fun Facts about React</h1>
				<ul className="project-1-main-content__list">
					{items.map(val => (
						<li className="project-1-main-content__list__item__text">
							{val}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default MainContent;
