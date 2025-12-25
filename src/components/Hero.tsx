import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/mbg.webp"
            alt="Koperasi Prabu Pinisi Sejahtera"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-teal-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="flex items-start mb-6">
              <div className="w-24 h-24 bg-white rounded-full p-2 shadow-2xl">
                <img src="/logo.png" alt="Logo Koperasi Prabu Pinisi Sejahtera" className="w-full h-full object-contain" />
              </div>
            </div>

            <h1 className="text-lg font-medium mb-4 text-white">
              Koperasi Prabu Pinisi Sejahtera
            </h1>
            
            <p className="text-2xl font-bold sm:text-4xl text-emerald-50 mb-4">
              Bersatu, Bertumbuh, Sejahtera Bersama
            </p>

            <p className="text-base font-light sm:text-lg text-emerald-100 mb-12 leading-relaxed">
              Jadilah bagian dari koperasi berbasis kemasyarakatan yang berperan aktif dalam pemberdayaan ekonomi pangan dan kemitraan strategis.
            </p>

            <button
        onClick={() => navigate('/daftar')}
        className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl"
      >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}