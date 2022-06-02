import { Route, Routes, Navigate } from 'react-router-dom';
import routes from './Routes/Routes';
function App() {
	return (
		<Routes>
			{routes.map(val =>
				val.redirectTo ? (
					<Route
						path={val.path}
						element={<Navigate to={val.redirectTo} />}
					/>
				) : (
					<Route path={val.path} element={<val.component />} />
				)
			)}
		</Routes>
	);
}

export default App;
