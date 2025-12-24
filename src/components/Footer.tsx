

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full p-1.5">
                <img src="/logo.png" alt="Logo Koperasi" className="w-full h-full object-contain" />
              </div>
              <span className="text-white">
                Koperasi Prabu Pinisi Sejahtera
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Bersatu, Bertumbuh, Sejahtera Bersama
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">
              Kontak
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: info@prabupinisi.co.id</p>
              <p>Telepon: (021) xxxx-xxxx</p>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">
              Tentang Kami
            </h4>
            <p className="text-sm text-gray-400">
              Koperasi yang fokus pada pemberdayaan ekonomi masyarakat melalui 
              kerjasama di bidang pangan dan distribusi.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Koperasi Prabu Pinisi Sejahtera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}