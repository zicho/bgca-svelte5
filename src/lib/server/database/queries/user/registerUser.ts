import { userTable, type TNewUser } from '$lib/server/database//schema/users';
import {
	failedOperation,
	successfulOperation,
	type TDbOperation
} from '$lib/server/database/TDbOperation';
import { db } from '$lib/server/database/db';

export async function registerUser({
	id,
	username,
	pw_hash
}: {
	id: string;
	username: string;
	pw_hash: string;
}): Promise<TDbOperation<TNewUser>> {
	try {
		const newUser: TNewUser = {
			id,
			username,
			pw_hash
		};

		await db.insert(userTable).values(newUser);

		return successfulOperation({ data: newUser });
	} catch (err) {
		return failedOperation({ message: 'Failed to create new user' });
	}
}
