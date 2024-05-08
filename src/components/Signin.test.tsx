
import * as api from '../api/users'

describe('Signin', () => {
  const user = {
    name: 'test',
    email: 'test@test.com',
    password: 'password',
    create_at: new Date().toISOString(),
  }
  // it('should call createUser with the correct arguments', async () => {
  //   const createUserSpy = jest.spyOn(api, 'createUser').mockResolvedValue(user)
  // })
})