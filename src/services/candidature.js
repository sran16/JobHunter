import instance from "./api.js";

class Candidature {
  async create(Entreprise, Url, Description, Suivi, Date) {
    const response = await instance.post(`/Candidature/`, {
      // Utiliser des variables pour les valeurs
      Entreprise: Entreprise,
      Url: Url,
      Description: Description,
      Suivi: Suivi,
      Date: Date,
    });
    return response.data;
  }
}
const candidatureInstance = new Candidature();
export default candidatureInstance;
