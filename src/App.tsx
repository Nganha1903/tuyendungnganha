/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import Apply from './pages/Apply';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f5f5] font-sans text-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/apply/:id" element={<Apply />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-gray-200 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Ngân Hà</h2>                <p className="text-gray-500 max-w-xs">
                  Nền tảng kết nối nhân tài với những cơ hội nghề nghiệp hàng đầu tại Việt Nam.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Dành cho ứng viên</h3>
                <ul className="space-y-2 text-gray-500 text-sm">
                  <li>Tìm kiếm việc làm</li>
                  <li>Tạo CV trực tuyến</li>
                  <li>Cẩm nang nghề nghiệp</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Dành cho nhà tuyển dụng</h3>
                <ul className="space-y-2 text-gray-500 text-sm">
                  <li>Đăng tin tuyển dụng</li>
                  <li>Tìm kiếm hồ sơ</li>
                  <li>Giải pháp nhân sự</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
              © 2026 Ngân Hà. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
