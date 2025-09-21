FullStack -
Backend (Express + Postgres)

[ ] Database Setup

Create users table with fields: id, name, phone, email (unique), password_hash, created_at.


[ ] Environment Variables

Add DB connection details in .env.

Add JWT_SECRET and JWT_EXPIRES_IN.


[ ] User Registration (Sign Up API)

Validate inputs: name, phone, email, password (all required).

Check if email already exists in DB.

Hash password securely.

Save new user to DB.

Generate JWT token and return { user, token }.


[ ] User Login (Sign In API)

Validate inputs: email, password.

Find user by email.

Compare entered password with stored hash.

If valid → return { user, token }.

If invalid → return error.


[ ] JWT Middleware

Extract token from Authorization: Bearer <token> header.

Verify JWT → attach user info to request.

Reject requests with invalid/missing token.


[ ] Profile API (Optional)

GET /api/users/me → return current logged-in user’s data.




---

✅ Frontend (React)

[ ] Landing Page

Show two buttons: Sign Up and Sign In.


[ ] Sign Up Page

Form with 4 fields: Name, Phone, Email, Password.

Validate all fields before submit.

Call backend /signup API.

On success → save token + user in localStorage → redirect to Home.


[ ] Sign In Page

Form with Email, Password.

Validate both fields.

Call backend /signin API.

On success → save token + user in localStorage → redirect to Home.


[ ] Home Page

Fetch user profile (from localStorage or /me API).

Display Name and Phone.

Show Sign Out button → clears token + user from localStorage → redirect to Sign In.


[ ] Error Handling

Show messages for invalid credentials, duplicate email, missing fields, etc.


[ ] Token Handling

Store JWT token in localStorage after login/signup.

Add token to API requests in Authorization header when required.

Clear token on logout.




---

✅ Testing (Postman + Browser)

[ ] Test Sign Up with new email → success.

[ ] Test Sign Up with existing email → error.

[ ] Test Sign In with correct credentials → success.

[ ] Test Sign In with wrong credentials → error.

[ ] Test Protected routes with token → success.

[ ] Test Protected routes without/invalid token → unauthorized error.

[ ] Confirm Home page shows Name + Phone after login.



---

✅ Deliverables

[ ] Working backend server (Express + Postgres + JWT).

[ ] Working frontend app (React with Sign Up, Sign In, Home screens).

[ ] .env.example file in repo.

[ ] Public GitHub repo with backend + frontend code.

[ ] Screenshots:

Signup success

Signin success

Home screen with Name + Phone
