'use client';

import Link from 'next/link';

export default function Navbar() {
  const handleContactClick = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReportClick = () => {
    const reportSection = document.getElementById('report-issue-section');
    if (reportSection) {
      reportSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleComplaintsClick = () => {
    const complaintsSection = document.getElementById('complaint-list');
    if (complaintsSection) {
      complaintsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 text-white bg-zinc-900">
      {/* Left Links */}
      <div className="flex gap-6 text-sm">
        <button
          onClick={handleReportClick}
          className="hover:text-gray-400 transition"
        >
          Report
        </button>
        <button
          onClick={handleComplaintsClick}
          className="hover:text-gray-400 transition"
        >
          View Complaints
        </button>
      </div>

      {/* Center Title */}
      <h1 className="text-2xl font-serif text-center">Complaint Portal</h1>

      {/* Right Links */}
      <div className="flex gap-6 text-sm">
        <Link href="/login" className="hover:text-gray-400 transition">Login</Link>
        <button
          onClick={handleContactClick}
          className="hover:text-gray-400 transition"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
