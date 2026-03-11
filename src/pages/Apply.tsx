import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, Sparkles, Send, FileText, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { MOCK_JOBS } from '../types';
import { generateCoverLetter } from '../services/gemini';
import Markdown from 'react-markdown';
import { motion } from 'motion/react';

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = MOCK_JOBS.find(j => j.id === id);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    coverLetter: '',
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleGenerateAI = async () => {
    if (!formData.skills) {
      alert("Vui lòng nhập một vài kỹ năng của bạn để AI có thể viết thư tốt hơn.");
      return;
    }
    setIsGenerating(true);
    const letter = await generateCoverLetter(job.title, job.description, formData.skills);
    setFormData({ ...formData, coverLetter: letter || "" });
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl"
        >
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4">Ứng tuyển thành công!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Hồ sơ của bạn đã được gửi đến <strong>{job.company}</strong>. 
            Nhà tuyển dụng sẽ liên hệ với bạn qua email nếu hồ sơ phù hợp.
          </p>
          <button 
            onClick={() => navigate('/jobs')}
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all"
          >
            Tìm thêm việc làm khác
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to={`/job/${job.id}`} className="flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Quay lại chi tiết công việc
      </Link>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
        <div className="bg-brand-600 p-10 text-white">
          <h1 className="text-4xl font-display font-extrabold mb-4 leading-tight">
            Ứng tuyển vị trí <br />
            <span className="text-brand-200 italic">{job.title}</span>
          </h1>
          <p className="text-brand-100 opacity-90 font-medium">Công ty: {job.company}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <User className="w-4 h-4 text-slate-400" /> Họ và tên
              </label>
              <input 
                required
                type="text" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-300 transition-all"
                placeholder="Nguyễn Văn A"
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <Mail className="w-4 h-4 text-slate-400" /> Email liên hệ
              </label>
              <input 
                required
                type="email" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-300 transition-all"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <Phone className="w-4 h-4 text-slate-400" /> Số điện thoại
              </label>
              <input 
                required
                type="tel" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-300 transition-all"
                placeholder="0901234567"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-slate-400" /> CV (Link Drive/Dropbox)
              </label>
              <input 
                required
                type="url" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-300 transition-all"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-500" /> Kỹ năng của bạn (Dùng để AI viết Cover Letter)
            </label>
            <textarea 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-300 transition-all min-h-[100px]"
              placeholder="Ví dụ: React, TypeScript, 3 năm kinh nghiệm, tiếng Anh IELTs 7.0..."
              value={formData.skills}
              onChange={e => setFormData({...formData, skills: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-slate-400" /> Thư xin việc (Cover Letter)
              </label>
              <button 
                type="button"
                onClick={handleGenerateAI}
                disabled={isGenerating}
                className="text-xs font-bold text-brand-600 flex items-center gap-1 hover:bg-brand-50 px-2 py-1 rounded transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <><div className="w-3 h-3 border border-brand-600 border-t-transparent rounded-full animate-spin" /> Đang tạo...</>
                ) : (
                  <><Sparkles className="w-3 h-3" /> Viết bằng AI</>
                )}
              </button>
            </div>
            <textarea 
              required
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-300 transition-all min-h-[250px]"
              placeholder="Viết thư giới thiệu bản thân..."
              value={formData.coverLetter}
              onChange={e => setFormData({...formData, coverLetter: e.target.value})}
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold hover:bg-brand-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-xl shadow-brand-100"
            >
              {isSubmitting ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Đang gửi hồ sơ...</>
              ) : (
                <>Gửi hồ sơ ứng tuyển <Send className="w-5 h-5" /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
