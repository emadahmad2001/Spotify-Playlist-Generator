import { motion } from 'framer-motion';
import Image from 'next/image';

interface SongCardProps {
  title: string;
  artist: string;
  albumArt: string;
  onClick?: () => void;
}

export default function SongCard({ title, artist, albumArt, onClick }: SongCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/20 to-transparent rounded-xl backdrop-blur-sm" />
      <div className="relative p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
        <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
          <Image
            src={albumArt}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-bold text-lg truncate">{title}</h3>
        <p className="text-gray-400 text-sm truncate">{artist}</p>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 