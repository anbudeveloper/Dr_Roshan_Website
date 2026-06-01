import SEO      from '../../shared/SEO'
import Hero     from './sections/Hero'
import BlogGrid from './sections/BlogGrid'
import Sidebar  from './sections/Sidebar'

export default function Blog() {
  return (
    <>
      <SEO
        title="Dental Health Blog | Tips, Guides & Updates"
        description="Read expert dental care tips, implant guides, orthodontic advice, kids dentistry tips and smile makeover stories from Dr.Roshan's Dental Care in Trichy."
        keywords="dental health tips Trichy, dental implant guide, root canal treatment explained, teeth whitening tips, kids dental care, smile makeover blog, orthodontics Trichy"
        path="/blog"
      />
      <Hero />
      <section className="bl-layout">
        <div className="container bl-layout__inner">
          <BlogGrid />
          <Sidebar />
        </div>
      </section>
    </>
  )
}
