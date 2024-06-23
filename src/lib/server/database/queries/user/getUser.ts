import { db } from '$lib/server/database/db';
import { userTable, type TUser } from '$lib/server/database/schema/users';
import {
	failedOperation,
	successfulOperation,
	type TDbOperation
} from '$lib/server/database/TDbOperation';
import { eq } from 'drizzle-orm';

export async function getUser({ username }: { username: string }): Promise<TDbOperation<TUser>> {
	try {
		const user = await db.query.userTable.findFirst({
			where: eq(userTable.username, username)
		});

		if (!user) {
			return failedOperation({ message: `Could not find user '${username}'` });
		}

		return successfulOperation({ data: user });
	} catch (err) {
		return failedOperation({ message: `Failed to retrieve user ${username}` });
	}
}
