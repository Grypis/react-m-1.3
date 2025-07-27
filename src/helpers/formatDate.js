import { format } from "date-fns";

export const formatDate = (data) => {
  return format(new Date(data), "Pp");
};
