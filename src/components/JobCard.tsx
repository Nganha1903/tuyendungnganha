import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { Job } from '../types';
import { motion } from 'motion/react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-[2rem] border border-slate-100 card-hover group"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 group-hover:border-brand-100 transition-colors">
            <img 
              src={job.logo} 
              alt={job.company} 
              className="w-12 h-12 rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex gap-2">
            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              {job.type}
            </span>
            {job.id === '1' && (
              <span className="bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Hot
              </span>
            )}
          </div>
        </div>
        
        <div className="flex-1">
          <Link to={`/jobs/${job.id}`}>
            <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-1">
              {job.title}
            </h3>
          </Link>
          <p className="text-slate-500 font-medium text-sm mb-4">{job.company}</p>
          
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {job.location}
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5" />
              {job.salary}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium">
            <Clock className="w-3.5 h-3.5" />
            {job.postedAt}
          </div>
          <Link 
            to={`/jobs/${job.id}`}
            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
