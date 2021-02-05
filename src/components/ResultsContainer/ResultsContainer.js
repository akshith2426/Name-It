import React from 'react';
import NameCard from '../nameCard/namecard';
import './ResultsContainer.css';
function ResultsContainer({ suggestedNames }) {
	const suggesNameJsx = suggestedNames.map((suggestedName) => {
		return <NameCard key={suggestedName} suggestedName={suggestedName} />;
	});
	return (
		<div className="results-container">
			<p>{suggesNameJsx}</p>
		</div>
	);
}

export default ResultsContainer;
