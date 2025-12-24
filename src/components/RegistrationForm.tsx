import { useState } from 'react';
import { UserPlus, Phone, MapPin, Send, Upload, Calendar, CreditCard, Building2, User } from 'lucide-react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    // Status
    membershipType: 'biasa',
    
    // Data Pendaftar
    fullName: '',
    nikNip: '',
    birthPlace: '',
    birthDate: '',
    rank: '',
    homeAddress: '',
    phone: '',
    workUnit: '',
    
    // Informasi Tambahan
    registrationDate: new Date().toISOString().split('T')[0],
    
    // Pembayaran
    paymentMethod: 'transfer',
    
    // Identitas Kartu
    bloodType: '',
    cardAddress: '',
    photoFile: null as File | null,
    
    // Persetujuan
    agreement: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        membershipType: 'biasa',
        fullName: '',
        nikNip: '',
        birthPlace: '',
        birthDate: '',
        rank: '',
        homeAddress: '',
        phone: '',
        workUnit: '',
        registrationDate: new Date().toISOString().split('T')[0],
        paymentMethod: 'transfer',
        bloodType: '',
        cardAddress: '',
        photoFile: null,
        agreement: false
      });
      setPhotoPreview(null);
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        photoFile: file
      });
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="registration-form" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="mb-4 text-gray-900">
            Formulir Pendaftaran Anggota
          </h2>
          <p className="text-lg text-gray-600">
            Isi data Anda dengan lengkap untuk memulai proses pendaftaran
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">
                Terima kasih!
              </h3>
              <p className="text-gray-600">
                Data Anda telah kami terima. Tim kami akan menghubungi Anda segera.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Status Keanggotaan */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-600" />
                  Status Keanggotaan
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="membershipType"
                      value="biasa"
                      checked={formData.membershipType === 'biasa'}
                      onChange={handleChange}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">1. Anggota Biasa</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="membershipType"
                      value="luar-biasa"
                      checked={formData.membershipType === 'luar-biasa'}
                      onChange={handleChange}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">2. Anggota Luar Biasa</span>
                  </label>
                </div>
              </div>

              {/* Data Pendaftar */}
              <div>
                <h3 className="text-gray-900 mb-6">
                  Data Pendaftar
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 mb-2">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label htmlFor="nikNip" className="block text-gray-700 mb-2">
                      NIK / NIP / NIK <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nikNip"
                      name="nikNip"
                      value={formData.nikNip}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="Masukkan NIK / NIP"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="birthPlace" className="block text-gray-700 mb-2">
                        Tempat Lahir <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="birthPlace"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                        placeholder="Kota kelahiran"
                      />
                    </div>

                    <div>
                      <label htmlFor="birthDate" className="block text-gray-700 mb-2">
                        Tanggal Lahir <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rank" className="block text-gray-700 mb-2">
                      Pangkat / Golongan
                    </label>
                    <input
                      type="text"
                      id="rank"
                      name="rank"
                      value={formData.rank}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="Pangkat atau golongan (jika ada)"
                    />
                  </div>

                  <div>
                    <label htmlFor="homeAddress" className="block text-gray-700 mb-2">
                      Alamat Rumah <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        id="homeAddress"
                        name="homeAddress"
                        value={formData.homeAddress}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                        placeholder="Alamat lengkap rumah"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      No. Telp. / HP <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="workUnit" className="block text-gray-700 mb-2">
                      Unit Kerja
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="workUnit"
                        name="workUnit"
                        value={formData.workUnit}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                        placeholder="Nama instansi atau unit kerja"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Informasi Simpanan */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  Informasi Simpanan
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>Simpanan Pokok:</span>
                    <span className="font-semibold">Rp 100.000,-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Simpanan Wajib (3 Bulan Pertama):</span>
                    <span className="font-semibold">Rp 150.000,- / bulan</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-4 pt-4 border-t border-blue-200">
                    Total Pendaftaran awal Rp. 250.000,- dilaksanakan dengan cara:
                  </div>
                </div>
              </div>

              {/* Metode Pembayaran */}
              <div>
                <h3 className="text-gray-900 mb-4">
                  Metode Pembayaran
                </h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="tunai"
                      checked={formData.paymentMethod === 'tunai'}
                      onChange={handleChange}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 mt-1"
                    />
                    <div>
                      <div className="text-gray-900">Tunai bersama surat ini</div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={handleChange}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 mt-1"
                    />
                    <div>
                      <div className="text-gray-900 mb-1">Transfer ke Rekening</div>
                      <div className="text-sm text-gray-600">
                        KOPRABU SEJAHTERA<br />
                        No. Rek: <span className="font-mono font-semibold">064-20188-7788-564</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Identitas untuk Kartu */}
              <div>
                <h3 className="text-gray-900 mb-6">
                  Identitas Diri untuk Pembuatan Kartu Anggota
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="photo" className="block text-gray-700 mb-2">
                      Pas Foto Berwarna 3x4 (1 lembar) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-40 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                          {photoPreview ? (
                            <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-center p-4">
                              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <span className="text-xs text-gray-500">3x4</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <input
                          type="file"
                          id="photo"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Upload foto formal dengan ukuran 3x4 cm, background merah/biru
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bloodType" className="block text-gray-700 mb-2">
                      Golongan Darah
                    </label>
                    <select
                      id="bloodType"
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Pilih golongan darah</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cardAddress" className="block text-gray-700 mb-2">
                      Alamat (untuk Kartu)
                    </label>
                    <textarea
                      id="cardAddress"
                      name="cardAddress"
                      value={formData.cardAddress}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Alamat singkat yang akan dicetak di kartu anggota"
                    />
                  </div>
                </div>
              </div>

              {/* Pernyataan */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-4">
                  Pernyataan
                </h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p>Setelah menjadi anggota KOPRABU saya menyatakan diri sanggup:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Menaati Anggaran Dasar KOPRABU SEJAHTERA;</li>
                    <li>Menaati Anggaran Rumah Tangga KOPRABU SEJAHTERA;</li>
                    <li>Menaati Peraturan Khusus KOPRABU SEJAHTERA;</li>
                    <li>Secara aktif memajukan KOPRABU SEJAHTERA;</li>
                  </ol>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 rounded mt-1"
                  />
                  <span className="text-gray-700">
                    Saya menyetujui dan sanggup menaati seluruh peraturan yang berlaku di KOPRABU SEJAHTERA <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pendaftaran</span>
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-gray-600 mt-8">
          Ada pertanyaan? Hubungi kami di <a href="mailto:koperasiprabupinisisejahter@gmail.com" className="text-emerald-600 hover:underline">koperasiprabupinisisejahter@gmail.com</a>
        </p>
      </div>
    </section>
  );
}