import {
  BookOpen,
  Code2,
  FlaskConical,
  Cpu,
  PenTool,
  Calculator,
  MessageSquare,
  Globe,
  Music,
  ChevronRight,
} from "lucide-react";

const RightSidebar = () => {
  const recommended = [
    { title: "Geometry Basics", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
    { title: "Intermediate Coding", icon: <Code2 className="w-5 h-5 text-green-500" /> },
    { title: "Advanced Science", icon: <FlaskConical className="w-5 h-5 text-purple-500" /> },
    { title: "Computer Hardware", icon: <Cpu className="w-5 h-5 text-orange-500" /> },
    { title: "Creative Writing", icon: <PenTool className="w-5 h-5 text-pink-500" /> },
  ];

  const recent = [
    { title: "Eng - Vocabulary Quiz", time: "2h ago", icon: <MessageSquare className="w-5 h-5 text-pink-500" /> },
    { title: "Math - Geometry Basics", time: "5h ago", icon: <Calculator className="w-5 h-5 text-yellow-500" /> },
    { title: "Eng - Social Media Task", time: "1d ago", icon: <Globe className="w-5 h-5 text-blue-500" /> },
    { title: "Music - Practice Session", time: "2d ago", icon: <Music className="w-5 h-5 text-purple-500" /> },
    { title: "Science - Lab Report", time: "3d ago", icon: <FlaskConical className="w-5 h-5 text-green-500" /> },
  ];

  return (
    <aside className="w-80 bg-[#f9faff] dark:bg-[#1e1f3b] p-5 flex flex-col shadow-lg rounded-l-md">

      {/* ----- Profile Section --- */}

      <div className="flex items-center gap-3 mb-6 bg-white dark:bg-[#2b2c4a] p-3 rounded-lg shadow-sm hover:shadow-md transition">
        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <h2 className="font-semibold text-gray-800 dark:text-white">Jenny James</h2>
          <p className="text-xs text-gray-500">Student</p>
        </div>
      </div>

      {/* ------ Recommended Section -----*/}
      <div>
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">Recommended</h3>
        <ul className="space-y-6">
          {recommended.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-white dark:bg-[#2b2c4a] p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {item.title}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
          ))}
        </ul>
      </div>

      {/* ----- Recent Activity Section ----- */}
      
      <div className="mt-10">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">Recent Activity</h3>
        <ul className="space-y-6">
          {recent.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-white dark:bg-[#2b2c4a] p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {item.title}
                </span>
              </div>
              <span className="text-xs text-gray-400">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
