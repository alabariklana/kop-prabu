import { Users } from 'lucide-react';

export function Management() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          <h2 className="mb-4 text-gray-900">
            Kepengurusan Koperasi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tim pengurus yang berdedikasi untuk membangun kesejahteraan bersama anggota koperasi
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img 
              src="/Koperasi.webp"
              alt="Kepengurusan Koperasi Prabu Pinisi Sejahtera" 
              className="w-full h-auto"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Koperasi Prabu Pinisi Sejahtera dikelola oleh tim pengurus yang berpengalaman dan berkomitmen untuk memajukan kesejahteraan anggota.
              </p>
              <p className="text-gray-600">
                Dengan transparansi dan profesionalitas, kami memastikan setiap keputusan dibuat demi kepentingan bersama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
