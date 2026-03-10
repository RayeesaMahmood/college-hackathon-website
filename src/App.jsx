import { useEffect, useState } from "react";

export default function DevQueensHackathonSite() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];
  

  const infoCards = [
    {
      title: "2nd April 2026",
      items: ["8:30 AM - 6:00 PM IST", "Hackathon Day", "Campus Event"],
    },
    {
      title: "Information Details",
      items: ["Women-only Hackathon", "Beginner Friendly", "Public Event"],
    },
    {
      title: "Venue",
      items: ["Lords Institute of Engineering & Technology", "Hyderabad, Telangana", "Offline @ LIET Campus"],
      accent: true,
    },
    {
      title: "Organized By",
      items: ["Women in STEM", " Lords Institute of Engineering and Technology", "Community Partner: HackUnion"],
    },
  ];

  const tracks = [
    "AI & Machine Learning",
    "Web & App Development",
    "Social Impact",
    "Productivity & Education",
    "Open Innovation",
  ];

  const buildItems = [
    "Web Applications",
    "Mobile Apps",
    "AI / ML Solutions",
    "Developer Tools",
    "Automation Tools",
    "Social Impact Platforms",
  ];

  const timeline = [
    {
      date: "APR 2ND",
      title: "CHECK-IN & REGISTRATION",
      description:
        "Participants arrive at LIET Campus, verify registration details, and get ready for a full day of collaboration, building, and innovation.",
      side: "left",
    },
    {
      date: "09:00 AM",
      title: "OPENING CEREMONY",
      description:
        "Kick off DevQueens with welcome remarks, theme introduction, community energy, and all the guidance participants need before hacking begins.",
      side: "right",
    },
    {
      date: "09:30 AM",
      title: "HACKING BEGINS",
      description:
        "Teams start building innovative solutions across AI, web, social impact, education, and open innovation tracks.",
      side: "left",
    },
    {
      date: "01:00 PM",
      title: "MENTOR CHECKPOINTS",
      description:
        "Mentors interact with teams, review ideas, solve blockers, and help participants strengthen implementation and project direction.",
      side: "right",
    },
    {
      date: "04:30 PM",
      title: "PROJECT SUBMISSIONS",
      description:
        "Teams finalize demos and submit their projects for judging through the official process before the deadline closes.",
      side: "left",
    },
    {
      date: "05:30 PM",
      title: "JUDGING",
      description:
        "Projects are evaluated on innovation, technical execution, design, usability, and real-world impact.",
      side: "right",
    },
    {
      date: "06:00 PM",
      title: "AWARDS & CLOSING CEREMONY",
      description:
        "Celebrate the winning teams, recognize participants, and close DevQueens on a high note with community pride and momentum.",
      side: "left",
    },
  ];

  const faqs = [
    {
      q: "WHAT IS DEVQUEENS?",
      a: "DevQueens is a women-focused hackathon designed to empower participants to innovate, build, and lead through collaborative technology projects.",
    },
    {
      q: "WHO CAN PARTICIPATE?",
      a: "Participants must identify as women and be between 18 and 26 years old, subject to the event rules and eligibility guidelines.",
    },
    {
      q: "WHAT IS THE TEAM SIZE?",
      a: "Teams can have 2 to 4 members for the event website version of DevQueens.",
    },
    {
      q: "IS THE HACKATHON OFFLINE OR ONLINE?",
      a: "DevQueens is a public offline campus event hosted at Lords Institute of Engineering & Technology, Hyderabad.",
    },
    {
      q: "IS DEVQUEENS BEGINNER FRIENDLY?",
      a: "Yes. DevQueens welcomes both beginners and experienced builders, with an inclusive environment focused on learning and innovation.",
    },
    {
      q: "HOW DO I REGISTER?",
      a: "Registrations are hosted on Devpost. Use the Register button on the website to go directly to the official DevQueens Devpost page.",
    },
  ];

  const contacts = [
    {
      name: "Dr. Ruhiat Sultana",
      role: "Faculty Convenor",
      initials: "RS",
    },
    {
      name: "Dr. Ch. Santhan Kumar",
      role: "Faculty Convenor",
      initials: "SK",
    },
    {
      name: "Dr.Ruhiat Sultana ",
      role: "Organizer",
      initials: "RM",
    },
    {
      name: "Kafia",
      role: "Organizer",
      initials: "KA",
    },
    {
      name: "Alina",
      role: "Organizer",
      initials: "AL",
    },
    {
      name: "Rayeesa Mahmood",
      role: "Organizer",
      initials: "RA",
    },
    {
      name: "Reda Kaleem",
      role: "Organizer",
      initials: "RE",
    },
  ];
  const targetDate = new Date("2026-04-02T08:30:00+05:30").getTime();

const [timeLeft, setTimeLeft] = useState({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      setTimeLeft({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft({
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    });
  }, 1000);

  return () => clearInterval(interval);
}, [targetDate]);

  return (
    <div className="min-h-screen bg-[#f3f3f1] text-black" style={{ fontFamily: "Arial, sans-serif" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        .topo-bg {
          background-color: #f3f3f1;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(0,0,0,0.03), transparent 20%),
            radial-gradient(circle at 80% 30%, rgba(0,0,0,0.03), transparent 22%),
            radial-gradient(circle at 60% 70%, rgba(0,0,0,0.03), transparent 20%),
            linear-gradient(transparent 96%, rgba(0,0,0,0.02) 100%);
          background-size: 220px 220px, 260px 260px, 280px 280px, 40px 40px;
        }
        .chevron-bg {
          background-color: #f3f3f1;
          background-image: repeating-linear-gradient(
            135deg,
            rgba(87, 71, 153, 0.07) 0,
            rgba(87, 71, 153, 0.07) 42px,
            transparent 42px,
            transparent 180px
          );
        }
        .title-font {
          font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
          letter-spacing: 0.05em;
        }
        .futuristic-font {
          font-family: 'Trebuchet MS', 'Arial Black', sans-serif;
          letter-spacing: 0.06em;
        }
        .gradient-line {
          height: 5px;
          border-radius: 999px;
          background: linear-gradient(90deg, #f5b200 0%, #ff4d8d 45%, #ca25ff 100%);
        }
        .soft-shadow {
          box-shadow: 0 14px 28px rgba(0,0,0,0.18);
        }
        .card-shadow {
          box-shadow: 0 16px 30px rgba(0,0,0,0.22);
        }
        .dev-btn {
          background: #000;
          color: white;
          border-radius: 999px;
          padding: 0.9rem 1.5rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .dev-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-md bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-yellow-400 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-md bg-black text-lg font-bold">D</div>
            </div>
            <div className="title-font text-2xl tracking-[0.35em] sm:text-3xl">DEVQUEENS</div>
          </div>

          <nav className="hidden items-center gap-10 text-lg font-semibold lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-pink-300">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://devqueens.devpost.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border-2 border-sky-300 px-5 py-2 text-xl font-bold transition hover:bg-white hover:text-black"
          >
            Register
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="topo-bg relative overflow-hidden px-4 py-8 lg:px-6 lg:py-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.9fr]">
            <div className="pt-2">
              <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-bold text-black/85 sm:text-lg">
                <div className="rounded-full border border-black/15 bg-white/70 px-4 py-2">Lords Institute of Engineering & Technology</div>
                <div className="rounded-full border border-black/15 bg-white/70 px-4 py-2">Women in STEM</div>
              </div>

              <div className="relative inline-block">
                <div className="absolute bottom-4 left-0 h-5 w-full bg-pink-200/80" />
                <h1 className="title-font relative text-[3.1rem] leading-none tracking-[0.12em] sm:text-[4.5rem] lg:text-[5.6rem]">
                  DEVQUEENS
                </h1>
              </div>

              <p className="mt-3 text-2xl font-semibold tracking-[0.2em] text-[#035f67] sm:text-3xl">
                WOMEN&apos;S HACKATHON
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-8 sm:text-2xl sm:leading-10">
                <span className="font-black text-[#027580]">Queens Don&apos;t Wait. They Innovate.</span>
                <br />
                DevQueens is a women-focused hackathon designed to empower builders to create innovative technology solutions,
                collaborate with peers, and lead with confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://devqueens.devpost.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="dev-btn text-lg sm:text-xl"
                >
                  REGISTER NOW »
                </a>
                <a href="#schedule" className="rounded-full border-2 border-black px-6 py-3 text-lg font-extrabold tracking-wide transition hover:bg-black hover:text-white">
                  VIEW SCHEDULE
                </a>
              </div>

              <div className="mt-10 grid grid-cols-4 gap-3 rounded-[28px] bg-[radial-gradient(circle_at_top,#2c0b57,#071e3c_55%,#000)] p-4 card-shadow sm:gap-6 sm:p-5">
              
                 {[
                   [timeLeft.days, "Days"],
                         [timeLeft.hours, "Hours"],
                      [timeLeft.minutes, "Minutes"],
                        [timeLeft.seconds, "Seconds"],
                     ].map(([value, label]) => (

                  <div key={label} className="rounded-[24px] bg-black/35 px-3 py-6 text-center text-white backdrop-blur">
                    <div className="text-4xl font-black sm:text-6xl">{value}</div>
                    <div className="mt-3 text-base sm:text-2xl">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 self-start lg:pt-24">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {infoCards.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-[26px] border p-5 text-white card-shadow ${
                      card.accent
                        ? "border-sky-100/30 bg-gradient-to-br from-[#163b64] to-[#2a6b88]"
                        : "border-white/20 bg-[radial-gradient(circle_at_top,#222,#000)]"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-black sm:text-3xl">{card.title}</h3>
                      <span className="text-xl">›</span>
                    </div>
                    <div className="mb-4 border-t-2 border-dotted border-white/60" />
                    <div className="space-y-4 text-lg sm:text-[1.35rem]">
                      {card.items.map((item) => (
                        <div key={item} className="border-b-2 border-dotted border-sky-200/40 pb-2 last:border-b-0">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[26px] border border-black p-5 soft-shadow bg-[#e9f4f2]">
                <div className="futuristic-font text-2xl font-black uppercase text-fuchsia-800 sm:text-4xl">Problem Statements</div>
                <div className="mt-6 space-y-4 text-lg font-bold sm:text-2xl">
                  {tracks.map((track) => (
                    <div key={track} className="flex items-center justify-between border-b-2 border-dotted border-black/45 pb-3">
                      <span>{track}</span>
                      <span>›</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="topo-bg px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center gap-5">
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-yellow-400 via-fuchsia-500 to-indigo-700" />
              <h2 className="title-font text-5xl sm:text-7xl">About</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex justify-center">
                <div className="relative h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff3a0,#f1ea82_45%,#dce47d_46%,#dce47d_100%)]">
                  <div className="absolute left-1/2 top-1/2 h-52 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[60px] border-[10px] border-[#3a6b36] bg-[#9dd0bd]" />
                  <div className="absolute left-1/2 top-[28%] h-14 w-14 -translate-x-1/2 rounded-full bg-[#7ca995]" />
                  <div className="absolute left-[26%] top-[26%] h-24 w-10 rounded-full bg-[#245a2a]" />
                  <div className="absolute right-[26%] top-[26%] h-24 w-10 rounded-full bg-[#245a2a]" />
                </div>
              </div>

              <div className="border-[6px] border-fuchsia-500 bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(255,225,244,0.7))] p-7 text-xl leading-10 sm:text-[2rem] sm:leading-[1.9]">
                DevQueens Hackathon is an initiative designed to empower and encourage women developers to build innovative
                technology solutions. This hackathon creates a collaborative environment where participants can learn,
                experiment, and showcase their skills while solving real-world problems.
                <br />
                <br />
                Co-hosted by HackUnion, DevQueens brings together aspiring developers, mentors, and industry professionals
                to foster an inclusive and supportive tech community where women innovate, build, and lead.
              </div>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              <div className="grid items-center gap-6 lg:grid-cols-[160px_1fr]">
                <div className="flex justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-[#f5d8e8] text-6xl">👩‍💻</div>
                </div>
                <div>
                  <div className="title-font text-5xl text-purple-800 sm:text-6xl">VISION</div>
                  <div className="mt-4 border-[5px] border-fuchsia-500 bg-[radial-gradient(circle_at_top_right,#3f145a,#1d1441_60%,#140d2e)] p-6 text-lg leading-9 text-white sm:text-[1.65rem] sm:leading-[1.7]">
                    To create an inclusive tech ecosystem where women innovators can build impactful solutions, lead
                    technological change, and inspire the next generation of developers through confidence, creativity,
                    and community.
                  </div>
                </div>
              </div>

              
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_160px]">
                <div>
                  <div className="mt-2 border-[5px] border-fuchsia-500 bg-[radial-gradient(circle_at_top_right,#3f145a,#1d1441_60%,#140d2e)] p-6 text-lg leading-9 text-white sm:text-[1.65rem] sm:leading-[1.7]">
                    DevQueens aims to empower women in technology through collaborative innovation, hands-on building,
                    mentorship, and real-world problem solving. The event encourages participants to learn, create, and
                    leave a meaningful impact through technology.
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#ffe4ef] text-7xl">🎯</div>
                </div>
                <div className="lg:col-span-2 lg:pl-[calc(100%-13rem)]">
                  <div className="title-font text-5xl text-purple-800 sm:text-6xl">MISSION</div>
                </div>
              </div>
            </div>
        
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="border-[5px] border-fuchsia-500 bg-[radial-gradient(circle_at_bottom_right,#31165a,#180f37_60%,#140d2b)] p-7 text-white">
                <div className="mb-5 text-4xl font-black text-[#beff6b]">Themes / Tracks</div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tracks.map((track) => (
                    <div key={track} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-lg font-semibold">
                      {track}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-[5px] border-fuchsia-500 bg-[radial-gradient(circle_at_bottom_right,#31165a,#180f37_60%,#140d2b)] p-7 text-white">
                <div className="mb-5 text-4xl font-black text-[#beff6b]">What You Can Build</div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {buildItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-lg font-semibold">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="chevron-bg border-y border-white/80 px-4 py-16 shadow-[inset_0_20px_30px_rgba(140,120,255,0.18)] lg:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex items-center gap-5">
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-yellow-400 via-fuchsia-500 to-indigo-700" />
              <h2 className="title-font text-5xl sm:text-7xl">Schedule</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div className="absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 bg-[#6f5fe2] lg:block" />
              <div className="space-y-12 lg:space-y-16">
                {timeline.map((item, index) => (
                  <div
                    key={item.title}
                    className={`relative grid gap-5 lg:grid-cols-2 ${item.side === "right" ? "" : ""}`}
                  >
                    <div className={`${item.side === "right" ? "lg:order-1" : "lg:order-0"} ${item.side === "right" ? "lg:col-start-2" : ""}`}>
                      <div className="rounded-[28px] border border-[#7d6eff] bg-[#f7f7f7] p-6 soft-shadow">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                          <div className="futuristic-font rounded-full bg-gradient-to-r from-[#7f59ff] to-[#ec43c4] px-5 py-2 text-xl font-black text-white sm:text-2xl">
                            {item.title}
                          </div>
                          <div className="futuristic-font text-xl font-black text-[#9d56ff] sm:text-3xl">{item.date}</div>
                        </div>
                        <p className="text-lg leading-9 sm:text-[1.55rem] sm:leading-[1.8]">{item.description}</p>
                      </div>
                    </div>
                    <div className={`${item.side === "right" ? "lg:order-0" : "lg:order-1"} hidden lg:block`} />
                    <div className="absolute left-1/2 top-10 hidden h-7 w-7 -translate-x-1/2 rounded-full border-[6px] border-[#eb86ff] bg-[#6f1fff] lg:block" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[28px] border border-black/20 bg-white/85 p-7 soft-shadow">
                <div className="title-font text-4xl sm:text-5xl">Judging Criteria</div>
                <div className="mt-6 space-y-4 text-lg font-semibold sm:text-2xl">
                  {[
                    "Innovation & Creativity",
                    "Technical Implementation",
                    "Impact",
                    "Design & Usability",
                  ].map((criterion) => (
                    <div key={criterion} className="rounded-2xl border-2 border-dotted border-black/45 px-5 py-4">
                      {criterion}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-black/20 bg-white/85 p-7 soft-shadow">
                <div className="title-font text-4xl sm:text-5xl">Event Details</div>
                <div className="mt-6 space-y-5 text-lg leading-9 sm:text-2xl sm:leading-[1.8]">
                  <div><span className="font-black">Date:</span> April 2, 2026</div>
                  <div><span className="font-black">Time:</span> 8:30 AM to 6:00 PM IST</div>
                  <div><span className="font-black">Venue:</span> LIET Campus, Hyderabad</div>
                  <div><span className="font-black">Prize Pool:</span> ₹35,000</div>
                  <div><span className="font-black">Team Size:</span> 2 to 4 members</div>
                </div>
              </div>
            </div>
          </div>
        </section>
<section className="chevron-bg px-4 py-16 lg:px-6 lg:py-20">
  <div className="mx-auto max-w-7xl">

    {/* Sponsors Title */}
    <div className="mb-12 flex items-center gap-5">
      <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-yellow-400 via-fuchsia-500 to-indigo-700" />
      <h2 className="title-font text-5xl sm:text-7xl">Sponsors</h2>
      <div className="gradient-line hidden flex-1 sm:block" />
    </div>

    {/* Title Sponsor */}
    <div className="mx-auto max-w-3xl rounded-[28px] border border-[#6e64ff] bg-[linear-gradient(90deg,rgba(222,231,255,0.85),rgba(255,218,228,0.85))] p-8 soft-shadow">
      <div className="grid gap-6 sm:grid-cols-[120px_1fr] sm:items-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-4xl font-black text-[#1e3577] shadow-md">
          LI
        </div>
        <div>
          <div className="text-sm font-black uppercase tracking-[0.35em] text-black/60">
            Title Sponsor
          </div>
          <div className="mt-2 text-3xl font-black sm:text-5xl">
            Lords Institute of Engineering and Technology
          </div>
        </div>
      </div>
    </div>

    {/* Community Sponsor */}
    <div className="mx-auto mt-8 max-w-3xl rounded-[28px] border border-[#6e64ff] bg-[linear-gradient(90deg,rgba(222,231,255,0.85),rgba(255,218,228,0.85))] p-8 soft-shadow">
      <div className="grid gap-6 sm:grid-cols-[120px_1fr] sm:items-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-black text-4xl font-black text-white shadow-md">
          HU
        </div>
        <div>
          <div className="text-sm font-black uppercase tracking-[0.35em] text-black/60">
            Community Sponsor
          </div>
          <div className="mt-2 text-3xl font-black sm:text-5xl">
            HackUnion
          </div>
          <div className="mt-3 text-base leading-7 text-black/80 sm:text-xl sm:leading-9">
            HackUnion is a student-driven builder community where students learn by building real projects through
            collaboration, mentorship, workshops, and hackathons in partnership with Lords Skill Academy.
          </div>
        </div>
      </div>
    </div>

    {/* Partners Title */}
    <div className="mt-16 flex items-center gap-5">
      <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-yellow-400 via-fuchsia-500 to-indigo-700" />
      <h2 className="title-font text-5xl sm:text-7xl">Partners</h2>
      <div className="gradient-line hidden flex-1 sm:block" />
    </div>

    {/* Partners Grid */}
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { label: "Co-Host", value: "HackUnion" },
        { label: "Host", value: "Lords Institute of Engineering and Technology" },
        { label: "Gold Sponsor", value: "GitHub" },
        { label: "Education Partner", value: "LSA-Lords Skill Academy" },
        { label: "Hackathon Partner", value: "MLH" },
        { label: "Technology Partner", value: "Google Gemini & ElevenLabs" },
      ].map((partner) => (
        <div
          key={partner.value}
          className="rounded-[20px] border border-black/20 bg-white/80 p-6 soft-shadow"
        >
          <div className="text-sm font-black uppercase tracking-[0.2em] text-black/60">
            {partner.label}
          </div>
          <div className="mt-3 text-2xl font-black">{partner.value}</div>
        </div>
      ))}
    </div>

  </div>
</section>

        <section id="faqs" className="chevron-bg px-4 py-16 lg:px-6 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center gap-5">
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-yellow-400 via-fuchsia-500 to-indigo-700" />
              <h2 className="title-font text-5xl sm:text-7xl">FAQs</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <details key={faq.q} className="group rounded-[20px] border-[3px] border-dotted border-black/75 bg-white/60 px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-2xl font-black sm:text-4xl">
                    <span>{faq.q}</span>
                    <span className="text-3xl transition group-open:rotate-90">›</span>
                  </summary>
                  <p className="pt-5 text-lg leading-9 text-black/85 sm:text-2xl sm:leading-[1.8]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="chevron-bg px-4 py-16 lg:px-6 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center gap-5">
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-yellow-400 via-fuchsia-500 to-indigo-700" />
              <h2 className="title-font text-5xl sm:text-7xl">Contacts</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="mb-8 rounded-[28px] border border-black/15 bg-white/80 p-6 soft-shadow">
              <div className="text-lg leading-9 sm:text-2xl sm:leading-[1.8]">
                <span className="font-black">Instagram:</span>{" "}
                <a className="text-fuchsia-700 underline" href="https://www.instagram.com/devqueens_hackathon/" target="_blank" rel="noreferrer">
                  @devqueens_hackathon
                </a>
                <br />
                <span className="font-black">Devpost:</span>{" "}
                <a className="text-fuchsia-700 underline" href="https://devqueens.devpost.com/" target="_blank" rel="noreferrer">
                  devqueens.devpost.com
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {contacts.map((person) => (
                <div key={person.name} className="rounded-[26px] bg-white/85 p-6 text-center soft-shadow">
                  <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-[6px] border-fuchsia-500 bg-[#ece6d4] text-5xl font-black text-[#1d1d1d]">
                    {person.initials}
                  </div>
                  <div className="mt-6 text-3xl font-black sm:text-4xl">{person.name}</div>
                  <div className="mt-2 text-xl text-black/75 sm:text-2xl">{person.role}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] bg-black p-6 text-white soft-shadow">
              <div className="text-2xl font-black sm:text-3xl">Organizing Team</div>
              <div className="mt-3 text-lg leading-8 text-white/80 sm:text-xl">
                  DevQueens is organized by a passionate team of students and faculty from Lords Institute of Engineering and Technology, along with dedicated volunteers from HackUnion.
                 remaining team members to be added later.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black px-4 py-5 text-white lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:text-lg">
          <div>© 2026 DevQueens Hackathon. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/devqueens_hackathon/" target="_blank" rel="noreferrer" className="text-pink-300 hover:underline">
              Instagram
            </a>
            <a href="https://devqueens.devpost.com/" target="_blank" rel="noreferrer" className="text-pink-300 hover:underline">
              Devpost
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
