import axios from "axios";

export const getBooks = (): any => {
  axios
    .get(
      "https://xa1dwnnixh.execute-api.us-east-2.amazonaws.com/production/books"
    )
    .then((res) => res.data.body)
    .catch((e) => console.error(e));
};
