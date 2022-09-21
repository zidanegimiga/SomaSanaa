import { masterClassesData } from "../../../../data";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(masterClassesData);
  }
}