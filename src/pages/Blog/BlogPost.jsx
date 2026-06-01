import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../../shared/SEO'
import Icon from '../../shared/Icons'
import Sidebar from './sections/Sidebar'
import posts from './data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <SEO
        title={post.title}
        description={post.desc}
        keywords={`${post.category.toLowerCase()} Trichy, ${post.title}, dental care Trichy, Dr Roshan dental blog`}
        path={`/blog/${post.slug}`}
      />
      {/* Post Header */}
      <section className="bl-post-header">
        <div className="container">
          <nav className="ab-breadcrumb" aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevron" size={13} />
            <Link to="/blog">Blog</Link>
            <Icon name="chevron" size={13} />
            <span>{post.category}</span>
          </nav>
          <span className="bl-card__cat" style={{ fontSize: '12px', marginTop: '14px', display: 'block' }}>
            {post.category}
          </span>
          <h1 className="bl-post-title">{post.title}</h1>
          <div className="bl-post-meta">
            <span className="bl-card__meta-item"><Icon name="calendar" size={14} /> {post.date}</span>
            <span className="bl-card__meta-item"><Icon name="clock" size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Post Body */}
      <section className="bl-layout">
        <div className="container bl-layout__inner">

          <article className="bl-post-article">
            <img className="bl-post-img" src={post.img} alt={post.title} />

            <div className="bl-post-content">
              {post.content.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>

            <Link className="outline-btn bl-back-btn" to="/blog">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5m6-6-6 6 6 6" />
              </svg>
              Back to Blog
            </Link>
          </article>

          <Sidebar />
        </div>
      </section>
    </>
  )
}
