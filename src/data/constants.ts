export const NAVIGATION_ITEMS = {
	HOME: {
		title: 'Home',
		path: '/home',
	},
	PROFILE: {
		title: 'Profile',
		path: '/profile',
	},
	COFFEE: {
		title: 'Coffee Shop',
		path: '/coffee',
	},
};

export const COFFEE_MENU = [
	{
		name: 'Espresso',
		price: 2.99,
		description: 'Strong and pure coffee shot',
	},
	{
		name: 'Cappuccino',
		price: 3.99,
		description: 'Espresso with steamed milk and foam',
	},
	{
		name: 'Latte',
		price: 4.49,
		description: 'Espresso with lots of steamed milk and light foam',
	},
];

export type CoffeeTabType = 'invitations' | 'sent' | 'saved' | 'passed';

export interface CoffeeInvite {
	id: string;
	name: string;
	location: string;
	lookingFor: string;
	availability: string;
	skills: string;
	avatar: string;
	message?: string;
	hasSentCoffee?: boolean;
}

export const COFFEE_INVITES: Record<CoffeeTabType, CoffeeInvite[]> = {
	invitations: [
		{
			id: '1',
			name: 'Mohammed',
			location: 'Based in Bangalore',
			lookingFor: 'Looking for cofounder to join existing idea',
			availability: 'Ready to go fulltime with the right cofounder',
			skills: 'Product',
			avatar: '',
		},
		// Add more invitation examples
	],
	saved: [
		{
			id: '2',
			name: 'Cody',
			location: 'Based in New York',
			lookingFor: 'Looking for cofounder to join existing idea',
			availability: 'Ready to go fulltime in the next year',
			skills: 'Product, Sales/Marketing',
			avatar: '',
		},
		{
			id: '3',
			name: 'Uzzi',
			location: 'Based in Brooklyn',
			lookingFor: 'Exploring new ideas',
			availability: 'Ready to go fulltime with the right cofounder',
			skills: 'Engineering, Product',
			avatar: '',
		},
	],
	sent: [],
	passed: [],
};
