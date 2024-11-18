import { Camera, Mail, Phone, MapPin, Cake, GraduationCap, Heart, Users, Languages, Ruler, Scale } from 'lucide-react';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { Badge } from './components/Badge';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-50">
      <Header 
        name="Arjun Sharma"
        occupation="Software Engineer"
        email="arjun.sharma@email.com"
        phone="+91 98765 43210"
        photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard title="Personal Details" icon={Users}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Cake className="text-orange-600 w-5 h-5" />
                <div>
                  <p className="text-gray-600">Date of Birth</p>
                  <p className="font-medium">15 August 1995</p>
                  <p className="text-sm text-orange-600">(Shravan Masa, Shukla Paksha)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ruler className="text-orange-600 w-5 h-5" />
                <div>
                  <p className="text-gray-600">Height</p>
                  <p className="font-medium">5'10" (178 cm)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Scale className="text-orange-600 w-5 h-5" />
                <div>
                  <p className="text-gray-600">Weight</p>
                  <p className="font-medium">70 kg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-600 w-5 h-5" />
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="font-medium">Bangalore, Karnataka</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-orange-600 w-5 h-5" />
                <div>
                  <p className="text-gray-600">Marital Status</p>
                  <p className="font-medium">Never Married</p>
                </div>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Education & Career" icon={GraduationCap}>
            <div className="space-y-4">
              <div>
                <p className="font-medium">B.Tech in Computer Science</p>
                <p className="text-gray-600">IIT Bangalore - 2017</p>
              </div>
              <div>
                <p className="font-medium">Senior Software Engineer</p>
                <p className="text-gray-600">Google India - Present</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Languages Known" icon={Languages}>
            <div className="flex flex-wrap gap-2">
              {['English', 'Hindi', 'Kannada', 'Sanskrit'].map((lang) => (
                <Badge key={lang} text={lang} />
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Hobbies & Interests" icon={Camera}>
            <div className="flex flex-wrap gap-2">
              {['Photography', 'Traveling', 'Reading', 'Classical Music', 'Yoga', 'Temple Architecture'].map((hobby) => (
                <Badge key={hobby} text={hobby} />
              ))}
            </div>
          </InfoCard>
        </div>

        <InfoCard title="Family & Religious Background" icon={Users} className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium">Father</p>
              <p className="text-gray-600">Mr. Rajesh Sharma</p>
              <p className="text-gray-600">Business Owner</p>
            </div>
            <div>
              <p className="font-medium">Mother</p>
              <p className="text-gray-600">Mrs. Priya Sharma</p>
              <p className="text-gray-600">Homemaker</p>
            </div>
            <div className="md:col-span-2 mt-4">
              <p className="font-medium">Religious Details</p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-gray-600">Gotra</p>
                  <p className="font-medium">Kashyap</p>
                </div>
                <div>
                  <p className="text-gray-600">Rashi</p>
                  <p className="font-medium">Simha (Leo)</p>
                </div>
                <div>
                  <p className="text-gray-600">Nakshatra</p>
                  <p className="font-medium">Magha</p>
                </div>
                <div>
                  <p className="text-gray-600">Caste</p>
                  <p className="font-medium">Brahmin</p>
                </div>
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}

export default App;