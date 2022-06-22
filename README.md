Auth uOttawa
=
This is an unified identity authentication interface called AuthApp for all of OutStem's applications. All of OutStem's apps will redirect the user to AuthApp when authentication is required. <a href="https://challenge-two-flax.vercel.app/">Check my project here</a>

## Testing
To test authentication functionalities, you can use the following usernames:
- mfa@outstem.io - requires MFA challenge
- user@outstem.io - no MFA challenge
- Every other username will result in a 400.

All test users have the same password - `testtest`

The valid MFA code for mfa@outstem.io is `123456`

When the user completes the sign in, my app shall redirect the user to the following link:

`https://interview.outstem.io/oauth?identity=SOME_IDENTITY_STRING`

## The Challenge
Recently, the business team proposed a unified identity authentication interface (let's call it AuthApp for now) for all of OutStem's applications. All of OutStem's apps will redirect the user to AuthApp when authentication is required. Original Links for requirements: <a href="https://github.com/AES-Outreach/Full-Time-Interview-Summer-2022">2022 uOttawa Summer Front-end developer challenge</a>.

I have implement 6 pages:
- Sign in options page
- Sign in with email and password page
- MFA code page
- Reset Password page
- Confirmation page
- 404 Page

## Features
- Use <a href="https://github.com/axios/axios">Axios<a/> to complete the authentication POST request
- Page slide animation by using <a href="https://www.framer.com/motion/">Framer motion</a>
- Responsive for all screen size.
- Implement a password reset UX flow using <a href="https://www.figma.com/file/x76a9fiNXeYeiO0vgvjHsA/User-reset-Password?node-id=1%3A319">Figma</a>
- Create account page which collects needed information
- Deploy APP on a third-party platform. Links: https://challenge-two-flax.vercel.app/
- use React Hooks - useState, useContext, useNavigate, useEffect
- use Third Party UI components(React Bootstrap) to implement quick development
- ... More

## Reset Password UX flow
<img src="https://github.com/Dwightu/uOttawa-Challenge/blob/master/UX%20flow.png" width="1000px">
  
## Demo
<img src="https://github.com/Dwightu/uOttawa-Challenge/blob/master/demo1.png" width="500px">
