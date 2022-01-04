/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Items
// ====================================================

export interface Items_currentUser_stuffGroups_edges_node_items_edges_node_status {
  __typename: "StatusNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Items_currentUser_stuffGroups_edges_node_items_edges_node_location {
  __typename: "LocationNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Items_currentUser_stuffGroups_edges_node_items_edges_node {
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
  status: Items_currentUser_stuffGroups_edges_node_items_edges_node_status;
  location: Items_currentUser_stuffGroups_edges_node_items_edges_node_location;
}

export interface Items_currentUser_stuffGroups_edges_node_items_edges {
  __typename: "ItemNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: Items_currentUser_stuffGroups_edges_node_items_edges_node | null;
}

export interface Items_currentUser_stuffGroups_edges_node_items {
  __typename: "ItemNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (Items_currentUser_stuffGroups_edges_node_items_edges | null)[];
}

export interface Items_currentUser_stuffGroups_edges_node {
  __typename: "GroupNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  items: Items_currentUser_stuffGroups_edges_node_items;
}

export interface Items_currentUser_stuffGroups_edges {
  __typename: "GroupNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: Items_currentUser_stuffGroups_edges_node | null;
}

export interface Items_currentUser_stuffGroups {
  __typename: "GroupNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (Items_currentUser_stuffGroups_edges | null)[];
}

export interface Items_currentUser {
  __typename: "UserNode";
  /**
   * The ID of the object.
   */
  id: string;
  stuffGroups: Items_currentUser_stuffGroups;
}

export interface Items {
  currentUser: Items_currentUser | null;
}
