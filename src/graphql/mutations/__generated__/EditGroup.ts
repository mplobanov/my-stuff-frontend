/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GroupMutationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EditGroup
// ====================================================

export interface EditGroup_editGroup_group {
  __typename: "GroupNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface EditGroup_editGroup {
  __typename: "GroupMutationPayload";
  group: EditGroup_editGroup_group | null;
}

export interface EditGroup {
  editGroup: EditGroup_editGroup | null;
}

export interface EditGroupVariables {
  input: GroupMutationInput;
}
