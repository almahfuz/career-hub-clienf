import {
  getStoredCart
} from "../utlis/fakeDB"


export const productsAndCartData = async () => {
  const productsData = await fetch('jobsProfiles.json')
  const jobsProducts = await productsData.json()
  //  console.log(jobsProducts);

  const storeCart = getStoredCart()
  const savedCart = []
  for (const id in storeCart) {
    const foundProduct = jobsProducts.find(jobProduct => jobProduct.id === id)
    if (foundProduct) {
      const quantity = storeCart[id]
      foundProduct.quantity = quantity
      savedCart.push(foundProduct)
    }
  }

  return {
    jobsProducts,
    savedCart
  }
}