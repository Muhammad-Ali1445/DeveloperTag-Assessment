import MiniStat from "../components/MiniStat";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Calendar,
  Columns3,
} from "lucide-react";
import TimeSpentChart from "../components/Chart";
import WelcomeCard from "../components/WelcomeCard";

const sampleDays = [
  {
    day: "Mon",
    segments: [
      { name: "Physics", value: 3, color: "#7C3AED" }, 
      { name: "IT", value: 1.5, color: "#10B981" }, 
      { name: "Management", value: 0.8, color: "#60A5FA" }, 
    ],
  },
  {
    day: "Tue",
    segments: [
      { name: "Physics", value: 2.5, color: "#7C3AED" },
      { name: "IT", value: 2, color: "#10B981" },
      { name: "CS", value: 1.2, color: "#F59E0B" },
    ],
  },
  {
    day: "Wed",
    segments: [
      { name: "Management", value: 2.4, color: "#60A5FA" },
      { name: "Maths", value: 2.6, color: "#FB7185" },
    ],
  },
  {
    day: "Thu",
    segments: [
      { name: "CS", value: 3, color: "#F59E0B" },
      { name: "Maths", value: 1.5, color: "#FB7185" },
      { name: "IT", value: 0.6, color: "#10B981" },
    ],
  },
  {
    day: "Fri",
    segments: [
      { name: "CS", value: 2.6, color: "#F59E0B" },
      { name: "Physics", value: 1.2, color: "#7C3AED" },
    ],
  },
  {
    day: "Sat",
    segments: [
      { name: "Management", value: 2.1, color: "#60A5FA" },
      { name: "IT", value: 1.7, color: "#10B981" },
      { name: "Maths", value: 0.9, color: "#FB7185" },
    ],
  },
];

export default function Dashboard() {
  return (
    <div>
      
      <WelcomeCard name="Jenny James" role="Student" progress={80} />

     

      <main className="flex-1 p-6">

        <div className="mt-4 mb-8">
          <div className="bg-white dark:bg-[#2b2c4a] shadow-md rounded-lg p-4 mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              Time Spent on Learning
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Weekly Report
            </span>
          </div>

          <TimeSpentChart days={sampleDays} containerBg="bg-white" />
        </div>

        <h3 className="font-semibold text-lg p-3 mb-3">Your Statatistics</h3>

        {/* Mini Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MiniStat
            title="Avg Attendence"
            value="90%"
            icon={<Users />}
            color="bg-blue-500"
            delay={0}
          />
          <MiniStat
            title="Active Courses"
            value="08"
            icon={<BookOpen />}
            color="bg-green-500"
            delay={0.1}
          />
          <MiniStat
            title="Paid Fee"
            value="$12,450"
            icon={<DollarSign />}
            color="bg-yellow-500"
            delay={0.2}
          />
          <MiniStat
            title="Growth"
            value="+12%"
            icon={<TrendingUp />}
            color="bg-red-500"
            delay={0.3}
          />
          <MiniStat
            title="Upcoming Events"
            value="8"
            icon={<Calendar />}
            color="bg-purple-500"
            delay={0.4}
          />
          <MiniStat
            title="Due Assignments"
            value="04"
            icon={<Columns3 />}
            color="bg-indigo-500"
            delay={0.5}
          />
        </div>
      </main>

    </div>
  );
}
