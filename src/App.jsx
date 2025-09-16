import React from 'react'
import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Calendar, Users, Palette, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react'
import { ASSETS } from './utils/assets.js'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="logo-container w-12 h-12 rounded-full">
                  <img src={ASSETS.LOGO} alt="Township Green" className="township-logo" />
                </div>
                <h1 className="text-2xl font-bold text-secondary">Township Green</h1>
              </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#sessions" className="text-gray-700 hover:text-primary transition-colors">Art Sessions</a>
              <a href="#events" className="text-gray-700 hover:text-primary transition-colors">Events</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">Book Session</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Your
            <span className="text-primary block">Creative Sanctuary</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Township Green is a premium cannabis consumption lounge where creativity meets community. 
            Join us for guided art sessions, community events, and a safe, welcoming environment 
            designed for relaxation and artistic expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Book Your Art Session
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-3">
                View Events Calendar
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-green-100 shadow-lg">
              <img 
                src={ASSETS.FRAME_QR} 
                alt="Scan to visit Township Green dispensary" 
                className="w-24 h-24 sm:w-28 sm:h-28"
              />
              <p className="text-xs text-center text-gray-600 font-medium">
                Scan for Dispensary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Township Green?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Palette className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">Guided Art Sessions</CardTitle>
                <CardDescription>
                  Professional artists guide you through creative sessions in a relaxed, inspiring environment.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">Community Events</CardTitle>
                <CardDescription>
                  Connect with like-minded individuals through workshops, exhibitions, and social gatherings.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">Safe Environment</CardTitle>
                <CardDescription>
                  Fully licensed and compliant facility with professional staff ensuring your comfort and safety.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Art Sessions Section */}
      <section id="sessions" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Art Sessions & Workshops
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Painting & Drawing</CardTitle>
                <CardDescription>Express yourself through traditional mediums</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  2-3 hours
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  Max 8 participants
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Book Session</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Pottery & Ceramics</CardTitle>
                <CardDescription>Create beautiful pottery pieces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  3-4 hours
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  Max 6 participants
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Book Session</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Digital Art</CardTitle>
                <CardDescription>Explore modern digital creation tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  2 hours
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  Max 10 participants
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Book Session</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Upcoming Community Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Artist Showcase Night</CardTitle>
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>
                  Local artists display their work in our gallery space
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Friday, March 15th • 7:00 PM</p>
                <p className="text-sm text-gray-700 mb-4">
                  Join us for an evening celebrating local talent with live music, refreshments, and community connection.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Mindful Art Workshop</CardTitle>
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>
                  Meditation meets creativity in this unique session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Saturday, March 23rd • 2:00 PM</p>
                <p className="text-sm text-gray-700 mb-4">
                  Combine mindfulness practices with artistic expression for a deeply relaxing experience.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Visit Us Today
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h4 className="text-xl font-semibold mb-4">Location & Hours</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">15 Scott Street</p>
                    <p className="text-gray-600">Riverside, NJ, United States</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Operating Hours</p>
                    <p className="text-gray-600">Tuesday - Sunday: 12:00 PM - 10:00 PM</p>
                    <p className="text-gray-600">Monday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Get Started</h4>
              <p className="text-gray-600 mb-6">
                Ready to join our creative community? Book your first session or contact us for more information about our programs and membership options.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Book Your First Session
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Contact Us
                </Button>
                
                {/* QR Code for Dispensary */}
                <div className="flex items-center justify-center mt-6 p-4 bg-white/90 rounded-lg border border-green-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <img 
                      src={ASSETS.FRAME_QR} 
                      alt="Scan to visit Township Green dispensary" 
                      className="w-20 h-20"
                    />
                    <div className="text-left">
                      <h5 className="font-semibold text-gray-900 mb-1">Want to feel even higher?</h5>
                      <p className="text-sm text-gray-600 mb-1">Visit our dispensary</p>
                      <p className="text-xs text-gray-500">Scan QR code</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="logo-container w-8 h-8 rounded-full">
                  <img src={ASSETS.LOGO} alt="Township Green" className="township-logo-footer" />
                </div>
                <h5 className="text-lg font-semibold">Township Green</h5>
              </div>
              <p className="text-gray-300 text-sm">
                A premium cannabis consumption lounge fostering creativity and community through art.
              </p>
            </div>

            <div>
              <h6 className="font-semibold mb-3">Contact Info</h6>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>15 Scott Street<br />Riverside, NJ, United States</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+18565443065" className="hover:text-white transition-colors">
                    (+1) 856-544-3065
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@townshipgreen.com" className="hover:text-white transition-colors">
                    info@townshipgreen.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h6 className="font-semibold mb-3">Quick Links</h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#sessions" className="hover:text-white transition-colors">Art Sessions</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-3">Legal</h6>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Age Verification</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-300">
            <p>&copy; 2024 Township Green. All rights reserved. Must be 21+ to enter.</p>
      </div>
    </div>
      </footer>
    </div>
  )
}

export default App
