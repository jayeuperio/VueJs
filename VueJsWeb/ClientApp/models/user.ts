export interface IUser {
    userName: string;
    email?: string;
    roles?: string[];
    displayName?: string;
    id: number;
    verified?: boolean;
    firstName?: string;
    lastName?: string;
}

export const UserRoles = {
    Admin: 'Admin',
    User: 'User'
}