import { TrendingUp, Users, Briefcase } from 'lucide-react';

export function WhyJoin() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Kenapa Bergabung dengan Koperasi?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami percaya bahwa koperasi bukan hanya tempat menabung,
            tetapi wadah untuk tumbuh bersama dan menciptakan kemandirian ekonomi masyarakat.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Sebagai anggota, Anda tidak hanya mendapatkan bagi hasil, tetapi juga:
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-emerald-600" />
              </div>
              <p className="text-gray-800">
                Akses peluang usaha riil
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <p className="text-gray-800">
                Jaringan distribusi pangan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <p className="text-gray-800">
                Kesempatan terlibat langsung dalam ekosistem bisnis koperasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
