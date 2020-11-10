import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "d 'de' MMMM 'de' yyyy", { locale: pt})}</time>
}