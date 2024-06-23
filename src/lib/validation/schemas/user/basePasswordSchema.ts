import { MaxCharactersF, MinCharactersF, PwNoSpaces } from '$lib/data/strings/ValidationMessages';
import formatString from '$lib/utils/formatString';
import validationRules from '$lib/validation/config/ValidationRules';
import { z } from 'zod';

export const basePasswordSchema = z
	.string()
	.regex(/^[^\s]*$/, { message: PwNoSpaces })
	.min(validationRules.minPasswordLength, {
		message: formatString(MinCharactersF, validationRules.minPasswordLength)
	})
	.max(validationRules.maxPasswordLength, {
		message: formatString(MaxCharactersF, validationRules.maxPasswordLength)
	})
	.trim();
