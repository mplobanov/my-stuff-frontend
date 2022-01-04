/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Locations
// ====================================================

export interface Locations_currentUser_locations_edges_node {
  __typename: "LocationNode";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Locations_currentUser_locations_edges {
  __typename: "LocationNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: Locations_currentUser_locations_edges_node | null;
}

export interface Locations_currentUser_locations {
  __typename: "LocationNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (Locations_currentUser_locations_edges | null)[];
}

export interface Locations_currentUser {
  __typename: "UserNode";
  /**
   * The ID of the object.
   */
  id: string;
  locations: Locations_currentUser_locations;
}

export interface Locations {
  currentUser: Locations_currentUser | null;
}
