{
  "name": "functions",
  "description": "Cloud Functions for Firebase",
  "scripts": {
    "serve": "firebase serve --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "dependencies": {
    "busboy": "^0.3.0",
    "cors": "^2.8.5",
    "express": "^4.16.4",
    "firebase": "^5.9.0",
    "firebase-admin": "~7.0.0",
    "firebase-functions": "^2.2.0"
  },
  "private": true
}
