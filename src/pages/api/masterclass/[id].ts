import { masterClassesData } from "../../../../data";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { id } = request.query;

    const masterclass = masterClassesData.find((masterclass) => masterclass?.id.toString() === id);

    if (!masterclass) {
      return response.status(400).json("Masterclass not found");
    }

    return response.status(200).json(masterclass);
  }
}