import { CheckCircle2 } from 'lucide-react';

export function WhoShouldJoin() {
  const targetAudience = [
    'Masyarakat yang ingin usaha berbasis koperasi',
    'Pelaku UMKM & wirausaha pangan',
    'Individu yang ingin pendapatan jangka panjang',
    'Siapa saja yang ingin tumbuh bersama ekonomi kerakyatan'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-gray-900">
            Siapa yang Cocok Bergabung?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-200"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
