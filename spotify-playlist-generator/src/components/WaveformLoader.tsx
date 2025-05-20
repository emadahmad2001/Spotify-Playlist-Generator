import { motion } from 'framer-motion';

export default function WaveformLoader() {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center space-x-1">
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-[#1DB954] rounded-full"
          initial={{ height: 10 }}
          animate={{
            height: [10, 30, 10],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 