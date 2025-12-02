import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { getBlogPostBySlug } from '../../data/blogPosts';

function formatInlineMarkdown(text: string): string {
  return text
    // Bold text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="px-2 py-1 bg-gray-800 rounded text-cyan-400 text-sm">$1</code>')
    // Links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan-400 hover:text-cyan-300 underline">$1</a>')
    // Checkmarks
    .replace(/✅/g, '<span class="text-green-400">✅</span>');
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = `https://moneygraph.ai/blog/${post.slug}`;
  const shareText = post.title;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': post.schemaType,
    'headline': post.title,
    'description': post.description,
    'author': {
      '@type': 'Organization',
      'name': post.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'MoneyGraph',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://moneygraph.ai/logo.png'
      }
    },
    'datePublished': post.date,
    'dateModified': post.date,
    'url': post.canonicalUrl,
    'image': `https://moneygraph.ai${post.featuredImage}`,
    'keywords': post.keywords.join(', '),
    'articleSection': post.category,
    'inLanguage': 'en-US',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': post.canonicalUrl
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | MoneyGraph Articles</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <meta property="og:title" content={post.ogTitle} />
        <meta property="og:description" content={post.ogDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={post.canonicalUrl} />
        <meta property="og:image" content={`https://moneygraph.ai${post.featuredImage}`} />
        <meta property="og:site_name" content="MoneyGraph" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.ogTitle} />
        <meta name="twitter:description" content={post.ogDescription} />
        <meta name="twitter:image" content={`https://moneygraph.ai${post.featuredImage}`} />

        <link rel="canonical" href={post.canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <article className="min-h-screen py-8 tablet:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-gray-400 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readingTime}
              </span>
              <span className="text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h1 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg tablet:text-xl text-gray-400 mb-6">
              {post.description}
            </p>

            <div className="flex items-center justify-between py-4 border-t border-b border-gray-700">
              <span className="text-gray-400">By {post.author}</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:glass-strong transition"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          <div className="glass-strong rounded-xl p-4 tablet:p-8 desktop:p-12 mb-8">
            <div className="prose prose-invert prose-cyan max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl tablet:text-3xl font-bold mt-6 tablet:mt-8 mb-3 tablet:mb-4 gradient-text">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl tablet:text-2xl font-bold mt-4 tablet:mt-6 mb-2 tablet:mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const code = paragraph.replace(/```.*\n?/g, '').trim();
                  return (
                    <div key={index} className="my-4 -mx-4 tablet:mx-0">
                      <pre className="bg-gray-900/50 p-4 rounded-none tablet:rounded-lg overflow-x-auto">
                        <code className="text-xs tablet:text-sm text-gray-300">{code}</code>
                      </pre>
                    </div>
                  );
                }
                if (paragraph.includes('|') && paragraph.includes('---')) {
                  const lines = paragraph.trim().split('\n');
                  const headers = lines[0].split('|').filter(h => h.trim());
                  const rows = lines.slice(2).map(line =>
                    line.split('|').filter(cell => cell.trim())
                  );
                  return (
                    <div key={index} className="my-6 -mx-4 tablet:mx-0 overflow-x-auto">
                      <table className="min-w-full text-sm tablet:text-base">
                        <thead className="bg-gray-800/50">
                          <tr>
                            {headers.map((header, i) => (
                              <th key={i} className="px-3 tablet:px-4 py-2 tablet:py-3 text-left font-semibold text-cyan-400 border-b border-gray-700">
                                {header.trim()}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, i) => (
                            <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/30">
                              {row.map((cell, j) => (
                                <td key={j} className="px-3 tablet:px-4 py-2 tablet:py-3 text-gray-300">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                  const items = paragraph.split('\n').filter(line => line.trim());
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4 text-sm tablet:text-base text-gray-300">
                      {items.map((item, i) => {
                        const text = item.replace(/^[-*]\s+/, '');
                        return <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(text) }} />;
                      })}
                    </ul>
                  );
                }
                if (/^\d+\.\s/.test(paragraph)) {
                  const items = paragraph.split('\n').filter(line => line.trim());
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-sm tablet:text-base text-gray-300">
                      {items.map((item, i) => {
                        const text = item.replace(/^\d+\.\s+/, '');
                        return <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(text) }} />;
                      })}
                    </ol>
                  );
                }
                if (paragraph.startsWith('> ')) {
                  const text = paragraph.replace(/^>\s+/gm, '');
                  return (
                    <blockquote key={index} className="border-l-4 border-cyan-500 pl-4 my-4 italic text-gray-400">
                      {text}
                    </blockquote>
                  );
                }
                return (
                  <p key={index} className="text-sm tablet:text-base text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(paragraph) }} />
                );
              })}
            </div>
          </div>

          <div className="glass rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Tag className="w-5 h-5 mr-2 text-cyan-400" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm transition"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-xl p-6 tablet:p-8 text-center">
            <h3 className="text-xl tablet:text-2xl font-bold mb-3 tablet:mb-4">Ready to Get Started?</h3>
            <p className="text-sm tablet:text-base text-gray-400 mb-4 tablet:mb-6 max-w-2xl mx-auto">
              Install MoneyGraph SDK and start building AI-native payment applications today
            </p>
            <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-4 justify-center">
              <Link to="/signup" className="btn-primary text-center">
                Get API Keys
              </Link>
              <Link to="/ai" className="btn-secondary text-center">
                Explore AI Integrations
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
