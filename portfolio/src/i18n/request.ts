import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Ensure that the incoming locale is valid
	if (!locale || !routing.locales.includes(locale as 'vi')) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../../public/dictionaries/${locale}.json`)).default
	};
});