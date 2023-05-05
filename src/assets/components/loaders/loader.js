export const jobAndCartData = async () => {
    const jobData = await fetch('jobsProfiles.json')
    const jobs = await jobData.json()
  
    // const savedCart = getStoredCart()
    const savedCart = [];
    const initialCart = []
    for (const id in savedCart) {
      const foundJobs = jobs.find(job => job.id === id)
      if (foundJobs) {
         const quantity = savedCart[id]
        foundJobs.quantity = quantity
        initialCart.push(foundJobs)
      }
    }
  
    return { jobs, initialCart }
  }