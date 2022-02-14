import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/styles/components/Modal.css';

export const Modal = ({ children }) =>
{
	return ReactDOM.createPortal(
	<section className="ModalBackground">
		{children}
	</section>,
	document.getElementById('modal')
	);
}
