import { useState } from 'react';
import { Search, MapPin, Filter, X, SlidersHorizontal } from 'lucide-react';
import { MOCK_JOBS } from '../types';
import JobCard from '../components/JobCard';
import { motion, AnimatePresence } from 'motion/react';

export default function JobList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Tất cả', 'IT / Phần mềm', 'Thiết kế', 'Marketing', 'Truyền thông', 'Kinh doanh'];

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-widest mb-4">
            <Search className="w-4 h-4" /> Khám phá cơ hội
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 leading-[0.95] tracking-tight">
            Tìm kiếm công việc <br />
            phù hợp với <span className="text-brand-600 italic">bạn.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Sử dụng bộ lọc thông minh để tìm thấy vị trí mơ ước trong hàng ngàn tin tuyển dụng mỗi ngày.
          </p>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex-1 sm:w-80 bg-white border border-slate-100 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl shadow-slate-100/50 focus-within:border-brand-300 transition-all">
            <Search className="w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Vị trí, công ty..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none text-slate-900 font-semibold"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 ${
              showFilters ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" /> Bộ lọc
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div 
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: 'auto', opacity: 1, marginBottom: 48 }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-900">Lọc theo danh mục</h3>
                <button onClick={() => setShowFilters(false)} className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-all">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all active:scale-95 ${
                      selectedCategory === cat 
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-200' 
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="col-span-full py-32 text-center">
            <div className="bg-slate-100 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Không tìm thấy kết quả</h3>
            <p className="text-slate-500 max-w-md mx-auto">Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thấy nhiều cơ hội hơn.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('Tất cả');}}
              className="mt-8 text-brand-600 font-bold hover:underline"
            >
              Xóa tất cả bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
