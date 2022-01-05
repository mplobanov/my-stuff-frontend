/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface GroupMutationInput {
  name: string;
  id?: string | null;
  clientMutationId?: string | null;
}

export interface ItemMutationInput {
  id?: string | null;
  name: string;
  brand: string;
  color: string;
  size: string;
  volume: string;
  status: string;
  location: string;
  group: string;
}

export interface LocationMutationInput {
  name: string;
  id?: string | null;
  clientMutationId?: string | null;
}

export interface StatusMutationInput {
  name: string;
  id?: string | null;
  clientMutationId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
