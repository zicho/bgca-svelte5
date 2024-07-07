import type { User } from 'lucia';
import { getContext, setContext } from 'svelte';

const USER_CTX_KEY = 'USER_CTX_KEY';

export function setUserState(u?: User) {
	if (!u) return;

	const userState = $state(u);
	setContext(USER_CTX_KEY, userState);
	return userState;
}

export function getUserState() {
	return getContext<User>(USER_CTX_KEY);
}
