/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register_currentUser {
  __typename: "UserNode";
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   */
  username: string;
}

export interface Register_register {
  __typename: "UserCreateMutation";
  currentUser: Register_register_currentUser | null;
}

export interface Register {
  register: Register_register | null;
}

export interface RegisterVariables {
  firstName: string;
  login: string;
  password: string;
}
