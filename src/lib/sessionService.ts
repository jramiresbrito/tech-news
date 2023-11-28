import http from './httpService';

const loginEndpoint = '/users/sign_in';

export function login(email: string, password: string) {
  return http.post(loginEndpoint, { email, password })
    .then(response => {
      return response;
    })
    .catch(error => {
      return Promise.reject(error);
    });
}

const logoutEndpoint = '/users/sign_out';

export function logout() {
  return http.delete(logoutEndpoint)
    .then(response => {
      return response;
    })
    .catch(error => {
      return Promise.reject(error);
    });
}

