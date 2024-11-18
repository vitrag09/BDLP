import { Mail, Phone } from 'lucide-react';

interface HeaderProps {
  name: string;
  occupation: string;
  email: string;
  phone: string;
  photo: string;
}

export function Header({ name, occupation, email, phone, photo }: HeaderProps) {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-4 relative overflow-hidden">
      {/* Decorative Om Symbol */}
      <div className="absolute top-0 right-0 text-8xl opacity-10 font-serif">ॐ</div>
      
      {/* Mandala Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557182630-1a089a3be4eb?q=80&w=1920')]"></div>
      
      {/* Decorative Border */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300"></div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Traditional Diya Icon */}
        <div className="text-center mb-4 text-yellow-300">🪔</div>
        
        <h1 className="text-4xl font-bold text-center mb-2 font-serif">।। Biodata ।।</h1>
        <div className="w-24 h-1 bg-yellow-300 mx-auto mb-8"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
            {/* Decorative Border around photo */}
            <div className="absolute inset-0 border-4 border-yellow-300 rounded-full opacity-50"></div>
            <img 
              src={photo}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 font-serif">{name}</h2>
            <p className="text-yellow-200 text-lg mb-4">{occupation}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>{phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}