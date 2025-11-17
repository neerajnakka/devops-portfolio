import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Target, 
  Users, 
  Code, 
  Database, 
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Settings,
  GitBranch,
  Container,
  Globe,
  Server,
  Lock,
  Cpu,
  Network,
  Monitor
} from 'lucide-react';
import { 
  AnimatedBackground, 
  TechBadge, 
  StatsCard, 
  ProgressBar, 
  TimelineItem, 
  InteractiveButton,
  categoryColors,
  statusColors,
  difficultyColors
} from '../visual/VisualComponents';

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: keyof typeof categoryColors;
  featured: boolean;
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  challenge: string;
  solution: string[];
  impact: string[];
  technologies: string[];
  impactMetrics: {
    deploymentTime?: { before: string; after: string; improvement: string };
    cost?: { before: string; after: string; reduction: string };
    performance?: { improvement: string };
    availability?: { uptime: string; improvement: string };
    scalability?: { capacity: string; improvement: string };
  };
  architecture?: {
    components: string[];
    pattern: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Amazon Clone — EKS & ArgoCD Deployment",
    subtitle: "E-commerce Platform with GitOps",
    category: "DevOps",
    featured: true,
    timeline: {
      start: "Sep 2024",
      end: "Nov 2024",
      duration: "2 months"
    },
    challenge: "Migrate a complex e-commerce platform to a scalable Kubernetes infrastructure while implementing GitOps practices for automated deployments and ensuring zero-downtime updates.",
    solution: [
      "Designed and implemented production-grade EKS cluster with multi-AZ deployment",
      "Set up ArgoCD for GitOps-based continuous deployment with progressive delivery",
      "Implemented automated CI/CD pipelines with GitHub Actions and Docker",
      "Configured monitoring and alerting with Prometheus and Grafana",
      "Established security practices with RBAC, network policies, and image scanning"
    ],
    impact: [
      "Reduced deployment time from 45 minutes to 5 minutes",
      "Achieved 99.9% uptime with automated failover",
      "Decreased infrastructure costs by 30% through autoscaling",
      "Improved developer productivity with self-service deployments",
      "Enhanced security posture with automated compliance checks"
    ],
    technologies: ["AWS EKS", "ArgoCD", "GitOps", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    impactMetrics: {
      deploymentTime: { before: "45 min", after: "8 min", improvement: "82%" },
      cost: { before: "$2,400/mo", after: "$1,800/mo", reduction: "25%" },
      availability: { uptime: "99.5%", improvement: "1.5%" },
      scalability: { capacity: "5x", improvement: "500%" }
    },
    architecture: {
      components: ["EKS Cluster", "ArgoCD", "Application Pods", "Load Balancers", "Database", "Cache Layer"],
      pattern: "Microservices with GitOps"
    }
  },
  {
    id: 2,
    title: "Realtime Chat Application",
    subtitle: "WebSocket Architecture with Scaling",
    category: "Full-Stack",
    featured: false,
    timeline: {
      start: "Oct 2024",
      end: "Dec 2024",
      duration: "3 months"
    },
    challenge: "Build a real-time chat application capable of handling thousands of concurrent users with message persistence, typing indicators, and file sharing capabilities.",
    solution: [
      "Implemented WebSocket-based real-time communication architecture",
      "Designed horizontal scaling strategy with Redis Pub/Sub for session sharing",
      "Created message queue system for handling high message volumes",
      "Built responsive React frontend with real-time UI updates",
      "Implemented end-to-end encryption for secure communications"
    ],
    impact: [
      "Supports 10,000+ concurrent users seamlessly",
      "Achieved <100ms message delivery latency",
      "Reduced server costs by 40% through efficient resource usage",
      "Improved user engagement by 65% with instant messaging",
      "Maintained 99.8% uptime with automatic scaling"
    ],
    technologies: ["Node.js", "WebSocket", "Redis", "MongoDB", "React", "Socket.io", "AWS"],
    impactMetrics: {
      performance: { improvement: "80%" },
      scalability: { capacity: "500+ users", improvement: "300%" },
      availability: { uptime: "99.2%", improvement: "1.2%" }
    },
    architecture: {
      components: ["WebSocket Server", "Redis Cluster", "MongoDB", "React Client", "CDN", "Load Balancer"],
      pattern: "Real-time with Horizontal Scaling"
    }
  },
  {
    id: 3,
    title: "Cloud Infrastructure Automation",
    subtitle: "Multi-Cloud DevOps Pipeline",
    category: "Cloud Infrastructure",
    featured: true,
    timeline: {
      start: "Aug 2024",
      end: "Oct 2024",
      duration: "3 months"
    },
    challenge: "Design and implement a comprehensive cloud infrastructure automation solution that supports multi-cloud deployments with consistent security, monitoring, and governance across AWS, Azure, and GCP.",
    solution: [
      "Created unified Infrastructure as Code templates using Terraform",
      "Implemented automated security scanning and compliance checking",
      "Built centralized logging and monitoring with ELK stack",
      "Designed disaster recovery and backup automation",
      "Established governance frameworks with policy-as-code"
    ],
    impact: [
      "Reduced infrastructure provisioning time by 75%",
      "Achieved consistent security posture across all cloud providers",
      "Decreased compliance violations by 90%",
      "Improved disaster recovery time from hours to minutes",
      "Enhanced resource utilization efficiency by 45%"
    ],
    technologies: ["Terraform", "AWS", "Azure", "GCP", "Ansible", "Jenkins", "ELK Stack"],
    impactMetrics: {
      deploymentTime: { before: "4 hours", after: "45 min", improvement: "81%" },
      cost: { before: "$3,200/mo", after: "$2,400/mo", reduction: "25%" },
      performance: { improvement: "120%" }
    },
    architecture: {
      components: ["Terraform Modules", "CI/CD Pipeline", "Security Scanning", "Monitoring", "Backup System"],
      pattern: "Multi-Cloud IaC"
    }
  }
];

const EnhancedCaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(caseStudies[0]?.id || null);
  const [activeTab, setActiveTab] = useState<'overview' | 'solution' | 'results'>('overview');

  const selectedStudyData = caseStudies.find(study => study.id === selectedStudy);

  const categories = ['All', 'DevOps', 'Cloud Infrastructure', 'Full-Stack'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const getIconForMetric = (metric: string) => {
    switch (metric) {
      case 'deploymentTime': return <Zap className="w-5 h-5" />;
      case 'cost': return <TrendingUp className="w-5 h-5" />;
      case 'performance': return <BarChart3 className="w-5 h-5" />;
      case 'availability': return <Target className="w-5 h-5" />;
      case 'scalability': return <TrendingUp className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
    }
  };

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
            CASE_STUDIES.EXE
          </h1>
          <p className="text-green-200 text-lg max-w-3xl mx-auto">
            Real-world projects showcasing innovative solutions, measurable impact, and technical excellence across DevOps, Cloud Infrastructure, and Full-Stack Development
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <StatsCard
            title="Projects Completed"
            value="3"
            icon={<FileText className="w-6 h-6" />}
            color="completed"
          />
          <StatsCard
            title="Cost Savings"
            value="35%"
            change="Average across projects"
            icon={<TrendingUp className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
          <StatsCard
            title="Uptime Achieved"
            value="99.5%"
            change="Production reliability"
            icon={<Target className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
        </motion.div>

        {/* Study Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-400 text-black'
                    : 'bg-gray-800 text-green-400 border border-gray-600 hover:border-green-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStudy(study.id)}
                className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                  selectedStudy === study.id
                    ? 'bg-green-400/10 border-green-400'
                    : 'bg-gray-900/50 border-gray-700 hover:border-green-400/50'
                } ${study.featured ? 'ring-2 ring-yellow-400/50' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <TechBadge name={study.category} category={study.category} size="sm" />
                  {study.featured && (
                    <span className="text-xs text-yellow-400 font-medium">⭐ Featured</span>
                  )}
                </div>
                
                <h3 className="text-white font-bold mb-1 text-sm line-clamp-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                  {study.subtitle}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{study.timeline.duration}</span>
                  <span>•</span>
                  <span>{study.timeline.start} - {study.timeline.end}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Study Details */}
        <AnimatePresence mode="wait">
          {selectedStudyData && (
            <motion.div
              key={selectedStudyData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Study Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <TechBadge name={selectedStudyData.category} category={selectedStudyData.category} />
                      {selectedStudyData.featured && (
                        <span className="text-xs text-yellow-400 font-medium">⭐ Featured Project</span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedStudyData.title}
                    </h2>
                    <p className="text-green-400 text-lg">
                      {selectedStudyData.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="font-medium">{selectedStudyData.timeline.start}</p>
                      <p className="text-xs">Start Date</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="font-medium">{selectedStudyData.timeline.duration}</p>
                      <p className="text-xs">Duration</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="font-medium">{selectedStudyData.timeline.end}</p>
                      <p className="text-xs">Completion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-700">
                {[
                  { id: 'overview', label: 'Overview', icon: <FileText className="w-4 h-4" /> },
                  { id: 'solution', label: 'Solution', icon: <Code className="w-4 h-4" /> },
                  { id: 'results', label: 'Results', icon: <BarChart3 className="w-4 h-4" /> }
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'text-green-400 border-b-2 border-green-400'
                        : 'text-gray-400 hover:text-green-400'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'overview' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Challenge
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedStudyData.challenge}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                              <Settings className="w-5 h-5" />
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedStudyData.technologies.map((tech) => (
                                <TechBadge key={tech} name={tech} category={selectedStudyData.category} size="sm" />
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                              <GitBranch className="w-5 h-5" />
                              Architecture Pattern
                            </h3>
                            <p className="text-gray-300 mb-2 font-medium">
                              {selectedStudyData.architecture?.pattern}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {selectedStudyData.architecture?.components.map((component) => (
                                <span key={component} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                                  {component}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'solution' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Solution Approach
                        </h3>
                        <div className="space-y-4">
                          {selectedStudyData.solution.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex gap-4 p-4 bg-gray-800/50 rounded-lg"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-green-400 text-black rounded-full flex items-center justify-center font-bold text-sm">
                                {index + 1}
                              </div>
                              <p className="text-gray-300 leading-relaxed flex-1">
                                {item}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'results' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
                          Impact & Results
                        </h3>

                        {/* Impact Metrics */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                          {Object.entries(selectedStudyData.impactMetrics).map(([key, metrics]) => (
                            <div key={key} className="bg-gray-800/50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-3">
                                {getIconForMetric(key)}
                                <h4 className="font-bold text-white capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                              </div>
                              
                              {key === 'deploymentTime' && metrics && (metrics as any).before && (metrics as any).after && (metrics as any).improvement && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Before</span>
                                    <span className="text-red-400">{(metrics as any).before}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">After</span>
                                    <span className="text-green-400">{(metrics as any).after}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-green-400">-{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'cost' && metrics && (metrics as any).before && (metrics as any).after && (metrics as any).reduction && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Before</span>
                                    <span className="text-red-400">{(metrics as any).before}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">After</span>
                                    <span className="text-green-400">{(metrics as any).after}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Reduction</span>
                                    <span className="text-green-400">-{(metrics as any).reduction}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'availability' && metrics && 'uptime' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Uptime</span>
                                    <span className="text-green-400">{(metrics as any).uptime}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-green-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'scalability' && metrics && 'capacity' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Capacity</span>
                                    <span className="text-green-400">{(metrics as any).capacity}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-green-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'performance' && metrics && 'improvement' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Performance Gain</span>
                                    <span className="text-green-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Impact List */}
                        <div className="space-y-3">
                          {selectedStudyData.impact.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-300 leading-relaxed">{item}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            INTERESTED_IN_A_SIMILAR_PROJECT?
          </h2>
          <p className="text-green-200 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can transform your infrastructure and achieve similar results for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InteractiveButton variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Start Your Project
            </InteractiveButton>
            
            <InteractiveButton variant="outline" icon={<FileText className="w-4 h-4" />}>
              Download Case Study PDF
            </InteractiveButton>
          </div>
        </motion.section>
      </div>
    </AnimatedBackground>
  );
};

export default EnhancedCaseStudies;