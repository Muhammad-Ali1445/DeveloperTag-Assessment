import { motion } from "framer-motion";

const MiniStat = ({ title, value, icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        scale: 1.05, // grow
      }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center p-5 rounded-2xl shadow-md ${color}`}
    >
      <div className="text-white text-3xl mr-4">{icon}</div>
      <div>
        <h4 className="text-sm text-white opacity-80">{title}</h4>
        <h2 className="text-2xl font-bold text-white">{value}</h2>
      </div>
    </motion.div>
  );
};

export default MiniStat;
