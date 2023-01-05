import { Route, Routes } from 'react-router-dom';

import { NotFound } from 'views/NotFound';
import { Planning } from 'views/Planning';
import { TasksManager } from 'views/TasksManager';
import { TimeManager } from 'views/TimeManager';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Planning />} />
			<Route path="/planning" element={<Planning />} />
			<Route path="/tasks-manager" element={<TasksManager />} />
			<Route path="/time-manager" element={<TimeManager />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
