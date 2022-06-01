import React from 'react';
import reactLogo from '../../../assets/images/react-icon.svg';

function Header() {
	return (
		<div className="project-1-header">
			<div className="content-wrapper">
				<div className="project-1-header-content">
					<div className="project-1-header__left">
						<img src={reactLogo} alt="" />
						<h1>ReactFacts</h1>
					</div>
					<div className="project-1-header__right">
						<h1>React Course Project-1</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
