import Project1 from '../View/Project1/Project1';
import Project2 from '../View/Project2/Project2';

const routes = [
	{
		path: '/',
		redirectTo: '/p1',
		component: Project1,
	},
	{ path: '/p1', component: Project1 },
	{ path: '/p2', component: Project2 },
];

export default routes;
