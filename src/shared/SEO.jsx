import { Helmet } from 'react-helmet-async'

const BASE = 'Dr.Roshan\'s Dental Care'
const SITE = 'https://drroshansdentalcare.com'

export default function SEO({ title, description, keywords, path = '/' }) {
  const fullTitle = title ? `${title} | ${BASE}` : `${BASE} | Best Dental Clinic in Trichy Since 1994`
  const url = `${SITE}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
