import LandingPage from './LandingPage';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HealthStatusCard from './HealthStatusCard';
import LoadingState from './LoadingState';
import Toast from './Toast';

const LandingPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1.5s delay to appreciate the smooth loading state
    const timer = setTimeout(() => {
      fetch('/api/stats')
        .then(res => res.json())
        .then(json => { setData(json); setLoading(false); })
        .catch(err => { setError("Proxy is offline"); setLoading(false); });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 overflow-hidden">
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
          >
            <LoadingState />
          </motion.div>
        ) : data ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <HealthStatusCard {...data} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Animated Toast */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Toast message={error} onClose={() => setError(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
