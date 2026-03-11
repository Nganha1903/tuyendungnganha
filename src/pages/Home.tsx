import { motion } from 'motion/react';
import { Search, MapPin, TrendingUp, ArrowRight, Briefcase, Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_JOBS } from '../types';
import JobCard from '../components/JobCard';

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-4 h-4" /> Nền tảng tuyển dụng AI thế hệ mới
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight text-slate-900 mb-8 leading-[0.95] drop-shadow-sm">
                Kiến tạo <br />
                <span className="text-brand-600 italic">Sự nghiệp</span> <br />
                vững bền.
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg">
                Ngân Hà kết nối nhân tài với những cơ hội bứt phá, 
                tối ưu hóa quy trình ứng tuyển bằng trí tuệ nhân tạo.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/jobs"
                  className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-700 shadow-xl shadow-brand-200 transition-all flex items-center gap-3 active:scale-95"
                >
                  Khám phá việc làm <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
                  Dành cho nhà tuyển dụng
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100">
                <img 
                  src="https://picsum.photos/seed/career/800/1000" 
                  alt="Career" 
                  className="rounded-[2.5rem] w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-12 top-1/4 bg-white p-5 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4"
                >
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Ứng tuyển nhanh</p>
                    <p className="text-lg font-bold text-slate-900">1-Click Apply</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -right-8 bottom-1/4 bg-white p-5 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4"
                >
                  <div className="bg-brand-100 p-3 rounded-2xl">
                    <Sparkles className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">AI Matching</p>
                    <p className="text-lg font-bold text-slate-900">98% Phù hợp</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative background shapes */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Bar Floating */}
      <section className="max-w-5xl mx-auto px-4 -mt-12 relative z-30">
        <div className="bg-white/80 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl border border-white/50 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center gap-4 px-6 py-4 rounded-[2rem] bg-slate-50/50 border border-slate-100 focus-within:bg-white focus-within:border-brand-200 transition-all">
            <Search className="w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Vị trí công việc, kỹ năng..." 
              className="w-full outline-none text-slate-900 font-semibold bg-transparent"
            />
          </div>
          <div className="flex-1 flex items-center gap-4 px-6 py-4 rounded-[2rem] bg-slate-50/50 border border-slate-100">
            <MapPin className="w-5 h-5 text-slate-400" />
            <select className="w-full outline-none text-slate-900 font-semibold bg-transparent">
              <option>Toàn quốc</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Hà Nội</option>
            </select>
          </div>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-[2rem] font-bold hover:bg-slate-800 transition-all active:scale-95">
            Tìm kiếm
          </button>
        </div>
      </section>

      {/* Trusted By */}
      <section className="max-w-7xl mx-auto px-4 mt-24 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Được tin dùng bởi các tập đoàn hàng đầu</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale">
          <div className="text-2xl font-black font-display">GOOGLE</div>
          <div className="text-2xl font-black font-display">META</div>
          <div className="text-2xl font-black font-display">VINFAST</div>
          <div className="text-2xl font-black font-display">SHOPEE</div>
          <div className="text-2xl font-black font-display">GRAB</div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-widest mb-4">
              <TrendingUp className="w-4 h-4" /> Cơ hội mới nhất
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">Việc làm <span className="text-brand-600">Hot</span> trong tuần</h2>
          </div>
          <Link to="/jobs" className="group flex items-center gap-2 text-slate-900 font-bold hover:text-brand-600 transition-all">
            Xem tất cả <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_JOBS.slice(0, 6).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 card-hover">
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="w-7 h-7 text-brand-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Bảo mật tuyệt đối</h3>
            <p className="text-slate-500 leading-relaxed">Thông tin cá nhân và hồ sơ của bạn được bảo vệ bằng các tiêu chuẩn an ninh cao nhất.</p>
          </div>
          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white card-hover">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <Globe className="w-7 h-7 text-brand-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Kết nối toàn cầu</h3>
            <p className="text-slate-400 leading-relaxed">Tiếp cận các cơ hội việc làm từ xa (Remote) tại các công ty công nghệ hàng đầu thế giới.</p>
          </div>
          <div className="bg-brand-600 p-10 rounded-[2.5rem] text-white card-hover">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Hỗ trợ 24/7</h3>
            <p className="text-brand-100 leading-relaxed">Trợ lý AI giúp bạn tối ưu CV và chuẩn bị phỏng vấn bất cứ lúc nào bạn cần.</p>
          </div>
        </div>
      </section>

      {/* AI Feature Promo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
        <div className="bg-brand-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-brand-200">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 leading-[0.95] tracking-tight">
              Tối ưu hóa hồ sơ với <br />
              <span className="text-brand-200 italic">Ngân Hà AI</span>
            </h2>
            <p className="text-brand-50 text-xl mb-12 leading-relaxed opacity-90">
              Công nghệ AI của chúng tôi giúp bạn viết thư xin việc chuyên nghiệp, 
              tóm tắt yêu cầu công việc và gợi ý các kỹ năng cần bổ sung.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-white text-brand-600 px-10 py-5 rounded-2xl font-bold hover:bg-brand-50 transition-all active:scale-95 shadow-xl">
                Trải nghiệm ngay
              </button>
            </div>
          </div>
          
          {/* Abstract AI visual */}
          <div className="absolute right-0 top-0 bottom-0 hidden lg:block pr-20 py-20">
            <div className="h-full aspect-square relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 border border-white/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 flex items-center justify-center shadow-2xl">
                  <Briefcase className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
