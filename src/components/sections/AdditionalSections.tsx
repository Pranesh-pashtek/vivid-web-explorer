import { BookOpen, Code, GraduationCap, MessageSquare, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '../ContactForm';

export function DocsSection() {
  return (
    <section id="docs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient">Documentation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our in-depth guides and references to get the most out of SaaSFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Getting Started</CardTitle>
              <CardDescription className="text-base">
                New to SaaSFlow? This is the best place to start.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn the basics and set up your account.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">API Reference</CardTitle>
              <CardDescription className="text-base">
                Detailed documentation for our API endpoints.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Integrate SaaSFlow with your existing systems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Tutorials</CardTitle>
              <CardDescription className="text-base">
                Step-by-step guides for common use cases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Master SaaSFlow with our practical tutorials.
              </p>
            </CardContent>
          </Card>
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
            Valuable <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance your knowledge and skills with our curated collection of resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Blog</CardTitle>
              <CardDescription className="text-base">
                Stay up-to-date with the latest industry insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Read articles on best practices and trends.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Case Studies</CardTitle>
              <CardDescription className="text-base">
                See how our customers achieve success with SaaSFlow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore real-world examples and success stories.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Integrations</CardTitle>
              <CardDescription className="text-base">
                Connect SaaSFlow with your favorite tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn about our integrations and partnerships.
              </p>
            </CardContent>
          </Card>
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
            Latest <span className="text-gradient">Release Notes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the newest features, improvements, and bug fixes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Version 2.0</CardTitle>
              <CardDescription className="text-base">
                Major update with enhanced features and performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>New dashboard design</li>
                <li>Improved API performance</li>
                <li>Bug fixes and stability improvements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Version 1.5</CardTitle>
              <CardDescription className="text-base">
                Minor update with new integrations and enhancements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Integration with Slack</li>
                <li>Improved search functionality</li>
                <li>Security updates</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Version 1.0</CardTitle>
              <CardDescription className="text-base">
                Initial release of SaaSFlow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Core features and functionality</li>
                <li>Basic integrations</li>
                <li>Initial documentation</li>
              </ul>
            </CardContent>
          </Card>
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
            About <span className="text-gradient">Our Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about our mission, values, and team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-muted-foreground mb-8">
              To empower businesses with innovative SaaS solutions that drive growth and efficiency.
            </p>
            <h3 className="text-3xl font-bold mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-lg">Innovation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-lg">Customer Success</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-lg">Integrity</span>
              </li>
            </ul>
          </div>
          <div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-600/5">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground mb-4">Years of Experience</div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground mb-4">Team Members</div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">support@saasflow.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
