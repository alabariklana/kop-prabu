import { Sprout, Truck, Users as UsersIcon, TrendingUp } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Sprout,
      title: 'Bagi Hasil yang Transparan',
      description: 'Nikmati pembagian hasil usaha koperasi secara adil dan terbuka.',
      color: 'emerald'
    },
    {
      icon: Truck,
      title: 'Peluang Usaha Berbasis Kebutuhan Nyata',
      description: 'Terlibat dalam',
      items: [
        'Supply bahan baku BGN',
        'Operasional & kemitraan RPK',
        'Distribusi pangan bersama BULOG'
      ],
      color: 'teal'
    },
    {
      icon: UsersIcon,
      title: 'Koperasi Berbasis Kemasyarakatan',
      description: 'Dikelola untuk kepentingan anggota dan masyarakat, bukan segelintir pihak.',
      color: 'cyan'
    },
    {
      icon: TrendingUp,
      title: 'Potensi Pertumbuhan Jangka Panjang',
      description: 'Usaha pangan adalah kebutuhan pokok—peluangnya stabil dan berkelanjutan.',
      color: 'emerald'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            Manfaat Menjadi Anggota
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {benefit.description}
                    </p>
                    {benefit.items && (
                      <ul className="space-y-2">
                        {benefit.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
