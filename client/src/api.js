
export async function findAllPlaygroundEquipment(north, east, south, west) {
    const fetchResult = await fetch(`/api/playgroundEquipment?north=${north}&east=${east}&south=${south}&west=${west}`)    
    if (fetchResult.ok) {
      return await fetchResult.json()
    }
    console.log(fetchResult)
    throw new Error('Fetch failed')
}