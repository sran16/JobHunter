import instance from "./api.js";

class Annonce {
  async create(Title, Url, Duration, Salaire, Commentaire) {
    // console.log(Title, Url, Duration, Salaire, Commentaire);
    const response = await instance.post(`/Annonce/`, {
      // Utiliser des variables pour les valeurs
      Title: Title,
      Url: Url,
      Duration: Duration,
      Salaire: Salaire,
      Commentaire: Commentaire,
    });
    return response.data;
  }
}
const annonceInstance = new Annonce();
export default annonceInstance;

export async function AnnonceGetAll(limit = 100) {
  const response = await instance.get(`/Annonce/`, {
    params: {
      limit: limit,
      offset: "0",

      where: "",
    },
  });
  console.log(response);
  console.log(response.data);
  console.table(response.data.list);
  return response.data;
}
