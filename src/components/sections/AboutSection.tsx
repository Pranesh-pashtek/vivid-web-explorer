import { Users, Award, Globe, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  const values = [
    {
      icon: Users,
      title: 'Our Team',
      description: 'Passionate experts from around the world working together to build the future of business technology.',
    },
    {
      icon: Award,
      title: 'Awards',
      description: 'Recognized by industry leaders for innovation, security, and customer satisfaction.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers in over 50 countries with localized support and compliance.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of what\'s possible with cutting-edge technology.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About CAZPIAN
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate innovators dedicated to empowering businesses with 
            intelligent solutions that drive growth and success in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: 'Data-Driven',
                description: 'Every decision is backed by comprehensive analytics and real-world insights.'
              },
              {
                title: 'Secure-by-design', 
                description: 'Security and privacy are built into every aspect of our platform from day one.'
              },
              {
                title: 'Trust & Safety',
                description: 'We maintain the highest standards of reliability and user protection.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <Card className="p-12 bg-gradient-to-r from-primary to-purple-600 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of companies that trust our platform to power their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}