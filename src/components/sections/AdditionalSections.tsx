
import { BookOpen, FileText, Users, Mail, MapPin, Phone, Calendar, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function DocsSection() {
  return (
    <section id="docs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Developer{' '}
            <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to integrate and build with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: BookOpen,
              title: 'API Documentation',
              description: 'Complete API reference with examples',
              link: 'View Docs'
            },
            {
              icon: FileText,
              title: 'SDKs',
              description: 'Official SDKs for popular languages',
              link: 'Download'
            },
            {
              icon: Users,
              title: 'Quickstart Guide',
              description: 'Get up and running in minutes',
              link: 'Get Started'
            },
            {
              icon: Calendar,
              title: 'Architecture',
              description: 'System design and best practices',
              link: 'Learn More'
            }
          ].map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">{item.link}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Learn & Grow with{' '}
            <span className="text-gradient">SaaSFlow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expand your knowledge with our comprehensive resource library.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: 'Blog',
              title: 'Building Scalable SaaS Applications',
              description: 'Learn best practices for building applications that scale.',
              date: 'Dec 15, 2024'
            },
            {
              category: 'Whitepaper',
              title: 'The Future of Enterprise Software',
              description: 'Industry insights and trends shaping the future.',
              date: 'Dec 10, 2024'
            },
            {
              category: 'Video',
              title: 'Platform Overview Webinar',
              description: 'Deep dive into our platform capabilities.',
              date: 'Dec 8, 2024'
            },
            {
              category: 'Guide',
              title: 'Migration Best Practices',
              description: 'Step-by-step guide for smooth platform migration.',
              date: 'Dec 5, 2024'
            },
            {
              category: 'Case Study',
              title: 'How TechCorp Scaled 10x',
              description: 'Real customer success story and lessons learned.',
              date: 'Dec 1, 2024'
            },
            {
              category: 'Webinar',
              title: 'Security in Modern SaaS',
              description: 'Best practices for securing your applications.',
              date: 'Nov 28, 2024'
            }
          ].map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {resource.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{resource.date}</span>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReleaseNotesSection() {
  return (
    <section id="releases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Release{' '}
            <span className="text-gradient">Notes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up to date with the latest features and improvements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              version: 'v2.4.0',
              date: 'December 15, 2024',
              type: 'Major Release',
              features: [
                'New dashboard with improved analytics',
                'Enhanced security with 2FA support',
                'Advanced team collaboration features',
                'Performance improvements (40% faster)'
              ]
            },
            {
              version: 'v2.3.2',
              date: 'December 1, 2024',
              type: 'Bug Fixes',
              features: [
                'Fixed login issues on mobile devices',
                'Resolved data export formatting',
                'Improved notification delivery',
                'Various UI/UX improvements'
              ]
            },
            {
              version: 'v2.3.0',
              date: 'November 20, 2024',
              type: 'Feature Release',
              features: [
                'New integration with Slack and Teams',
                'Custom workflow builder',
                'Advanced reporting features',
                'API rate limiting improvements'
              ]
            }
          ].map((release, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{release.version}</CardTitle>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{release.date}</div>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {release.type}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {release.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanySection() {
  return (
    <section id="company" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About{' '}
            <span className="text-gradient">SaaSFlow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to democratize enterprise software and make powerful tools accessible to businesses of all sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020 by a team of experienced software engineers and entrepreneurs, 
              SaaSFlow was born from the frustration of working with complex, expensive enterprise software.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believed there had to be a better way – software that was powerful yet simple, 
              enterprise-grade yet affordable, and most importantly, designed with the user in mind.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we serve over 500,000 users across 50+ countries, helping businesses streamline 
              their operations and focus on what matters most – growing their business.
            </p>
          </div>
          <div>
            <Card className="p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Team section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Co-founder',
                bio: 'Former VP of Engineering at TechCorp with 15+ years of experience building scalable platforms.'
              },
              {
                name: 'Michael Chen',
                role: 'CTO & Co-founder',
                bio: 'Ex-Google engineer passionate about creating developer-friendly tools and infrastructure.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'VP of Product',
                bio: 'Product leader with expertise in UX design and user-centered development processes.'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in{' '}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to our team for support, sales inquiries, or partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <Card className="p-8">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input placeholder="Your Company" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="Tell us about your project..." rows={4} />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-purple-600">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Other ways to reach us</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email Support',
                    details: ['support@saasflow.com', 'sales@saasflow.com'],
                    description: 'For technical support and sales inquiries'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    details: ['+1 (555) 123-4567'],
                    description: 'Monday to Friday, 9AM to 6PM PST'
                  },
                  {
                    icon: MapPin,
                    title: 'Office',
                    details: ['123 Tech Street', 'San Francisco, CA 94102'],
                    description: 'Visit us at our headquarters'
                  }
                ].map((contact, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{contact.title}</h4>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-2">{contact.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
