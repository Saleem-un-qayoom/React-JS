import React from 'react';
import './BusinessCards.scss';
import Button from './Button';

const buttons = [
	{
		img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAE3klEQVRoge2YS28bVRTHf/cxDzvdVaCIl4oEpSyoAl+D79Etezas4DPQT8IedQEI2rRpkiZpk7ZxG+fd1Pb4MY/DImN7ZuxxHAMBCR8p0sy9Z+b+/vc85sYwt7nNbW5z+z+byt58+/3h1yrhLvD+v8Qz0QRqJHLnh+/e/ak/pnMeCT/yH4UHUPCB0upudkwXHa4WaSb7MHuTE5BIcna1LJc3kfht9j4nYHPjjyhoN5avFml6azbfHq6trlezYzkBxlSv7zxbW6rtbi6LSOtq8cotlkR2d1/wdHvnHVGezc7lBIiA416j0WgtPVn/rdPrttavFnXUms0G62sr6uS0iTULFBrnqAARQRsHlH/9yebDz1/vbt4XSdpXCQ2QJEKt9pKNzS2SxMMYr0+Z88u3USQVAUpprLnG8embr1Yf/3rW7QYbV4MOrVaTtfVHHB2d4LrX0Nqm4DLiOxKBcxGSilAY6yGYxfXV32/W958/QOj9U+AiQn3vFRsbT4hjg3WqKKUG8OdceRG28IaBxqGjQmsfHKP2XtW+PDqo12/eWmq7jv/x3wnfbgdsP39KtxNinSpaOwUOuDgCfRHpQ/2aQASlLNZZIApl8dHDX24c7L9YAeK/ji7s7++xtr5C2E1wnAWUspndHvc3tFwEBmoFBrGQoTBQGMeHSKsXL3e+OD6q1z/9bCmx1ntvFvRut8P29hZBu4O1FZRyOd/T4k4PN3RyEacFLCn18DqVk45p4+LYKq2gt/jg/r3Fw8OXj4BkanKBw8M6j9eWabd7WFNBaz+T733QYd7nozG0fAT64IMBGb1O55W2WKuIYqW3n23dPqjXu5/cvO15nj+RvdftsPP8KW8bDYypYKwz0mWGaT85/2Hcd6APm9v1LHwaEQGUwWgfYyu0gpb38ME9Dg5el63FyckRK6vLNJoBjq1irZeDH9Tc2Ly/ZBcqrwMGYkBAKYx2zxdPQp5trXBytMdHN25RrS4AEAQBtdoOZ2dvMNbHGAdjHEBlgHMgGaTJUSikUAl4NrX634rM+wQw2iVGYyy8OT3l+PhnPH8BYxzCOEZrJ22PFq2dMQU5LfTUXagAfu5QAJecCK0MifZR1mATSxjGRJHgeFWMcVDKRSmVAczDlIOXd6FCCl0APpjKg2dTS6HR2kWUg5EEQYjDGIWDdRSZp2aGLhUwuQtNBi+mlkIhSqPSR8JelzgOcb0K+RPlaIpcpguNj8AMxTwptfrvi6OYdtzEcVys447ATa6L8SIKNZCHuXwxl0QoO59Ar9sljEJ8zwfV7+SzFHRJCpXBTFvMYyOUWVtEkCgmiAIc18VxnQnQ5eJGBEyT5/moTF8TRbDzy4Rut0MUhXi+lx4lxkOPr4uSNnoRzOj8JWoiM9GHiqKIuBHh+v1oXAw+XsAlYMbPX64msoAJ0Gl3CcMIv+IVDnZTCsjn9gwFOgP4+fjwJgpjmlGA7zu52pipC02EyQqdug7KwXOplUA76BH2IryKi9ajH8DxAqbZxbFgxfq5YCPKwAsROj+KtPEqLq5rxooo/CpBTUiPrOl6/X8ppb+ACNLfSSF3xJWh03B+3PtSN8n4Fn9QyArsBD2CVo8kSRBRu+UCRN1BqOVhS8CRqWBGNiI3Xw5etCiMCVq9XiLJN+Vec5vb3OY2t/+b/QlgDkQcE1qDHAAAAABJRU5ErkJggg==',
		label: 'Email',
	},
	{
		img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAE3klEQVRoge2YS28bVRTHf/cxDzvdVaCIl4oEpSyoAl+D79Etezas4DPQT8IedQEI2rRpkiZpk7ZxG+fd1Pb4MY/DImN7ZuxxHAMBCR8p0sy9Z+b+/vc85sYwt7nNbW5z+z+byt58+/3h1yrhLvD+v8Qz0QRqJHLnh+/e/ak/pnMeCT/yH4UHUPCB0upudkwXHa4WaSb7MHuTE5BIcna1LJc3kfht9j4nYHPjjyhoN5avFml6azbfHq6trlezYzkBxlSv7zxbW6rtbi6LSOtq8cotlkR2d1/wdHvnHVGezc7lBIiA416j0WgtPVn/rdPrttavFnXUms0G62sr6uS0iTULFBrnqAARQRsHlH/9yebDz1/vbt4XSdpXCQ2QJEKt9pKNzS2SxMMYr0+Z88u3USQVAUpprLnG8embr1Yf/3rW7QYbV4MOrVaTtfVHHB2d4LrX0Nqm4DLiOxKBcxGSilAY6yGYxfXV32/W958/QOj9U+AiQn3vFRsbT4hjg3WqKKUG8OdceRG28IaBxqGjQmsfHKP2XtW+PDqo12/eWmq7jv/x3wnfbgdsP39KtxNinSpaOwUOuDgCfRHpQ/2aQASlLNZZIApl8dHDX24c7L9YAeK/ji7s7++xtr5C2E1wnAWUspndHvc3tFwEBmoFBrGQoTBQGMeHSKsXL3e+OD6q1z/9bCmx1ntvFvRut8P29hZBu4O1FZRyOd/T4k4PN3RyEacFLCn18DqVk45p4+LYKq2gt/jg/r3Fw8OXj4BkanKBw8M6j9eWabd7WFNBaz+T733QYd7nozG0fAT64IMBGb1O55W2WKuIYqW3n23dPqjXu5/cvO15nj+RvdftsPP8KW8bDYypYKwz0mWGaT85/2Hcd6APm9v1LHwaEQGUwWgfYyu0gpb38ME9Dg5el63FyckRK6vLNJoBjq1irZeDH9Tc2Ly/ZBcqrwMGYkBAKYx2zxdPQp5trXBytMdHN25RrS4AEAQBtdoOZ2dvMNbHGAdjHEBlgHMgGaTJUSikUAl4NrX634rM+wQw2iVGYyy8OT3l+PhnPH8BYxzCOEZrJ22PFq2dMQU5LfTUXagAfu5QAJecCK0MifZR1mATSxjGRJHgeFWMcVDKRSmVAczDlIOXd6FCCl0APpjKg2dTS6HR2kWUg5EEQYjDGIWDdRSZp2aGLhUwuQtNBi+mlkIhSqPSR8JelzgOcb0K+RPlaIpcpguNj8AMxTwptfrvi6OYdtzEcVys447ATa6L8SIKNZCHuXwxl0QoO59Ar9sljEJ8zwfV7+SzFHRJCpXBTFvMYyOUWVtEkCgmiAIc18VxnQnQ5eJGBEyT5/moTF8TRbDzy4Rut0MUhXi+lx4lxkOPr4uSNnoRzOj8JWoiM9GHiqKIuBHh+v1oXAw+XsAlYMbPX64msoAJ0Gl3CcMIv+IVDnZTCsjn9gwFOgP4+fjwJgpjmlGA7zu52pipC02EyQqdug7KwXOplUA76BH2IryKi9ajH8DxAqbZxbFgxfq5YCPKwAsROj+KtPEqLq5rxooo/CpBTUiPrOl6/X8ppb+ACNLfSSF3xJWh03B+3PtSN8n4Fn9QyArsBD2CVo8kSRBRu+UCRN1BqOVhS8CRqWBGNiI3Xw5etCiMCVq9XiLJN+Vec5vb3OY2t/+b/QlgDkQcE1qDHAAAAABJRU5ErkJggg==',
		label: 'LinkedIn',
	},
];

function BusinessCards() {
	return (
		<div className="business-card">
			<div className="business-card-image-container">
				<img
					src="https://image.shutterstock.com/image-photo/portrait-serious-business-man-glasses-600w-71846869.jpg"
					alt=""
				/>
			</div>
			<div className="business-card-content">
				<h1 className="business-card-content-name">
					Saleem Un Qayoom
				</h1>
				<p className="business-card-content-post">
					Front-End Developer
				</p>

				<div className="business-card-content-contact">
					{buttons.map(item => (
						<Button img={item.img}>{item.label}</Button>
					))}
				</div>
				<div className="business-card-content-about">
					<h1>About</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Velit, excepturi optio sequi
						aspernatur obcaecati mollitia expedita ipsum
						molestias earum delectus magni, aperiam magnam
						animi, sint fugit ut inventore facilis eos?
					</p>
				</div>
				<div className="business-card-content-interest">
					<h1>Interests</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Velit, excepturi optio sequi
						aspernatur obcaecati mollitia expedita ipsum
						molestias earum delectus magni, aperiam magnam
						animi, sint fugit ut inventore facilis eos?
					</p>
				</div>
			</div>
			<div className="business-card-social-media"></div>
		</div>
	);
}

export default BusinessCards;
