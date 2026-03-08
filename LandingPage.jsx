import React from 'react';
import { Zap, Shield, BarChart3, Globe, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      {/* 1. Hero Section with Gradient Spotlight */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full opacity-50" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
            v2.0 is now live
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Build faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Intelligent Design</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            The modern standard for building healthcare dashboards. High performance, 
            accessible by default, and styled with precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-slate-900 border border-slate-800 font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2">
              View Documentation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Feature Bento Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Large Feature */}
          <div className="md:col-span-2 group bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] hover:border-indigo-500/50 transition-all">
            <div className="bg-indigo-500/10 p-3 rounded-2xl w-fit mb-6">
              <BarChart3 className="text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Real-time Analytics</h3>
            <p className="text-slate-400">Monitor patient vitals with sub-millisecond latency. Our custom engine handles millions of data points without breaking a sweat.</p>
            <div className="mt-8 h-32 bg-gradient-to-t from-indigo-500/10 to-transparent rounded-xl border-t border-indigo-500/20" />
          </div>

          {/* Small Feature 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] hover:border-emerald-500/50 transition-all">
            <Shield className="text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Secure by Design</h3>
            <p className="text-slate-400 text-sm">HIPAA compliant encryption for every layer of your stack.</p>
          </div>

          {/* Small Feature 2 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] hover:border-cyan-500/50 transition-all">
            <Globe className="text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Global Edge</h3>
            <p className="text-slate-400 text-sm">Deploy your dashboard to 300+ edge locations worldwide.</p>
          </div>

          {/* Long Feature */}
          <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8">
            <div>
              <Zap className="text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Instant Integration</h3>
              <p className="text-slate-400 text-sm">Connect your existing EHR system in less than 5 minutes with our pre-built adapters.</p>
            </div>
            <div className="w-full h-24 bg-slate-800/50 rounded-2xl animate-pulse" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default LandingPage;
