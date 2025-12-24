import { Shield, ArrowRight } from 'lucide-react';

export function RealOpportunity() {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
              <Shield className="w-8 h-8 text-emerald-300" />
            </div>
          </div>

          <h2 className="mb-8 text-white">
            Bukan Janji, Tapi Kesempatan Nyata
          </h2>

          <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
            Koperasi Prabu Pinisi Sejahtera dibangun dengan model usaha yang jelas, mitra yang nyata, dan kebutuhan pasar yang terus berjalan.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/20">
            <div className="space-y-4">
              <p className="text-lg text-white flex items-center justify-center gap-3">
                <span>👉</span>
                <span>Ini bukan skema cepat kaya.</span>
              </p>
              <p className="text-lg text-white flex items-center justify-center gap-3">
                <span>👉</span>
                <span>Ini adalah jalan membangun kesejahteraan secara bersama dan berkelanjutan.</span>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl text-white mb-4">
              Daftar Sekarang & Jadi Bagian dari Perubahan
            </h3>
            <p className="text-emerald-100 mb-8">
              Ambil peran dalam membangun kemandirian ekonomi masyarakat.
            </p>
          </div>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-10 py-5 rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            <span>Daftar Menjadi Anggota</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="mt-8 text-emerald-200">
            💬 Mulai langkah kecil hari ini, untuk peluang besar di masa depan.
          </p>
        </div>
      </div>
    </section>
  );
}
