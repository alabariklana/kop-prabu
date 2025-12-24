import { Coins, Calendar } from 'lucide-react';

export function MembershipScheme() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            Skema Keanggotaan yang Terjangkau
          </h2>
          <p className="text-lg text-gray-600">
            Untuk bergabung menjadi anggota:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Coins className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-gray-900">
                Simpanan Pokok
              </h3>
            </div>
            <div className="text-center py-6">
              <div className="text-4xl text-emerald-600 mb-2">
                💰 Rp250.000
              </div>
              <p className="text-gray-600">
                Dibayarkan satu kali di awal
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-gray-900">
                Simpanan Wajib
              </h3>
            </div>
            <div className="text-center py-6">
              <div className="text-4xl text-teal-600 mb-2">
                💰 Rp50.000 / bulan
              </div>
              <p className="text-gray-600">
                Dibayarkan satu bulan setelah simpanan pokok
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto text-center shadow-lg border border-gray-200">
          <p className="text-lg text-gray-700">
            Dengan kontribusi yang ringan, Anda sudah menjadi bagian dari ekosistem usaha koperasi.
          </p>
        </div>
      </div>
    </section>
  );
}
