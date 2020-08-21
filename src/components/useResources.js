import { useState, useEffect } from 'react';
import axios from 'axios';
const useResources = (resource) => {
	const [resources, setResource] = useState([]);
	useEffect(() => {
		(async (resource) => {
			const baseURL = `https://jsonplaceholder.typicode.com/${resource}`;
			const response = await axios.get(baseURL);
			setResource(response.data);
		})(resource);
	}, [resource]);
	return resources;
};
export default useResources;
