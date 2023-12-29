type Gospels = "matthew" | "mark" | "luke" | "john";

type Parable = {
  id: string;
  gospel: Gospels;
  title: string;
  body: string;
  explanation: string;
  verses: string;
};
