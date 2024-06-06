import { format, parseISO } from 'date-fns'

export function generateSlug(titulo: string) {
  let slug = titulo.toLowerCase()
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  slug = slug.replace(/[^a-z0-9\s-]/g, '')
  slug = slug.replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, '')

  return slug
}

export function formatDate(isoString: string) {
  const date = parseISO(isoString)

  return format(date, 'MMMM dd-yyyy')
}
