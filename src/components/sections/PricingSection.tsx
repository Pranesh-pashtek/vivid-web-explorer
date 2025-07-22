
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    name: 'Starter',
    price: '0',
    period: 'month',
    description: 'Get started for free',
    features: [
      'Up to 2 projects',
      'Basic support',
      '1GB storage',
      'Community access',
    ],
    cta: 'Get started for free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '39',
    period: 'month',
    description: 'Most popular choice for teams',
    features: [
      'Unlimited projects',
      'Priority support',
      '100GB storage',
      'Advanced analytics',
      'Team collaboration',
      'API access',
    ],
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Custom',
    price: null,
    period: null,
    description: 'For enterprise customers',
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantees',
      'Advanced security',
      'Custom deployment',
    ],
    cta: 'Contact us',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Start free and scale as you grow with our flexible pricing options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'border-primary shadow-xl bg-primary text-white' 
                  : 'bg-background border-border/50 hover:shadow-lg transition-shadow'
              }`}
            >
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  {plan.price ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                        ${plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                        /{plan.period}
                      </span>
                    </>
                  ) : (
                    <span className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                      Let's talk
                    </span>
                  )}
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>

                <Button 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-primary'
                      }`} />
                      <span className={`text-sm ${
                        plan.popular ? 'text-white/90' : 'text-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All plans include a 30-day money-back guarantee. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
}
