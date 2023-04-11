import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, IUser, ServerResponse } from "../../models/models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus: true, // IT MAKES A REQUEST AFTER FOCUS TO A PAGE, WHEN YOU COME BACK
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // Or just query: `search/users`

      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),

    // Example with mutation
    createUser: build.mutation<any, void>({
      query: () => ``,
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
