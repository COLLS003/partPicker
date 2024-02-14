// usersService.js

// import bcrypt from 'bcrypt';
import * as usersAPI from './usersAPI';

export async function signup(userData) {

  // Validate user data  
  const errors = validateSignup(userData);
  if (errors.length > 0) {
    throw errors;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // Create user
  const user = await usersAPI.createUser({
    ...userData, 
    password: hashedPassword
  });

  return user;

}

function validateSignup(userData) {
  const errors = [];
  // TODO: Add validation logic
  return errors;
}


export async function login(credentials) {
  
  const user = await usersAPI.getUserByEmail(credentials.email);

  // Validate user exists and compare passwords
  if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
    throw 'Invalid email or password';
  }

  // TODO: Create and return JWT token

}

// usersService.js

// Simulated token generation function
export function getToken() {
  // In a real-world scenario, you would generate a token using a secure method
  // For simplicity, let's just return a hardcoded token
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
}

