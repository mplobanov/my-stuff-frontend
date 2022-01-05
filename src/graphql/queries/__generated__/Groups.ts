/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Groups
// ====================================================

export interface Groups_currentUser_stuffGroups_edges_node {
  __typename: "GroupNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Groups_currentUser_stuffGroups_edges {
  __typename: "GroupNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: Groups_currentUser_stuffGroups_edges_node | null;
}

export interface Groups_currentUser_stuffGroups {
  __typename: "GroupNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (Groups_currentUser_stuffGroups_edges | null)[];
}

export interface Groups_currentUser {
  __typename: "UserNode";
  /**
   * The ID of the object.
   */
  id: string;
  stuffGroups: Groups_currentUser_stuffGroups;
}

export interface Groups {
  currentUser: Groups_currentUser | null;
}
