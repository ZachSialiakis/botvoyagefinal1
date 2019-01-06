import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.collection(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...