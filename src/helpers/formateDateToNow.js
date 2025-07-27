import { formatDistanceToNow } from "date-fns";

export const formateDateToNow = (data) => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
