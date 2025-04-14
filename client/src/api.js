
export async function findAllPlaygroundEquipment() {
    const fetchResult = await fetch('/api/playgroundEquipment')    
    if (fetchResult.ok) {
      return await fetchResult.json()
    }
    console.log(fetchResult)
    throw new Error('Fetch failed')
}