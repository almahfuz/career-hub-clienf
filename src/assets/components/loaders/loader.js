import {
  getStoredCart
} from "../utlis/fakeDB"


export const productsAndCartData = async () => {
  const productsData = await fetch('jobsProfiles.json')
  const jobsProducts = await productsData.json()
  //  console.log(jobsProducts);

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = jobsProducts.find(jobProduct => jobProduct.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return {
    jobsProducts,
    initialCart
  }
}