import { useState } from "react";
import {
  Zap, BookOpen, Monitor, ChevronDown,
  User, Clock, Calendar, Star, TrendingUp,
  CheckSquare, ArrowRight, Users, AlertCircle,
} from "lucide-react";

const COURSES = [
  {
    id: "jee",
    category: "Engineering",
    categoryColor: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    status: { label: "Open", color: "text-green-400", dot: "bg-green-400" },
    title: "JEE Mains & Advanced — 2-Year Integrated",
    Icon: Zap,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    pills: [
      { Icon: User, label: "Class XI (PCM)" },
      { Icon: Clock, label: "2 Years" },
      { Icon: Calendar, label: "June & August" },
    ],
    stats: [
      { value: "5K", label: "AIR Target", color: "text-violet-400", iconBg: "bg-violet-500/10", Icon: Star, iconColor: "text-violet-400" },
      { value: "99+", label: "JEE Mains %ile", color: "text-cyan-400", iconBg: "bg-cyan-400/10", Icon: TrendingUp, iconColor: "text-cyan-400" },
      { value: "90%+", label: "Board Score", color: "text-green-400", iconBg: "bg-green-400/10", Icon: CheckSquare, iconColor: "text-green-400" },
    ],
    alert: null,
    highlights: {
      label: "Programme Highlights",
      color: "text-violet-400",
      dot: "bg-violet-400",
      checkBg: "bg-violet-500/10",
      checkColor: "text-violet-400",
      items: [
        "Complete NCERT + advanced problem-solving",
        "Weekly full-length JEE simulations",
        "Dedicated mentor for each student",
        "Board exam integration (HSC / CBSE)",
        "AI-powered performance analytics",
      ],
    },
    outcomes: {
      label: "Expected Outcomes",
      color: "text-cyan-400",
      dot: "bg-cyan-400",
      checkBg: "bg-cyan-400/10",
      checkColor: "text-cyan-400",
      items: [
        "AIR under 5,000 in JEE Advanced",
        "99+ percentile in JEE Mains",
        "90%+ in XII Board exams",
      ],
    },
    meta: ["Batch size: 30 students", "Starts June 2026"],
    ctaColor: "bg-violet-500 hover:bg-violet-400 text-white",
  },
  {
    id: "neet",
    category: "Medical",
    categoryColor: { text: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
    status: { label: "Open", color: "text-green-400", dot: "bg-green-400" },
    title: "NEET UG — 2-Year Foundation",
    Icon: BookOpen,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    pills: [
      { Icon: User, label: "Class XI (PCB)" },
      { Icon: Clock, label: "2 Years" },
      { Icon: Calendar, label: "July intake" },
    ],
    stats: [
      { value: "700+", label: "NEET Score", color: "text-cyan-400", iconBg: "bg-cyan-400/10", Icon: Star, iconColor: "text-cyan-400" },
      { value: "Top 1%", label: "National Rank", color: "text-violet-400", iconBg: "bg-violet-500/10", Icon: TrendingUp, iconColor: "text-violet-400" },
      { value: "85%+", label: "Board Score", color: "text-green-400", iconBg: "bg-green-400/10", Icon: CheckSquare, iconColor: "text-green-400" },
    ],
    alert: null,
    highlights: {
      label: "Programme Highlights",
      color: "text-cyan-400",
      dot: "bg-cyan-400",
      checkBg: "bg-cyan-400/10",
      checkColor: "text-cyan-400",
      items: [
        "NCERT Biology deep-dive sessions",
        "Weekly mock tests with analysis",
        "Personalised doubt-clearing sessions",
        "Board + NEET parallel preparation",
      ],
    },
    outcomes: {
      label: "Expected Outcomes",
      color: "text-violet-400",
      dot: "bg-violet-400",
      checkBg: "bg-violet-500/10",
      checkColor: "text-violet-400",
      items: [
        "NEET score above 700",
        "Government MBBS seat eligibility",
        "85%+ in XII Boards",
      ],
    },
    meta: ["Batch size: 25 students", "Starts July 2026"],
    ctaColor: "bg-cyan-400 hover:bg-cyan-300 text-[#0c0e14]",
  },
  {
    id: "foundation",
    category: "Foundation",
    categoryColor: { text: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
    status: { label: "Filling fast", color: "text-amber-400", dot: "bg-amber-400" },
    title: "Class IX–X Foundation — Science & Maths",
    Icon: Monitor,
    iconColor: "text-green-400",
    iconBg: "bg-green-400/10 border-green-400/20",
    pills: [
      { Icon: User, label: "Class IX students" },
      { Icon: Clock, label: "2 Years" },
      { Icon: Calendar, label: "May intake" },
    ],
    stats: null,
    alert: "Only 4 seats remaining for May 2026 batch.",
    highlights: {
      label: "Programme Highlights",
      color: "text-green-400",
      dot: "bg-green-400",
      checkBg: "bg-green-400/10",
      checkColor: "text-green-400",
      items: [
        "Conceptual clarity before board year",
        "Olympiad & scholarship prep",
        "Early JEE / NEET orientation",
        "Monthly parent progress reports",
      ],
    },
    outcomes: {
      label: "Expected Outcomes",
      color: "text-cyan-400",
      dot: "bg-cyan-400",
      checkBg: "bg-cyan-400/10",
      checkColor: "text-cyan-400",
      items: [
        "95%+ in Class X boards",
        "Olympiad top-100 placement",
        "Strong base for XI PCM / PCB",
      ],
    },
    meta: ["Batch size: 20 students"],
    ctaColor: "bg-green-400 hover:bg-green-300 text-[#0a1a0f]",
  },
];

function StatTile({ value, label, color, iconBg, Icon: TileIcon, iconColor }) {
  return (
    <div className="bg-[#0f111a] border border-[#1e2130] rounded-xl p-3 hover:border-white/10 transition-colors duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-6 h-6 rounded-[7px] flex items-center justify-center ${iconBg}`}>
          <TileIcon size={12} className={iconColor} />
        </div>
        <ArrowRight size={11} className="text-[#3d3f55]" />
      </div>
      <p className={`text-xl font-bold leading-none mb-1 ${color}`}>{value}</p>
      <p className="text-[10.5px] text-[#4a4e6a] font-medium">{label}</p>
    </div>
  );
}

function CheckItem({ text, checkBg, checkColor }) {
  return (
    <li className="flex items-start gap-2 text-[12.5px] text-[#8a8fa8] leading-relaxed">
      <span className={`w-4 h-4 rounded-[5px] flex items-center justify-center shrink-0 mt-0.5 ${checkBg}`}>
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
          <polyline
            points="1.5,5.5 3.8,7.8 8.5,2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={checkColor}
          />
        </svg>
      </span>
      {text}
    </li>
  );
}

function CourseCard({ course }) {
  const [open, setOpen] = useState(course.id === "jee");
  const {
    category, categoryColor, status, title, Icon,
    iconColor, iconBg, pills, stats, alert,
    highlights, outcomes, meta, ctaColor,
  } = course;

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-200 bg-[#12141c]
        ${open ? "border-white/10 bg-[#13151e]" : "border-[#1e2130]"}`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-3.5 px-5 py-[18px] text-left hover:bg-white/[0.03] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40"
      >
        <span
          className={`w-[46px] h-[46px] rounded-[14px] flex items-center justify-center shrink-0 border transition-colors duration-200 ${iconBg}`}
        >
          <Icon size={22} className={iconColor} strokeWidth={2.2} />
        </span>
        <span className="flex-1 min-w-0">
          <span className="flex items-center gap-2 mb-1.5">
            <span
              className={`text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-[2px] border ${categoryColor.text} ${categoryColor.bg} ${categoryColor.border}`}
            >
              {category}
            </span>
            <span className={`flex items-center gap-1.5 text-[10px] font-medium ${status.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
              {status.label}
            </span>
          </span>
          <span className="block text-[15px] font-semibold text-[#e8eaf0] leading-snug mb-2">
            {title}
          </span>
          <span className="flex flex-wrap gap-1.5">
            {pills.map(({ Icon: PillIcon, label }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[11px] text-[#676a85] bg-[#191b26] border border-[#22253a] rounded-full px-2.5 py-[3px]"
              >
                <PillIcon size={11} />
                {label}
              </span>
            ))}
          </span>
        </span>
        <span
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-200 ${open ? "bg-violet-500/10 border-violet-500/25" : "bg-[#191b26] border-[#22253a]"}`}
        >
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`transition-transform duration-300 ${open ? "rotate-180 text-violet-400" : "text-[#4a4e6a]"}`}
          />
        </span>
      </button>
      <div
        className="grid"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
          transition: "grid-template-rows 0.38s cubic-bezier(.4,0,.2,1), opacity 0.28s ease",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-5 border-t border-[#1e2130]">
            {stats && (
              <div className="grid grid-cols-3 gap-2 mb-5">
                {stats.map((s, i) => <StatTile key={i} {...s} />)}
              </div>
            )}
            {alert && (
              <div className="flex items-center gap-2 bg-[#0f111a] border border-[#1e2130] rounded-xl px-3.5 py-3 mb-4">
                <AlertCircle size={14} className="text-amber-400 shrink-0" />
                <span className="text-[11.5px] text-amber-600/90">{alert}</span>
              </div>
            )}
            <div className="h-px bg-[#1a1d2a] mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-0">
              <div className="sm:pr-5">
                <p className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3 ${highlights.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${highlights.dot}`} />
                  {highlights.label}
                </p>
                <ul className="flex flex-col gap-2">
                  {highlights.items.map((item, i) => (
                    <CheckItem key={i} text={item} checkBg={highlights.checkBg} checkColor={highlights.checkColor} />
                  ))}
                </ul>
              </div>
              <div className="hidden sm:block bg-[#1e2130]" />
              <div className="sm:pl-5 mt-4 sm:mt-0">
                <p className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3 ${outcomes.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${outcomes.dot}`} />
                  {outcomes.label}
                </p>
                <ul className="flex flex-col gap-2">
                  {outcomes.items.map((item, i) => (
                    <CheckItem key={i} text={item} checkBg={outcomes.checkBg} checkColor={outcomes.checkColor} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-[#1a1d2a] flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-4 flex-wrap">
                {meta.map((m, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-[11px] text-[#4a4e6a]">
                    <Users size={12} />
                    {m}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs font-medium px-4 py-2 rounded-[9px] border border-[#22253a] text-[#676a85] bg-transparent hover:bg-[#191b26] hover:text-[#9ca3af] transition-colors">
                  View Syllabus
                </button>
                <button className={`flex items-center gap-1.5 text-[13px] font-semibold px-5 py-2 rounded-[9px] transition-all duration-150 hover:-translate-y-px active:translate-y-0 ${ctaColor}`}>
                  Enquire Now
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseAccordion() {
  return (
    <section className="bg-[#0c0e14] min-h-screen p-6 sm:p-10" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3d3f55]">Available Programmes</p>
          <p className="text-[11px] text-[#3d3f55]">{COURSES.length} courses</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
