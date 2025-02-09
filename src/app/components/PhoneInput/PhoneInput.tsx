import React, { useState } from 'react';
import styles from './PhoneInput.module.scss';

const COUNTRY_CODES = [
	{ code: '+1', country: 'United States', flag: '🇺🇸' },
	{ code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
	{ code: '+91', country: 'India', flag: '🇮🇳' },
	{ code: '+61', country: 'Australia', flag: '🇦🇺' },
	{ code: '+86', country: 'China', flag: '🇨🇳' },
];

interface PhoneInputProps {
	onSubmit: (phoneNumber: string) => void;
}

function PhoneInput({ onSubmit }: PhoneInputProps) {
	const [selectedCode, setSelectedCode] = useState(COUNTRY_CODES[0]);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleSubmit = () => {
		if (phoneNumber) {
			onSubmit(`${selectedCode.code}${phoneNumber}`);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>What&apos;s your phone number?</h1>

			<div className={styles.inputContainer}>
				<div
					className={styles.countrySelector}
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				>
					<span>{selectedCode.flag}</span>
					<span>{selectedCode.code}</span>
					<span className={styles.arrow}>▼</span>
				</div>

				{isDropdownOpen && (
					<div className={styles.dropdown}>
						{COUNTRY_CODES.map((country) => (
							<div
								key={country.code}
								className={styles.dropdownItem}
								onClick={() => {
									setSelectedCode(country);
									setIsDropdownOpen(false);
								}}
							>
								<span>{country.flag}</span>
								<span>{country.country}</span>
								<span>{country.code}</span>
							</div>
						))}
					</div>
				)}

				<input
					type="tel"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					placeholder="Phone number"
					className={styles.phoneInput}
				/>
			</div>

			<p className={styles.disclaimer}>
				We will send you a text with a verification code. Message and data rates
				may apply.
			</p>

			<button
				className={styles.continueButton}
				onClick={handleSubmit}
				disabled={!phoneNumber}
			>
				Continue
			</button>
		</div>
	);
}

export default PhoneInput;
