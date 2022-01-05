/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocationMutationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EditLocation
// ====================================================

export interface EditLocation_editLocation_location {
  __typename: "LocationNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface EditLocation_editLocation {
  __typename: "LocationMutationPayload";
  location: EditLocation_editLocation_location | null;
}

export interface EditLocation {
  editLocation: EditLocation_editLocation | null;
}

export interface EditLocationVariables {
  input: LocationMutationInput;
}
