import { gql } from '../lib/remote'

export const Cars = gql`
  query Cars {
    cars {
      cost
      crew
      handling
      hull
      id
      maxgear
      name
      slots
      weight
    }
  }
`
