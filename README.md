# Mocks for auth page

This project serves as a mock data repository for a frontend project with [authentication](https://github.com/Relativelie/auth).

## Requests

### Registration:

- Method: POST
- Path: /api/register
- Request Body: {email: string, password: string}
- Response:
  200 OK status. Body:
  access_token: string,
  refresh_token: string,
  expires_in: number,
  refresh_expires_in: number,

  all another - error status

### Login:

- Method: POST
- Path: /api/login
- Request Body: {email: string, password: string}
- Response:
  200 OK status.
  Body:
  {
  access_token: string,
  refresh_token: string,
  expires_in: number,
  refresh_expires_in: number,
  }

  all another - error status

### Refresh

- Method: GET
- Path: /api/refresh
- Response:
  200 OK status.
  Body:
  {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  }

  all another - error status

### Profile

- Method: GET
- Path: /api/profile
- Response:
  200 OK status.
  Body:
  {
  name: string;
  job: string;
  email: string;
  location: string;
  interests: string[];
  bio: string;
  avatar: string;
  }

  401, error: Invalid token

## Installation
1. Clone the repository
https://github.com/Relativelie/auth_back.git

2. Navigate to the project directory
3. Install packages with 'npm install'
4. Start the development server ''node auth_mock.js'
