type Gospels = "matthew" | "mark" | "luke" | "john";

type ApiResponse = {
  _id: string;
  gospel: Gospels;
  title: string;
  body: string;
  explanation: string;
  verses: string;
  __v: number;
};
