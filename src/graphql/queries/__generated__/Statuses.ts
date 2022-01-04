/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Statuses
// ====================================================

export interface Statuses_currentUser_statuses_edges_node {
  __typename: "StatusNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Statuses_currentUser_statuses_edges {
  __typename: "StatusNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: Statuses_currentUser_statuses_edges_node | null;
}

export interface Statuses_currentUser_statuses {
  __typename: "StatusNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (Statuses_currentUser_statuses_edges | null)[];
}

export interface Statuses_currentUser {
  __typename: "UserNode";
  /**
   * The ID of the object.
   */
  id: string;
  statuses: Statuses_currentUser_statuses;
}

export interface Statuses {
  currentUser: Statuses_currentUser | null;
}
