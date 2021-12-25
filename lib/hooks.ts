import useSWR from "swr";
import { fetcher } from "./fetcher";

// get user
export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  return { user: data, isLoading: !data && !error, isError: error };
};

// get playlist
export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);
  return { playlists: data, isLoading: !data && !error, isError: error };
};
