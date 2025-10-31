import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

interface TerminalHeaderProps {
  command: string;
  description?: string;
}

export const TerminalHeader = ({ command, description }: TerminalHeaderProps) => {
  return (
    <div className="bg-bg-elevated border-b border-neutral-700 relative overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent scanline" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Command */}
          <div className="font-mono text-2xl lg:text-3xl">
            <span className="text-accent-500 mr-3">$</span>
            <Typewriter text={command} delay={30} />
            <span className="terminal-cursor ml-1" />
          </div>
          
          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-neutral-400 text-sm max-w-2xl"
            >
              {description}
            </motion.p>
          )}
          
          {/* Terminal prompt symbols */}
          <div className="flex items-center space-x-2 mt-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-primary-500" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
