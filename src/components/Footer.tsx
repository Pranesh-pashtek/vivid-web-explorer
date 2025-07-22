
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#product' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Finance', href: '#solutions' },
      { name: 'Healthcare', href: '#solutions' },
      { name: 'AI/ML', href: '#solutions' },
      { name: 'E-commerce', href: '#solutions' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#' },
      { name: 'SDKs', href: '#' },
      { name: 'Status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#company' },
      { name: 'Blog', href: '#resources' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '#contact' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Community', href: '#' },
      { name: 'Training', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest product updates, company news, and exclusive insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button className="bg-gradient-to-r from-primary to-purple-600">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo and copyright */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold text-foreground">CAZPIAN</span>
              </div>
              <span className="text-muted-foreground text-sm">
                © 2024 CAZPIAN. All rights reserved.
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            {/* Legal links */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
