import React from 'react';
import useResources from './useResources';

const ResourceList = () => {
	const users = useResources('users');
	return (
		<div>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</div>
	);
};
export default ResourceList;
