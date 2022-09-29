import { UserInteractor } from '../Interactor/user.interactor';
import { apiResponse } from '../Interface/APIResponse';

export class UserController {
  userInteractor: UserInteractor;

  constructor() {
    this.userInteractor = new UserInteractor();
  }

  fetch() {
    const users = this.userInteractor.getAllUsers();
    return apiResponse(users);
  }

  fetchById(id: string) {
    const user = this.userInteractor.getUser(Number(id));
    if (user === null) {
      return apiResponse(null, 404, `User with id=${id} not found.`);
    }
    return apiResponse(user);
  }
};