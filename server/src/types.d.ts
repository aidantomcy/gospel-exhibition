type Error = {
  name: string;
  message: string;
  stack?: string;
};

type ParableSchema = {
  gospel: string;
  title: string;
  body: string;
  explanation: string;
  verses: string;
};

type Gospels = "matthew" | "mark" | "luke" | "john";
