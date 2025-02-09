import React from 'react';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import styles from './signUp.module.scss';

function SignUpView() {
	const handlePhoneSubmit = (phoneNumber: string) => {
		console.log('Phone number submitted:', phoneNumber);
		// Handle phone verification logic here
	};

	return (
		<div className={styles.container}>
			<PhoneInput onSubmit={handlePhoneSubmit} />
		</div>
	);
}

export default SignUpView;
