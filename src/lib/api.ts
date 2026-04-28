// Mock API data - Replace with actual API when provided
export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  views: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "1", name: "Teknologi", slug: "teknologi" },
  { id: "2", name: "Olahraga", slug: "olahraga" },
  { id: "3", name: "Bisnis", slug: "bisnis" },
  { id: "4", name: "Hiburan", slug: "hiburan" },
  { id: "5", name: "Politik", slug: "politik" },
  { id: "6", name: "Kesehatan", slug: "kesehatan" },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Perkembangan AI di Indonesia Semakin Pesat",
    description: "Teknologi kecerdasan buatan terus berkembang dan mulai diterapkan di berbagai sektor industri Indonesia.",
    content: `<p>Perkembangan teknologi kecerdasan buatan (AI) di Indonesia menunjukkan tren yang sangat positif dalam beberapa tahun terakhir. Berbagai sektor industri mulai mengadopsi teknologi ini untuk meningkatkan efisiensi dan produktivitas.</p>
    <p>Menurut data dari Kementerian Komunikasi dan Informatika, investasi di bidang AI telah meningkat sebesar 150% dibandingkan tahun lalu. Hal ini menunjukkan komitmen pemerintah dan swasta dalam mendukung transformasi digital.</p>
    <p>Beberapa startup lokal juga mulai mengembangkan solusi berbasis AI untuk berbagai kebutuhan, mulai dari layanan kesehatan hingga pertanian. Inovasi-inovasi ini diharapkan dapat membantu memecahkan berbagai permasalahan yang ada di masyarakat.</p>
    <p>Para ahli memprediksi bahwa dalam lima tahun ke depan, AI akan menjadi bagian integral dari kehidupan sehari-hari masyarakat Indonesia. Persiapan sumber daya manusia yang kompeten di bidang ini menjadi prioritas utama.</p>`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    category: "Teknologi",
    author: "Ahmad Rizki",
    publishedAt: "2026-04-28T10:00:00Z",
    views: 15420,
  },
  {
    id: "2",
    title: "Timnas Indonesia Lolos ke Piala Dunia 2026",
    description: "Sejarah baru tercipta! Tim nasional Indonesia berhasil lolos ke Piala Dunia untuk pertama kalinya.",
    content: `<p>Momen bersejarah akhirnya terjadi. Tim nasional Indonesia berhasil mengukir sejarah dengan lolos ke Piala Dunia 2026 yang akan diselenggarakan di Amerika Serikat, Kanada, dan Meksiko.</p>
    <p>Kemenangan dramatis 2-1 atas tim kuat Asia dalam laga kualifikasi terakhir menjadi tiket emas bagi Garuda untuk terbang ke panggung tertinggi sepak bola dunia.</p>
    <p>Pelatih tim nasional menyatakan rasa syukur dan bangga atas pencapaian ini. "Ini adalah hasil kerja keras seluruh pemain, staf, dan dukungan luar biasa dari suporter Indonesia," ujarnya dalam konferensi pers.</p>
    <p>Jutaan masyarakat Indonesia merayakan pencapaian bersejarah ini di berbagai kota. Euforia kegembiraan terasa di seluruh penjuru negeri.</p>`,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
    category: "Olahraga",
    author: "Budi Santoso",
    publishedAt: "2026-04-28T08:30:00Z",
    views: 89250,
  },
  {
    id: "3",
    title: "Rupiah Menguat di Tengah Ketidakpastian Global",
    description: "Nilai tukar rupiah terhadap dolar AS mengalami penguatan signifikan di tengah gejolak ekonomi global.",
    content: `<p>Nilai tukar rupiah terhadap dolar Amerika Serikat menunjukkan penguatan signifikan dalam perdagangan hari ini. Mata uang Garuda ditutup di level Rp 14.850 per dolar AS, menguat 0,8% dari penutupan sebelumnya.</p>
    <p>Penguatan ini terjadi di tengah ketidakpastian ekonomi global yang masih berlangsung. Para analis menilai bahwa fundamental ekonomi Indonesia yang solid menjadi faktor utama penguatan rupiah.</p>
    <p>Bank Indonesia menyatakan akan terus menjaga stabilitas nilai tukar melalui berbagai instrumen kebijakan yang tersedia. Cadangan devisa yang mencukupi menjadi bantalan yang kuat.</p>
    <p>Pelaku pasar menyambut positif perkembangan ini dan berharap tren penguatan dapat berlanjut dalam beberapa pekan ke depan.</p>`,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    category: "Bisnis",
    author: "Dewi Lestari",
    publishedAt: "2026-04-27T14:00:00Z",
    views: 7830,
  },
  {
    id: "4",
    title: "Film Indonesia Raih Penghargaan di Festival Cannes",
    description: "Karya sineas Indonesia mendapat pengakuan internasional dengan meraih penghargaan bergengsi.",
    content: `<p>Industri perfilman Indonesia kembali mencatat prestasi membanggakan di kancah internasional. Film karya sutradara muda Indonesia berhasil meraih penghargaan Special Jury Prize di Festival Film Cannes 2026.</p>
    <p>Film yang mengangkat tema kehidupan masyarakat pesisir ini berhasil memikat juri dengan cerita yang autentik dan sinematografi yang memukau.</p>
    <p>Sutradara mengucapkan terima kasih kepada seluruh kru dan aktor yang telah bekerja keras. "Penghargaan ini adalah untuk seluruh insan perfilman Indonesia," katanya.</p>
    <p>Menteri Pariwisata dan Ekonomi Kreatif menyambut baik pencapaian ini dan berjanji akan terus mendukung perkembangan industri film nasional.</p>`,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop",
    category: "Hiburan",
    author: "Siti Aminah",
    publishedAt: "2026-04-27T09:15:00Z",
    views: 23100,
  },
  {
    id: "5",
    title: "Pemerintah Luncurkan Program Ekonomi Hijau",
    description: "Inisiatif baru untuk mendorong pertumbuhan ekonomi berkelanjutan dan ramah lingkungan.",
    content: `<p>Pemerintah Indonesia resmi meluncurkan Program Ekonomi Hijau Nasional yang bertujuan untuk mendorong pertumbuhan ekonomi berkelanjutan sekaligus menjaga kelestarian lingkungan.</p>
    <p>Program ini mencakup berbagai insentif bagi industri yang mengadopsi praktik ramah lingkungan, pengembangan energi terbarukan, dan pengelolaan sampah yang lebih baik.</p>
    <p>Presiden dalam sambutannya menegaskan komitmen Indonesia untuk mencapai net zero emission pada tahun 2060. "Ekonomi hijau bukan pilihan, tapi keharusan," tegasnya.</p>
    <p>Para pelaku usaha menyambut positif program ini dan berharap implementasinya dapat berjalan dengan baik di lapangan.</p>`,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
    category: "Politik",
    author: "Hendra Wijaya",
    publishedAt: "2026-04-26T16:30:00Z",
    views: 12450,
  },
  {
    id: "6",
    title: "Vaksin Demam Berdarah Gratis untuk Masyarakat",
    description: "Kementerian Kesehatan menyediakan vaksin demam berdarah secara gratis di seluruh puskesmas.",
    content: `<p>Dalam upaya menekan angka kasus demam berdarah dengue (DBD), Kementerian Kesehatan mengumumkan program vaksinasi gratis yang akan dimulai bulan depan.</p>
    <p>Vaksin akan tersedia di seluruh puskesmas dan rumah sakit pemerintah di Indonesia. Prioritas diberikan kepada anak-anak usia 6-16 tahun yang tinggal di daerah endemis.</p>
    <p>Menteri Kesehatan menjelaskan bahwa vaksin ini telah melalui uji klinis yang ketat dan terbukti efektif mencegah infeksi DBD hingga 80%.</p>
    <p>Masyarakat diimbau untuk segera mendaftarkan diri melalui aplikasi kesehatan atau langsung ke fasilitas kesehatan terdekat.</p>`,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=400&fit=crop",
    category: "Kesehatan",
    author: "dr. Maya Putri",
    publishedAt: "2026-04-26T11:00:00Z",
    views: 34560,
  },
  {
    id: "7",
    title: "Startup Indonesia Raih Pendanaan $100 Juta",
    description: "Startup teknologi pendidikan asal Indonesia berhasil mendapatkan pendanaan seri C yang fantastis.",
    content: `<p>Startup edtech asal Indonesia berhasil meraih pendanaan seri C senilai $100 juta dari konsorsium investor global. Ini merupakan salah satu pendanaan terbesar di sektor teknologi pendidikan Asia Tenggara.</p>
    <p>Dana segar ini akan digunakan untuk ekspansi ke pasar Asia Tenggara lainnya dan pengembangan fitur berbasis AI untuk personalisasi pembelajaran.</p>
    <p>CEO startup tersebut menyatakan optimisme terhadap masa depan pendidikan digital di Indonesia. "Kami ingin memberikan akses pendidikan berkualitas untuk semua," ujarnya.</p>
    <p>Investor utama menyebutkan bahwa potensi pasar pendidikan digital di Indonesia sangat besar dengan populasi muda yang tinggi.</p>`,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    category: "Teknologi",
    author: "Ricky Susanto",
    publishedAt: "2026-04-25T13:45:00Z",
    views: 18920,
  },
  {
    id: "8",
    title: "Atlet Bulu Tangkis Pecahkan Rekor Dunia",
    description: "Pebulu tangkis Indonesia mencatatkan rekor dunia baru dalam pertandingan internasional.",
    content: `<p>Atlet bulu tangkis tunggal putra Indonesia berhasil mencatatkan rekor dunia baru untuk smash tercepat dalam pertandingan resmi. Pukulan dengan kecepatan 493 km/jam tersebut terjadi saat final turnamen Super Series.</p>
    <p>Rekor sebelumnya yang bertahan selama 8 tahun akhirnya berhasil dipecahkan oleh pemain berusia 23 tahun ini.</p>
    <p>Pelatih nasional mengapresiasi pencapaian luar biasa ini. "Ini hasil latihan keras dan bakat luar biasa yang dimilikinya," kata pelatih.</p>
    <p>BWF resmi mencatat rekor baru ini dan memberikan sertifikat penghargaan kepada sang atlet.</p>`,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=400&fit=crop",
    category: "Olahraga",
    author: "Tommy Kurniawan",
    publishedAt: "2026-04-25T10:20:00Z",
    views: 45230,
  },
  {
    id: "9",
    title: "Harga Properti di Kota Besar Terus Meningkat",
    description: "Tren kenaikan harga properti di Jakarta dan kota-kota besar lainnya berlanjut.",
    content: `<p>Harga properti di kota-kota besar Indonesia terus menunjukkan tren kenaikan sepanjang tahun 2026. Jakarta mencatat kenaikan rata-rata 8% dibandingkan tahun lalu.</p>
    <p>Kenaikan ini didorong oleh permintaan yang tinggi, terutama dari kalangan milenial dan Gen Z yang mulai mencari hunian pertama mereka.</p>
    <p>Para pengembang properti melihat peluang besar di sektor rumah susun dan apartemen dengan harga terjangkau.</p>
    <p>Pemerintah terus mendorong program rumah subsidi untuk membantu masyarakat berpenghasilan rendah memiliki hunian layak.</p>`,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    category: "Bisnis",
    author: "Linda Hartono",
    publishedAt: "2026-04-24T15:00:00Z",
    views: 9870,
  },
  {
    id: "10",
    title: "Konser Musik Internasional Digelar di Jakarta",
    description: "Artis internasional ternama akan menggelar konser spektakuler di ibu kota.",
    content: `<p>Penggemar musik di Indonesia akan dimanjakan dengan konser spektakuler dari artis internasional ternama yang akan digelar di Gelora Bung Karno bulan depan.</p>
    <p>Tiket yang dijual mulai dari Rp 500 ribu hingga Rp 5 juta ludes terjual hanya dalam waktu 2 jam setelah dibuka.</p>
    <p>Promotor menjanjikan pengalaman konser yang luar biasa dengan teknologi panggung terkini dan tata suara kelas dunia.</p>
    <p>Ini merupakan kali pertama sang artis menggelar konser di Indonesia setelah 5 tahun absen.</p>`,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=400&fit=crop",
    category: "Hiburan",
    author: "Rina Melati",
    publishedAt: "2026-04-24T09:30:00Z",
    views: 67890,
  },
  {
    id: "11",
    title: "DPR Sahkan UU Perlindungan Data Pribadi Baru",
    description: "Regulasi baru untuk melindungi privasi data warga negara Indonesia resmi berlaku.",
    content: `<p>Dewan Perwakilan Rakyat resmi mengesahkan Undang-Undang Perlindungan Data Pribadi yang baru dan lebih komprehensif.</p>
    <p>UU ini mengatur tentang hak-hak pemilik data, kewajiban pengelola data, dan sanksi bagi pelanggar yang lebih tegas.</p>
    <p>Perusahaan teknologi diberi waktu satu tahun untuk menyesuaikan sistem mereka dengan ketentuan baru ini.</p>
    <p>Para aktivis privasi digital menyambut positif langkah ini sebagai kemajuan penting dalam perlindungan hak digital warga negara.</p>`,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
    category: "Politik",
    author: "Agus Pratama",
    publishedAt: "2026-04-23T14:15:00Z",
    views: 11200,
  },
  {
    id: "12",
    title: "Terobosan Baru dalam Pengobatan Kanker",
    description: "Peneliti Indonesia menemukan metode baru yang menjanjikan dalam pengobatan kanker.",
    content: `<p>Tim peneliti dari universitas terkemuka Indonesia berhasil mengembangkan metode pengobatan kanker baru menggunakan nanopartikel yang lebih efektif dan minim efek samping.</p>
    <p>Penelitian yang berlangsung selama 5 tahun ini telah menunjukkan hasil positif pada uji klinis fase kedua.</p>
    <p>Metode ini menargetkan sel kanker secara spesifik tanpa merusak sel-sel sehat di sekitarnya.</p>
    <p>Jika berhasil melewati semua tahap uji klinis, metode ini diharapkan dapat tersedia untuk pasien dalam 3-4 tahun ke depan.</p>`,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=400&fit=crop",
    category: "Kesehatan",
    author: "Prof. dr. Bambang",
    publishedAt: "2026-04-23T08:00:00Z",
    views: 28750,
  },
];

// Simulated API functions
export async function getBreakingNews(): Promise<Article[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return articles.slice(0, 4);
}

export async function getRecommendedArticles(preferredCategories: string[]): Promise<Article[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (preferredCategories.length === 0) {
    return articles;
  }
  return articles.filter((article) =>
    preferredCategories.includes(article.category)
  );
}

export async function getArticles(
  page: number = 1,
  limit: number = 5,
  category?: string,
  search?: string
): Promise<{ articles: Article[]; hasMore: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  let filtered = [...articles];
  
  if (category && category !== "all") {
    filtered = filtered.filter((a) => a.category.toLowerCase() === category.toLowerCase());
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(searchLower) ||
        a.description.toLowerCase().includes(searchLower)
    );
  }
  
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedArticles = filtered.slice(start, end);
  
  return {
    articles: paginatedArticles,
    hasMore: end < filtered.length,
  };
}

export async function getArticleById(id: string): Promise<Article | null> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return articles.find((a) => a.id === id) || null;
}

export async function getRelatedArticles(articleId: string, category: string): Promise<Article[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return articles
    .filter((a) => a.id !== articleId && a.category === category)
    .slice(0, 3);
}

export async function getCategories(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return categories;
}
