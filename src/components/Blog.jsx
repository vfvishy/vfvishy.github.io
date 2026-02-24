import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import '../styles/Blog.css'

function Blog() {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [postContent, setPostContent] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [contentLoading, setContentLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('preprints')

  const preprints = [
    {
      id: 1,
      title: "A Multiphysics modelling approach of stripping Ethanol from Ethanol-Water mixture using hot microbubbles",
      authors: "Author: Vishal Murali",
      link: "https://engrxiv.org/preprint/view/4139",
      tags: ["Multiphysics", "Ethanol", "Microbubbles"],
      isLocal: false
    },
    {
      id: 2,
      title: "Microbubble Condensation: Single-Bubble Dynamics",
      authors: "Author: Vishal Murali",
      description: "Why single-bubble models matter in condensation-driven process intensification.",
      tags: ["Condensation", "Fluid Dynamics", "Research"],
      isLocal: false
    },
    {
      id: 3,
      title: "A Theoretical Framework for Staged Microbubble Condensers",
      authors: "Author: Vishal Murali • 2026",
      description: "Local preprint available for download.",
      link: "papers/microbubble_preprint.pdf",
      tags: ["Microbubbles", "Condensation", "Theory"],
      isLocal: true
    }
  ]

  useEffect(() => {
    // Fetch posts metadata
    fetch('blog/posts/posts.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading posts:', error)
        setLoading(false)
      })
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return <div className="blog-container"><p>Loading blog posts...</p></div>
  }

  const filteredPreprints = preprints.filter(preprint =>
    preprint.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="blog-container">
      <h1>Blog & Preprints</h1>
      
      <div className="tab-buttons">
        <button 
          className={`tab-button ${activeTab === 'preprints' ? 'active' : ''}`}
          onClick={() => { setActiveTab('preprints'); setSelectedPost(null); }}
        >
          📄 Preprints
        </button>
        <button 
          className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => { setActiveTab('posts'); setSelectedPost(null); }}
        >
          📝 Posts
        </button>
      </div>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {activeTab === 'preprints' ? (
        <div className="preprints-section">
          {filteredPreprints.length > 0 ? (
            filteredPreprints.map((preprint) => (
              <article key={preprint.id} className="preprint-card">
                <h3>{preprint.title}</h3>
                <p className="authors">{preprint.authors}</p>
                {preprint.description && <p className="description">{preprint.description}</p>}
                <div className="tags">
                  {preprint.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {preprint.isLocal ? (
                  <a 
                    href={preprint.link} 
                    download
                    className="download-link"
                    title="Download preprint PDF"
                  >
                    📥 Download PDF
                  </a>
                ) : (
                  <a 
                    href={preprint.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="download-link"
                    title="Open preprint in new tab"
                  >
                    📖 View Preprint
                  </a>
                )}
              </article>
            ))
          ) : (
            <p className="no-results">No preprints found</p>
          )}
        </div>
      ) : (
        selectedPost ? (
        <div className="post-detail">
          <button 
            className="back-button"
            onClick={() => { setSelectedPost(null); setPostContent(''); }}
          >
            ← Back to posts
          </button>
          <h2>{selectedPost.title}</h2>
          <p className="post-description">{selectedPost.description}</p>
          {contentLoading ? (
            <p className="loading-content">Loading post...</p>
          ) : postContent ? (
            <div className="markdown-content">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="markdown-h1" {...props} />,
                  h2: ({node, ...props}) => <h2 className="markdown-h2" {...props} />,
                  h3: ({node, ...props}) => <h3 className="markdown-h3" {...props} />,
                  p: ({node, ...props}) => <p className="markdown-p" {...props} />,
                  ul: ({node, ...props}) => <ul className="markdown-ul" {...props} />,
                  ol: ({node, ...props}) => <ol className="markdown-ol" {...props} />,
                  li: ({node, ...props}) => <li className="markdown-li" {...props} />,
                  a: ({node, ...props}) => <a className="markdown-a" target="_blank" rel="noopener noreferrer" {...props} />,
                  strong: ({node, ...props}) => <strong className="markdown-strong" {...props} />,
                  em: ({node, ...props}) => <em className="markdown-em" {...props} />,
                  code: ({node, inline, ...props}) => (
                    inline ? <code className="markdown-code-inline" {...props} /> : <code className="markdown-code-block" {...props} />
                  ),
                  blockquote: ({node, ...props}) => <blockquote className="markdown-blockquote" {...props} />,
                }}
              >
                {postContent}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="coming-soon">📝 Post content not available</p>
          )}
        </div>
        ) : (
          <div className="posts-list">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <article 
                  key={index}
                  className="post-card"
                  onClick={() => {
                    setSelectedPost(post);
                    setContentLoading(true);
                    fetch(`blog/posts/${post.file}`)
                      .then(res => res.text())
                      .then(content => {
                        setPostContent(content);
                        setContentLoading(false);
                      })
                      .catch(err => {
                        console.error('Error loading post:', err);
                        setContentLoading(false);
                      });
                  }}
                >
                  <h3>{post.title}</h3>
                  <p className="post-excerpt">{post.description}</p>
                  {post.date && <p className="post-date">{post.date}</p>}
                  <div className="read-more">Read more →</div>
                </article>
              ))
            ) : (
              <p className="no-posts">No posts found matching "{searchTerm}"</p>
            )}
          </div>
        )
      )}
    </div>
  )
}

export default Blog
