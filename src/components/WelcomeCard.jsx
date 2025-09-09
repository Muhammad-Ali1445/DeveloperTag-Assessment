const CircularProgress = ({ progress = 80, size = 44, strokeWidth = 6 }) => {
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  const gradId = `grad-${size}-${strokeWidth}-${Math.round(progress)}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* ----- Track ---- */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* ----- Progress arc -------- */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke={`url(#${gradId})`}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />

      {/* --------- Percentage text -----*/}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={10}
        className="fill-current text-gray-700 dark:text-gray-100"
        style={{ fontWeight: 600 }}
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

const WelcomeCard = ({
  name = "Jenny James",
  role = "Student",
  progress = 80,
  avatarUrl = "https://i.pravatar.cc/100",
}) => {
  return (
    <div className="flex items-center gap-4 mb-4 bg-white dark:bg-[#2b2c4a] p-4 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 dark:border-white/10">
     
      <div className="w-25 h-25 overflow-hidden flex-shrink-0 ring-1 ring-gray-100 dark:ring-white/10">
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-full h-full "
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="font-semibold text-gray-800 dark:text-white truncate">
              Welcome Back, {name}!
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 truncate">
              You have earned <span className="font-semibold">{progress}%</span> of your goal this week.
            </p>
          </div>

          {/* Circular progress badge */}
          <div className="flex-shrink-0">
            <CircularProgress progress={progress} size={44} strokeWidth={5} />
          </div>
        </div>

        <div className="mt-3 w-full">
          <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg,#7C3AED,#06B6D4)",
                boxShadow: "0 8px 20px rgba(124,58,237,0.12)",
                transition: "width 0.8s ease",
              }}
            />
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">
              {progress}%
            </span>
            <span className="truncate">of weekly goal</span>
          </div>
        </div>

        <p className="mt-2 text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
