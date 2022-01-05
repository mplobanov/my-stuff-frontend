/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StatusMutationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EditStatus
// ====================================================

export interface EditStatus_editStatus_status {
  __typename: "StatusNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface EditStatus_editStatus {
  __typename: "StatusMutationPayload";
  status: EditStatus_editStatus_status | null;
}

export interface EditStatus {
  editStatus: EditStatus_editStatus | null;
}

export interface EditStatusVariables {
  input: StatusMutationInput;
}
