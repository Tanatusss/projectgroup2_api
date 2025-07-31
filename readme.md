# Prompt jobs api

---

## Service list

### Auth Routes

| Path                      | Method | Description                           | Authentication | Params | Query | Body                                                                | Response                |
| :------------------------ | :----- | :------------------------------------ | :------------- | :----- | :---- | :------------------------------------------------------------------ | :---------------------- |
| /api/auth/register   | POST   | Create new user                       | -              | -      | -     | {email: "string", password: "string", confirmPassword: "string"}    | {message:"SUCCESS"}     |
| /api/auth/login      | POST   | Login for user                        | -              | -      | -     | {email:"string", password:"string"}                                 | {accessToken: "string"} |
| /api/auth/forgot-password | POST   | Send reset password url to user email | -              | -      | -     | {email: "string"}                                                   | {}                      |
| /api/auth/reset-password  | POST   | Change user password                  | -              | -      | -     | {token: "string", newPassword: "string", comfirmPassword: "string"} | {}                      |
| /api/auth/refresh-token   | GET    | Get refresh token                     | cookies        | -      | -     | -                                                                   | -                       |

##### test user-register

```
curl -X POST \
-H 'Content-Type:application/json' \
-d '{"email": "abcd@abc.com", "password": "123456","confirmPassword": "123456" }' \
http://localhost:12345/api/auth/user-register

```

##### test user-login

```
curl -X POST \
-H 'Content-Type:application/json' \
-d '{"email": "abcd@abc.com", "password": "123456"}' \
http://localhost:12345/api/auth/user-login
```

---
