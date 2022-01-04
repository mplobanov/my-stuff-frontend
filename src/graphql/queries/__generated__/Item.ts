/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Item
// ====================================================

export interface Item_item_status {
  __typename: "StatusNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Item_item_location {
  __typename: "LocationNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Item_item_group {
  __typename: "GroupNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Item_item {
  __typename: "ItemNode";
  name: string;
  brand: string;
  color: string;
  size: string;
  volume: string;
  status: Item_item_status;
  location: Item_item_location;
  group: Item_item_group;
}

export interface Item {
  item: Item_item | null;
}

export interface ItemVariables {
  id: string;
}
