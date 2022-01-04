import {QueryHookOptions, useQuery} from "@apollo/client";
import {statusesQuery} from "../graphql/queries/statuses";
import {Statuses} from "../graphql/queries/__generated__/Statuses";

export const useStatuses = (options?: QueryHookOptions) => useQuery<Statuses>(statusesQuery, options);