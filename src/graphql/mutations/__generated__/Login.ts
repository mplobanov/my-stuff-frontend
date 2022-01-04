/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_tokenAuth {
  __typename: "ObtainJSONWebToken";
  token: string;
  payload: any;
  refreshExpiresIn: number;
}

export interface Login {
  /**
   * Obtain JSON Web Token mutation
   */
  tokenAuth: Login_tokenAuth | null;
}

export interface LoginVariables {
  login: string;
  password: string;
}
