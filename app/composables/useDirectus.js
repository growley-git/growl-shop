import { Directus } from '@directus/sdk'

export default function useDirectus () {
  const directus = new Directus('http://localhost:8055')
  return {
    directus: directus,
    user: async () => {
      return await directus.users.me.read()
    }
  }
}
