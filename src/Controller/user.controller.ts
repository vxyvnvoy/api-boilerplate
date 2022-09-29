import { User } from '../Model/user.model'

export class UserController {
  private users: Array<User> = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  getAllUsers(): Array<User> {
    return this.users;
  }

  getUser(id: number): User | null {
    return this.users.find((user) => user.id === id) || null;
  }
};