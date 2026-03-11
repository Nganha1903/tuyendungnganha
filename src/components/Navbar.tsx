import { Link } from 'react-router-dom';
import { Briefcase, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-brand-600 p-2 rounded-xl group-hover:rotate-6 transition-transform duration-300">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight text-slate-900">Ngân Hà</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/jobs" className="text-sm font-semibold text-slate-500 hover:text-brand-600 transition-colors">Tìm việc làm</Link>
              <Link to="#" className="text-sm font-semibold text-slate-500 hover:text-brand-600 transition-colors">Công ty</Link>
              <Link to="#" className="text-sm font-semibold text-slate-500 hover:text-brand-600 transition-colors">Cẩm nang</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-100 transition-all">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Tìm kiếm nhanh..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-40 outline-none font-medium"
              />
            </div>
            <div className="h-6 w-px bg-slate-200 hidden md:block" />
            <button className="hidden md:block text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">
              Đăng nhập
            </button>
            <button className="bg-brand-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-700 shadow-lg shadow-brand-200 transition-all active:scale-95">
              Đăng tuyển
            </button>
            <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
