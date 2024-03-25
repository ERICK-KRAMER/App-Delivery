const endpoint = "http://localhost:4000";

export const getProducts = async() => {
  try {
    const response = await fetch(`${endpoint}/products`)
    .then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

