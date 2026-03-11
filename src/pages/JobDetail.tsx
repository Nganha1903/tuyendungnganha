import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapPin, DollarSign, Clock, Briefcase, ChevronLeft, Sparkles, CheckCircle2, Share2, Bookmark } from 'lucide-react';
import { MOCK_JOBS } from '../types';
import { summarizeJob } from '../services/gemini';
import Markdown from 'react-markdown';
import { motion } from 'motion/react';

export default function JobDetail() {
  const { id } = useParams();
  const job = MOCK_JOBS.find(j => j.id === id);
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Không tìm thấy công việc này.</h2>
        <Link to="/jobs" className="text-indigo-600 mt-4 inline-block">Quay lại danh sách</Link>
      </div>
    );
  }

  const handleSummarize = async () => {
    setIsSummarizing(true);
    const result = await summarizeJob(job.description);
    setSummary(result || "Không thể tóm tắt.");
    setIsSummarizing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/jobs" className="flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Quay lại danh sách
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <img 
                  src={job.logo} 
                  alt={job.company} 
                  className="w-20 h-20 rounded-2xl object-cover border border-slate-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-2">{job.title}</h1>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-slate-500 font-medium">
                    <span className="text-brand-600">{job.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.postedAt}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Bookmark className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-100 mb-8">
              <div className="space-y-1">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Mức lương</p>
                <p className="font-bold text-slate-900 flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-brand-600" /> {job.salary}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Hình thức</p>
                <p className="font-bold text-slate-900 flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-brand-600" /> {job.type}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Kinh nghiệm</p>
                <p className="font-bold text-gray-900">3+ năm</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Cấp bậc</p>
                <p className="font-bold text-gray-900">Senior</p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Mô tả công việc</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Yêu cầu công việc</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* AI Summary Section */}
          <div className="bg-brand-50 p-8 rounded-[2.5rem] border border-brand-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-brand-600 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-brand-900">Tóm tắt nhanh bởi AI</h2>
              </div>
              {!summary && !isSummarizing && (
                <button 
                  onClick={handleSummarize}
                  className="text-sm font-bold text-brand-600 hover:text-brand-700"
                >
                  Tạo tóm tắt
                </button>
              )}
            </div>

            {isSummarizing ? (
              <div className="flex items-center gap-3 text-brand-400">
                <div className="w-5 h-5 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
                Đang phân tích mô tả công việc...
              </div>
            ) : summary ? (
              <div className="markdown-body">
                <Markdown>{summary}</Markdown>
              </div>
            ) : (
              <p className="text-brand-400 italic">
                Sử dụng AI để tóm tắt các điểm quan trọng nhất của công việc này giúp bạn tiết kiệm thời gian.
              </p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6">Sẵn sàng ứng tuyển?</h3>
            <Link 
              to={`/apply/${job.id}`}
              className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold hover:bg-brand-700 transition-all flex items-center justify-center gap-2 mb-4 shadow-lg shadow-brand-100"
            >
              Ứng tuyển ngay
            </Link>
            <p className="text-xs text-center text-gray-400">
              Hồ sơ của bạn sẽ được gửi trực tiếp đến nhà tuyển dụng.
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-bold text-sm text-gray-900 mb-4">Thông tin công ty</h4>
              <div className="flex items-center gap-3 mb-4">
                <img src={job.logo} className="w-10 h-10 rounded-lg" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{job.company}</p>
                  <p className="text-xs text-gray-500">Quy mô: 50-150 nhân viên</p>
                </div>
              </div>
              <Link to="#" className="text-sm font-bold text-indigo-600 hover:underline">Xem trang công ty</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
