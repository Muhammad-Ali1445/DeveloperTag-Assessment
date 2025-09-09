import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  BarChart2,
  MessageSquare,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <aside
      className="w-64 h-screen fixed flex flex-col justify-between 
      bg-gradient-to-b from-indigo-900 via-indigo-1200 to-purple-900 
      text-white shadow-lg p-4"
    >
      {/* -------- Top Section ---- */}

      <div>
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
          <GraduationCap className="w-7 h-7 text-indigo-400" />
          Edu Dashboard
        </h2>
        <nav className="space-y-3">
          <a
            href="/dashboard"
            className="flex items-center gap-3 p-2 rounded-lg transition 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
          >
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a
            href="/students"
            className="flex items-center gap-3 p-2 rounded-lg transition 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
          >
            <Users size={20} /> Students
          </a>
          <a
            href="/courses"
            className="flex items-center gap-3 p-2 rounded-lg transition 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
          >
            <BookOpen size={20} /> Courses
          </a>
          <a
            href="/reports"
            className="flex items-center gap-3 p-2 rounded-lg transition 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
          >
            <BarChart2 size={20} /> Reports
          </a>
          <a
            href="/messages"
            className="flex items-center gap-3 p-2 rounded-lg transition 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
          >
            <MessageSquare size={20} /> Messages
          </a>
          <a
            href="/settings"
            className="flex items-center gap-3 p-2 rounded-lg transition 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
          >
            <Settings size={20} /> Settings
          </a>
        </nav>
      </div>

      {/* ------- Bottom Chat Now Section ------ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-xl shadow-lg mt-6"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-white/20 p-2 rounded-lg"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h4 className="font-semibold">Need Help?</h4>
            <p className="text-xs opacity-80">Chat with us now</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-3 w-full bg-white text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition"
        >
          Chat Now
        </motion.button>
      </motion.div>
    </aside>
  );
}
