import React from 'react';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import styles from './login.module.scss';

function LoginView() {
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

export default LoginView;

// and make sure all the routes have a middleware where those can be viewed only if the user is logged in but have the otp verification
