








type RequiredUser = Required<Pick<IUser, "username" | "password">>;
export default interface IUserService {
    users: IUser[];
    usersAray: IUser[];

    getUsers: () => void;
    getUserById: (id: number) => void;
    getUserByName: (name: string) => void;
    postUser: (user: IUser, createUser: Required<RequiredUser>) => IUser;
    putUser: (user: IUser, updateUser: Partial<IUser>) => IUser;
    deleteUserById: (id: number) => void;
}
