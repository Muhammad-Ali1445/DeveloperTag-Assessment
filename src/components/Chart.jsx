import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function TimeSpentChart({ days, containerBg = "bg-white" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const totals = useMemo(
    () =>
      days.map((d) =>
        d.segments.reduce((s, seg) => s + Number(seg.value || 0), 0)
      ),
    [days]
  );
  const globalMax = useMemo(() => Math.max(...totals, 1), [totals]);

  // build unique legend (preserve first-occurrence order)
  const legend = useMemo(() => {
    const map = new Map();
    days.forEach((d) =>
      d.segments.forEach((s) => {
        if (!map.has(s.name)) map.set(s.name, s.color);
      })
    );
    return Array.from(map.entries()).map(([name, color]) => ({ name, color }));
  }, [days]);

  return (
    <div className={`p-6 rounded-2xl shadow-soft ${containerBg}`}>
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <h1></h1>
        <div className="text-sm text-gray-500">Last week ▾</div>
      </div>

      {/*------ columns ---- */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="flex items-end gap-6 justify-between">
            {days.map((d) => {
              const dayTotal = d.segments.reduce(
                (s, seg) => s + Number(seg.value || 0),
                0
              );

              return (
                <div key={d.day} className="flex flex-col items-center">
        
                  <div className="mb-2 text-sm font-medium text-gray-700">
                    {d.day}
                  </div>

                  <div
                    className="w-6 h-56 rounded-2xl bg-gray-100 overflow-hidden flex flex-col-reverse"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }}
                    aria-hidden
                  >
                    {/* ---- render segments in the given order ----- */}
                    {d.segments.map((seg, i) => {
                      const heightPercent =
                        (Number(seg.value || 0) / globalMax) * 100;
                      const isBottom = i === 0;
                      const isTop = i === d.segments.length - 1;

                      return (
                        <motion.div
                          key={seg.name + i}
                          initial={{ height: 0 }}
                          animate={{
                            height: mounted ? `${heightPercent}%` : "0%",
                          }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="w-full"
                          title={`${seg.name} — ${seg.value}`}
                          style={{
                            background: seg.color,
                            borderTopLeftRadius: isTop ? 12 : 0,
                            borderTopRightRadius: isTop ? 12 : 0,
                            borderBottomLeftRadius: isBottom ? 12 : 0,
                            borderBottomRightRadius: isBottom ? 12 : 0,
                          }}
                        />
                      );
                    })}
                  </div>

                  <div className="mt-2 text-xs text-gray-500">
                    {dayTotal ? `${dayTotal}h` : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ----- legend ----- */}
      <div className="mt-6 flex flex-wrap gap-4 items-center">
        {legend.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ background: l.color }}
            />
            <span>{l.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
