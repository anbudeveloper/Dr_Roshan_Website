import { Link } from 'react-router-dom'
import Icon from '../../../shared/Icons'
import posts from '../data/posts'

export default function BlogGrid() {
  return (
    <div>
      <h2 className="bl-section-title">Latest Blogs</h2>
      <div className="bl-grid">
        {posts.map((post) => (
          <article className="bl-card" key={post.slug}>
            <img className="bl-card__img" src={post.img} alt={post.title} />
            <div className="bl-card__body">
              <span className="bl-card__cat">{post.category}</span>
              <h3 className="bl-card__title">{post.title}</h3>
              <p className="bl-card__desc">{post.desc}</p>
              <div className="bl-card__meta">
                <span className="bl-card__meta-item">
                  <Icon name="calendar" size={13} /> {post.date}
                </span>
                <span className="bl-card__meta-item">
                  <Icon name="clock" size={13} /> {post.readTime}
                </span>
              </div>
              <Link className="bl-card__link" to={`/blog/${post.slug}`}>
                Read More <Icon name="arrow" size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
