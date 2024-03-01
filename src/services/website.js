import instance from "./api.js";

export async function websiteGetAll() {
  const response = await instance.get(`/website/`, {
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

// export async function websiteGetOne(id) {
//   const response = await instance.get("website/" + id);
//   return response.data;
// }


