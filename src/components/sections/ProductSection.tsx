
import { CheckCircle, Zap, Shield, Globe, BarChart3, Users, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with modern architecture and optimized performance that scales infinitely.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption protocols.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our distributed infrastructure and intelligent CDN network.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights and comprehensive reporting for data-driven strategic decisions.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools designed for high-performance teams of any size.',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Intelligent automation and smart insights powered by cutting-edge AI technology.',
    color: 'from-indigo-400 to-purple-500',
  },
];

const benefits = [
  'Reduce operational costs by up to 70%',
  'Increase team productivity by 5x',
  'Scale without infrastructure limitations',
  'Integrate with 1000+ existing tools',
  'Deploy in under 60 seconds',
  'AI-powered optimization included',
];

const stats = [
  { value: '2M+', label: 'Active Users', sublabel: 'Growing daily' },
  { value: '99.99%', label: 'Uptime SLA', sublabel: 'Guaranteed' },
  { value: '24/7', label: 'Expert Support', sublabel: 'Always available' },
  { value: '150+', label: 'Countries', sublabel: 'Worldwide reach' },
];

export function ProductSection() {
  return (
    <section id="product" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 glass-effect rounded-full">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            <span className="block">Built for</span>
            <span className="text-gradient bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Our comprehensive platform provides everything you need to streamline operations, 
            enhance collaboration, and drive exponential growth in the digital age.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover-lift glass-effect border-2 hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Benefits & Stats Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-black mb-8 text-gradient bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Why Choose SaaSFlow?
            </h3>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <Card className="p-8 glass-effect border-2 border-primary/20 rounded-3xl shadow-2xl hover-lift">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl font-black text-gradient bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
