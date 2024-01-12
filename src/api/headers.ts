// import { getAuth } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';

// import { AuthUserType } from 'src/auth/types';
// import { FIREBASE_API } from 'src/config-global';

// // Call getHeaders each time to make sure we are always fetching a fresh tokenId
// export const getHeadersForHook = async (user: AuthUserType, contentType: boolean = true) => {
//   const token = await user?.getIdToken();

//   if (!token) return Promise.reject(new Error('Invalid user ID token.'));

//   const headers: Record<string, string> = {
//     Authorization: `Bearer ${token}`,
//   };

//   if (contentType) {
//     headers['Content-Type'] = 'application/json';
//   }

//   return headers;
// };

// export const getHeadersForStatic = async (contentType: boolean = true) => {
//   const firebaseApp = initializeApp(FIREBASE_API);
//   const AUTH = getAuth(firebaseApp);

//   const user = AUTH.currentUser;

//   const token = await user?.getIdToken();

//   if (!token) return Promise.reject(new Error('Invalid user ID token.'));

//   const headers: Record<string, string> = {
//     Authorization: `Bearer ${token}`,
//   };

//   if (contentType) {
//     headers['Content-Type'] = 'application/json';
//   }

//   return headers;
// };
