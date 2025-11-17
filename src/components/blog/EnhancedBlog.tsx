import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Search, 
  Tag,
  ArrowRight,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Star,
  Filter,
  Grid3X3,
  List,
  Zap,
  Target,
  Award,
  Code,
  Database,
  Cloud,
  Shield
} from 'lucide-react';
import { 
  AnimatedBackground, 
  TechBadge, 
  LoadingSkeleton, 
  StatsCard, 
  InteractiveButton, 
  CategoryFilter, 
  ViewToggle, 
  EngagementMetrics,
  categoryColors
} from '../visual/VisualComponents';

interface BlogPost {
  id: number;
  title: string;
  category: keyof typeof categoryColors;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  date: string;
  featured: boolean;
  views: string;
  likes: string;
  comments: string;
  excerpt: string;
  tags: string[];
  heroImage?: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "From Zero to Hero: Building a Production-Grade EKS Cluster with GitOps",
    category: "DevOps",
    difficulty: "Intermediate",
    readTime: "8 min read",
    date: "2025-01-15",
    featured: true,
    views: "2.5k",
    likes: "156",
    comments: "23",
    excerpt: "Learn how to set up a complete EKS cluster with ArgoCD for GitOps deployment, including best practices for production environments.",
    tags: ["AWS", "EKS", "GitOps", "ArgoCD", "Kubernetes"],
    content: `
# From Zero to Hero: Building a Production-Grade EKS Cluster with GitOps

In today's cloud-native world, managing Kubernetes infrastructure efficiently is crucial. This comprehensive guide will walk you through setting up a production-grade Amazon EKS cluster with GitOps deployment using ArgoCD.

## Why GitOps?

GitOps is an operational framework that takes DevOps best practices used for application development (version control, collaboration, compliance) and applies them to infrastructure automation.

## Prerequisites

- AWS CLI configured
- kubectl installed
- Terraform or eksctl
- Docker knowledge
- Basic Kubernetes concepts

## Architecture Overview

Our setup includes:
- EKS cluster with managed node groups
- ArgoCD for GitOps
- External DNS
- AWS Load Balancer Controller
- cert-manager for SSL certificates
- Monitoring with Prometheus and Grafana

## Step 1: Cluster Creation

\`\`\`bash
# Using eksctl
eksctl create cluster \\
  --name production-eks \\
  --region us-west-2 \\
  --nodegroup-name linux-nodes \\
  --node-type t3.medium \\
  --nodes 3 \\
  --nodes-min 2 \\
  --nodes-max 10 \\
  --managed
\`\`\`

## Step 2: Install ArgoCD

\`\`\`bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
\`\`\`

## Step 3: Configure GitOps

Create your application manifests in a Git repository and configure ArgoCD to sync them automatically.

This approach ensures that your infrastructure is always in sync with your Git repository, providing audit trails and rollback capabilities.

## Conclusion

By following this guide, you'll have a production-ready EKS cluster with GitOps capabilities that can scale with your needs and maintain compliance standards.
    `
  },
  {
    id: 2,
    title: "Infrastructure as Code: Terraform Best Practices for AWS",
    category: "Cloud Infrastructure",
    difficulty: "Advanced",
    readTime: "12 min read",
    date: "2025-01-10",
    featured: false,
    views: "1.8k",
    likes: "98",
    comments: "15",
    excerpt: "Master Terraform infrastructure management with proven patterns, state management, and security practices for AWS deployments.",
    tags: ["Terraform", "AWS", "IaC", "Security", "Best Practices"],
    content: `
# Infrastructure as Code: Terraform Best Practices for AWS

Terraform has revolutionized how we manage infrastructure. This guide covers essential best practices for managing AWS resources with Terraform.

## Project Structure

Organize your Terraform code for maintainability and reusability:

\`\`\`
terraform/
├── modules/
│   ├── vpc/
│   ├── ecs/
│   └── rds/
├── environments/
│   ├── dev/
│   ├── staging/
│   └── prod/
└── shared/
    └── variables.tf
\`\`\`

## State Management

Use remote state storage to maintain state across team members:

\`\`\`hcl
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "infrastructure/terraform.tfstate"
    region = "us-west-2"
    
    dynamodb_table = "terraform-state-lock"
  }
}
\`\`\`

## Security Best Practices

1. Use separate AWS accounts for different environments
2. Implement least privilege IAM policies
3. Enable encryption at rest and in transit
4. Use Terraform variables for sensitive data
5. Implement state encryption

## Module Reusability

Create reusable modules that can be shared across projects:

\`\`\`hcl
module "vpc" {
  source = "./modules/vpc"
  
  environment = var.environment
  region      = var.region
  
  cidr_block = "10.0.0.0/16"
}
\`\`\`

## Conclusion

Following these best practices will help you maintain scalable, secure, and maintainable infrastructure with Terraform.
    `
  },
  {
    id: 3,
    title: "DevOps Trends 2025: AI, GitOps, and Cloud Native Revolution",
    category: "DevOps",
    difficulty: "Beginner",
    readTime: "6 min read",
    date: "2025-01-05",
    featured: false,
    views: "3.2k",
    likes: "234",
    comments: "41",
    excerpt: "Explore the latest DevOps trends shaping the industry in 2025, from AI-powered automation to enhanced GitOps workflows.",
    tags: ["Trends", "AI", "GitOps", "Cloud Native", "Automation"],
    content: `
# DevOps Trends 2025: AI, GitOps, and Cloud Native Revolution

The DevOps landscape continues to evolve rapidly. Let's explore the key trends that will shape the industry in 2025.

## AI-Powered Automation

AI is transforming how we approach DevOps:
- Intelligent incident detection and response
- Automated capacity planning
- Predictive maintenance
- Smart resource optimization

## Enhanced GitOps Workflows

GitOps continues to mature:
- Multi-cluster synchronization
- Progressive delivery strategies
- Policy-as-code enforcement
- Enhanced rollback capabilities

## Cloud Native Security

Security is becoming more integrated:
- Zero-trust architectures
- DevSecOps pipelines
- Container image scanning
- Runtime security monitoring

## Platform Engineering

Organizations are building internal platforms:
- Self-service developer portals
- Standardized deployment pipelines
- Automated compliance checks
- Improved developer experience

## Key Takeaways

1. Embrace automation, but maintain human oversight
2. Invest in security from day one
3. Focus on developer experience
4. Stay adaptable to new technologies

The future of DevOps is bright, with these trends setting the stage for more efficient and secure software delivery.
    `
  },
  {
    id: 4,
    title: "Real-time Communication: WebSocket Architecture with Node.js",
    category: "Full-Stack",
    difficulty: "Intermediate",
    readTime: "10 min read",
    date: "2024-12-28",
    featured: true,
    views: "1.9k",
    likes: "127",
    comments: "19",
    excerpt: "Build scalable real-time applications using WebSocket architecture with Node.js, Redis, and message queues.",
    tags: ["WebSocket", "Node.js", "Redis", "Real-time", "Architecture"],
    content: `
# Real-time Communication: WebSocket Architecture with Node.js

Real-time communication has become essential for modern applications. This guide covers building scalable WebSocket applications.

## Architecture Overview

\`\`\`
Client -> Load Balancer -> WebSocket Server -> Redis Pub/Sub -> Database
                                    -> Message Queue -> Background Workers
\`\`\`

## WebSocket Server Setup

\`\`\`javascript
const WebSocket = require('ws');
const redis = require('redis');

class WebSocketServer {
  constructor(port) {
    this.wss = new WebSocket.Server({ port });
    this.redisClient = redis.createClient();
    this.setupWebSocketHandlers();
  }
  
  setupWebSocketHandlers() {
    this.wss.on('connection', (ws) => {
      console.log('New client connected');
      
      ws.on('message', (message) => {
        this.handleMessage(ws, message);
      });
      
      ws.on('close', () => {
        console.log('Client disconnected');
      });
    });
  }
}
\`\`\`

## Scaling Strategies

1. **Horizontal Scaling**: Use Redis for session sharing
2. **Load Balancing**: Implement sticky sessions
3. **Message Queues**: Handle high message volumes
4. **Database Optimization**: Use efficient data structures

## Best Practices

- Implement proper error handling
- Use connection pooling
- Monitor memory usage
- Implement rate limiting

This architecture provides a solid foundation for building real-time applications that can scale to thousands of concurrent users.
    `
  }
];

const categories = ['All', 'DevOps', 'Cloud Infrastructure', 'Full-Stack'];

const EnhancedBlog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'likes'>('date');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogViews, setBlogViews] = useState<{[key: number]: number}>({});

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
        case 'likes':
          return parseInt(b.likes) - parseInt(a.likes);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    // Simulate real-time view increment
    setBlogViews(prev => ({
      ...prev,
      [post.id]: (prev[post.id] || parseInt(post.views.replace('k', '000'))) + 1
    }));
  };

  const getPostViews = (post: BlogPost) => {
    const views = blogViews[post.id] || parseInt(post.views.replace('k', '000'));
    return views > 1000 ? `${(views / 1000).toFixed(1)}k` : views.toString();
  };

  const getTotalViews = () => {
    return blogPosts.reduce((total, post) => {
      return total + (blogViews[post.id] || parseInt(post.views.replace('k', '000')));
    }, 0);
  };

  const totalViews = getTotalViews();
  const totalViewsFormatted = totalViews > 1000 ? `${(totalViews / 1000).toFixed(1)}k` : totalViews.toString();

  return (
    <AnimatedBackground>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            TECH_BLOG.EXE
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and best practices from the world of DevOps, Cloud Infrastructure, and Full-Stack Development
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <StatsCard
            title="Total Articles"
            value="4"
            icon={<BookOpen className="w-6 h-6" />}
            color="completed"
          />
          <StatsCard
            title="Total Views"
            value={totalViewsFormatted}
            change="Real-time tracking"
            icon={<Eye className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
          <StatsCard
            title="Engagement Rate"
            value="72%"
            change="Active readership"
            icon={<Heart className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
          <StatsCard
            title="Avg. Read Time"
            value="8 min"
            change="Industry average: 7 min"
            icon={<Clock className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
        </motion.div>

        {/* Featured Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
            <Star className="w-6 h-6" />
            Featured Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => handlePostClick(post)}
                className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TechBadge name={post.category} category={post.category} size="sm" />
                    <span className="text-xs text-yellow-400 font-medium">⭐ Featured</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <EngagementMetrics
                      views={getPostViews(post)}
                      likes={post.likes}
                      comments={post.comments}
                      featured={post.featured}
                    />
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div>
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <ViewToggle view={view} onViewChange={setView} />
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'views' | 'likes')}
            className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400"
          >
            <option value="date">Latest</option>
            <option value="views">Most Viewed</option>
            <option value="likes">Most Liked</option>
          </select>
        </motion.div>

        {/* Blog Posts Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${view}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={view === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
            }
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handlePostClick(post)}
                className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden cursor-pointer group hover:border-green-400 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <TechBadge name={post.category} category={post.category} size="sm" />
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded ${
                        post.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        post.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {post.difficulty}
                      </span>
                      {post.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <EngagementMetrics
                    views={getPostViews(post)}
                    likes={post.likes}
                    comments={post.comments}
                    featured={post.featured}
                  />
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            STAY_UPDATED.EXE
          </h2>
          <p className="text-green-200 mb-6 max-w-2xl mx-auto">
            Subscribe to get the latest DevOps insights, tutorials, and best practices delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
            <InteractiveButton variant="primary">
              Subscribe
            </InteractiveButton>
          </div>
          
          <p className="text-xs text-gray-400 mt-3">
            No spam, unsubscribe at any time.
          </p>
        </motion.section>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-gray-700 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <TechBadge name={selectedPost.category} category={selectedPost.category} size="sm" />
                      <span className={`px-2 py-1 text-xs rounded ${
                        selectedPost.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        selectedPost.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {selectedPost.difficulty}
                      </span>
                      {selectedPost.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{getPostViews(selectedPost)} views</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                  <div className="prose prose-invert prose-green max-w-none">
                    {selectedPost.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('# ')) {
                        return <h1 key={index} className="text-3xl font-bold text-green-400 mb-4">{paragraph.substring(2)}</h1>;
                      } else if (paragraph.startsWith('## ')) {
                        return <h2 key={index} className="text-2xl font-bold text-green-400 mb-3 mt-6">{paragraph.substring(3)}</h2>;
                      } else if (paragraph.startsWith('### ')) {
                        return <h3 key={index} className="text-xl font-bold text-green-400 mb-2 mt-4">{paragraph.substring(4)}</h3>;
                      } else if (paragraph.startsWith('```')) {
                        const isClosing = paragraph === '```';
                        if (isClosing) {
                          return <div key={index}></div>;
                        }
                        const nextParagraph = selectedPost.content.split('\n')[index + 1];
                        return (
                          <pre key={index} className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
                            <code className="text-green-400">{nextParagraph}</code>
                          </pre>
                        );
                      } else if (paragraph.trim()) {
                        return <p key={index} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>;
                      }
                      return <br key={index} />;
                    })}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-800 text-green-400 text-sm rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedBackground>
  );
};

export default EnhancedBlog;