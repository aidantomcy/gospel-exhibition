type Data = {
  title: string;
  body: string;
  explanation: string;
};

type Error = {
  name: string;
  message: string;
  stack?: string;
};

type Gospels = "matthew" | "mark" | "luke" | "john";
