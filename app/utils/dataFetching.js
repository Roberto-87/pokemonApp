'use server'
import { URLPOKEAPI } from './const'
import queryGenerator from './queries'

export const dataFetch = async (limit, idMax, from) => {
  try {
    return await fetch(URLPOKEAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application-json' },
      body: JSON.stringify({
        query: queryGenerator(limit, idMax, from)
      })
    }
    ).then(res => res.json()).then(res => ((res.data)))
  } catch (error) {
    throw new Error(`Error fetching the data ${error}`)
  }
}
