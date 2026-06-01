import { Link } from 'react-router-dom'
import { FaTooth, FaSmile, FaChild, FaStar, FaSearch } from 'react-icons/fa'
import Icon from '../../../shared/Icons'
import posts from '../data/posts'

const categories = [
  { icon: <FaTooth size={14} />, name: 'Dental Care Tips',   count: 12 },
  { icon: <FaTooth size={14} />, name: 'Implants',           count: 8 },
  { icon: <FaTooth size={14} />, name: 'Orthodontics',       count: 7 },
  { icon: <FaTooth size={14} />, name: 'Root Canal',         count: 6 },
  { icon: <FaSmile size={14} />, name: 'Smile Makeover',     count: 6 },
  { icon: <FaChild size={14} />, name: 'Kids Dentistry',     count: 5 },
  { icon: <FaStar  size={14} />, name: 'Cosmetic Dentistry', count: 4 },
  { icon: <FaTooth size={14} />, name: 'General Dentistry',  count: 3 },
]

const popularPosts = posts.slice(0, 4)

export default function Sidebar() {
  return (
    <aside className="bl-sidebar">

      {/* Search */}
      <div className="bl-search">
        <input type="text" placeholder="Search blogs..." />
        <button type="button" aria-label="Search">
          <FaSearch size={14} />
        </button>
      </div>

      {/* Categories */}
      <div className="bl-sb-card">
        <h3 className="bl-sb-title">Categories</h3>
        <ul className="bl-cat-list">
          {categories.map((cat) => (
            <li className="bl-cat-item" key={cat.name}>
              <span className="bl-cat-item__icon">{cat.icon}</span>
              {cat.name}
              <span className="bl-cat-item__count">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bl-sb-card">
        <h3 className="bl-sb-title">Popular Posts</h3>
        <ul className="bl-popular-list">
          {popularPosts.map((post) => (
            <li className="bl-popular-item" key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                <img src={post.img} alt={post.title} />
              </Link>
              <div>
                <Link to={`/blog/${post.slug}`}><h4>{post.title}</h4></Link>
                <span>{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Book Appointment CTA */}
      <div className="bl-book-cta">
        <div className="bl-book-cta__icon">
          <Icon name="calendar" size={26} />
        </div>
        <h3>Book Your Appointment Today!</h3>
        <p>Get expert dental care from our experienced specialists.</p>
        <a className="outline-btn" href="#appointment">
          Book Appointment <Icon name="arrow" size={15} />
        </a>
      </div>

    </aside>
  )
}
