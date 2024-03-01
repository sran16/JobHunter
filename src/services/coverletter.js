import instance from "./api.js";

class Coverletter {
  async create(Name, Email, Url, Contenu) {
    const response = await instance.post(`/Coverletter/`, {
      // Utiliser des variables pour les valeurs
      Name: Name,
      Email: Email,
      Url: Url,
      Contenu: Contenu,
    });
    return response.data;
  }
}
const coverletterInstance = new Coverletter();
export default coverletterInstance;

export async function CoverletterGetAll() {
  const response = await instance.get(`/Coverletter/`, {
    params: {
      offset: "0",
      limit: "100",
      where: "",
    },
  });
  console.log(response);
  console.log(response.data);
  console.table(response.data.list);
  return response.data;
}
