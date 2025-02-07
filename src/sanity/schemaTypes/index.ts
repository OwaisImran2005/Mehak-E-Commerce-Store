import { type SchemaTypeDefinition } from 'sanity'
import { fragrances } from './fragrances'
import { bodysprays } from './bodysprays'
import { attars } from './attars'
import { Men } from './Men'
import { Women } from './Women'
import { Latest } from './latest'
import { Bestsellers } from './bestseller'
import { Discounted } from './discounted'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [fragrances , bodysprays, attars, Men, Women,Latest,Bestsellers,Discounted],
}
