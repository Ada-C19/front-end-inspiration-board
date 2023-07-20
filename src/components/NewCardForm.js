import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = ({ addCard }) => {
	const defaultNewCard = { message: '' };
	const [formFields, setFormFields] = useState(defaultNewCard);
	const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

	const onMessageChange = (event) => {
		if (event.target.value.length === 40) {
			window.alert('Message should not exceed 40 characters.');
		}
		setFormFields({ message: event.target.value });
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (formFields.message.length === 0) {
			window.alert('Message should not be blank.');
			return;
		}
		addCard(formFields);
		setFormFields(defaultNewCard);
		setShowModal(false); // Close the modal after submitting the form
	};

	// Function to handle opening the modal
	const openModal = () => {
		setShowModal(true);
	};

	// Function to handle closing the modal
	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			{showModal ? (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={closeModal}>
							&times;
						</span>
						<form className="new-card-form" onSubmit={onFormSubmit}>
							<div>
								<h3>ADD A CARD TO CURRENT BOARD</h3>
								<label htmlFor="message">Message:</label>
								<input
									id="message"
									onChange={onMessageChange}
									value={formFields.message}
									maxLength={40}
								/>
							</div>
							<input type="submit" value="Add Card" />
						</form>
					</div>
				</div>
			) : (
				<button className="plus-button" onClick={openModal}>
					+
				</button>
			)}
		</div>
	);
};

NewCardForm.propTypes = {
	addCard: PropTypes.func.isRequired,
};

export default NewCardForm;
