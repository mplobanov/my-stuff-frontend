/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemMutationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EditItem
// ====================================================

export interface EditItem_editItem_item_group {
  __typename: "GroupNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface EditItem_editItem_item_location {
  __typename: "LocationNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface EditItem_editItem_item_status {
  __typename: "StatusNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface EditItem_editItem_item {
  __typename: "ItemNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  brand: string;
  color: string;
  size: string;
  volume: string;
  group: EditItem_editItem_item_group;
  location: EditItem_editItem_item_location;
  status: EditItem_editItem_item_status;
}

export interface EditItem_editItem {
  __typename: "ItemMutation";
  item: EditItem_editItem_item | null;
}

export interface EditItem {
  editItem: EditItem_editItem | null;
}

export interface EditItemVariables {
  input: ItemMutationInput;
}
