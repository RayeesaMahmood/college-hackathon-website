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
      items: ["8:30 AM - 7:00 PM IST", "Hackathon Day", "Campus Event"],
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
      items: ["Women in STEM", "Lords Institute of Engineering and Technology", "Community Partner: HackUnion"],
    },
  ];

  const tracks = [
    "AI & Machine Learning",
    "Web & Mobile Development",
    "Social Impact",
    "Developer Tools",
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

  const rules = [
    "Women-only participation: all participants must identify as women.",
    "All team members must be women. Mixed-gender teams are not eligible.",
    "Teams can consist of 2 to 4 participants.",
    "All projects must be built during the official hackathon hacking period.",
    "No early or late development is allowed.",
    "Open-source libraries, APIs, and frameworks are allowed, but the core implementation must be built during the event.",
    "Plagiarism, copied work, or previously built projects will lead to disqualification.",
    "All participants must follow the official Code of Conduct.",
  ];

  const submissionRequirements = [
    "Project Title and Description",
    "GitHub Repository Link containing the source code",
    "Project Demo Video (2–3 minutes)",
    "Live Demo Link (if applicable)",
    "Presentation Slides or Documentation",
    "Complete submission before the official deadline",
  ];

  const eligibility = [
    "Working Professionals",
    "Students",
    "Secondary / High School Students",
    "Other",
  ];

  const timeline = [
    {
      date: "08:30 AM – 09:30 AM",
      title: "CHECK-IN & REGISTRATION",
      description:
        "Participants arrive at LIET Campus, complete check-in, verify registration details, and get ready for a full day of collaboration, building, and innovation.",
      side: "left",
    },
    {
      date: "09:30 AM – 10:30 AM",
      title: "OPENING CEREMONY",
      description:
        "Kick off DevQueens with welcome remarks, theme introduction, community energy, important announcements, and all the guidance participants need before hacking begins.",
      side: "right",
    },
    {
      date: "10:45 AM – 05:00 PM",
      title: "HACKING PERIOD",
      description:
        "Teams build innovative projects across AI, web, mobile, social impact, developer tools, and open innovation tracks while learning, collaborating, and experimenting.",
      side: "left",
    },
    {
      date: "05:00 PM – 06:00 PM",
      title: "PROJECT JUDGING",
      description:
        "Teams present their work for evaluation based on technology, design, completion, learning, and originality/functionality.",
      side: "right",
    },
    {
      date: "06:00 PM – 07:00 PM",
      title: "WINNERS ANNOUNCEMENT & CLOSING CEREMONY",
      description:
        "Celebrate the winning teams, recognize all participants, and close DevQueens on a high note with community pride and momentum.",
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
      a: "This hackathon is open only to participants who identify as women.",
    },
    {
      q: "WHAT IS THE TEAM SIZE?",
      a: "Teams can consist of 2 to 4 participants.",
    },
    {
      q: "IS THE HACKATHON OFFLINE OR ONLINE?",
      a: "DevQueens is a public offline campus event hosted at Lords Institute of Engineering & Technology, Hyderabad.",
    },
    {
      q: "IS DEVQUEENS BEGINNER FRIENDLY?",
      a: "Yes. Beginners are highly encouraged to participate.",
    },
    {
      q: "DO I NEED TO HAVE A TEAM BEFORE REGISTERING?",
      a: "No. You can register individually and form teams during the hackathon.",
    },
    {
      q: "DO I NEED PRIOR HACKATHON EXPERIENCE?",
      a: "Not at all. Whether you're a beginner or an experienced developer, DevQueens is the perfect opportunity to build, experiment, and connect.",
    },
    {
      q: "CAN WE USE OPEN-SOURCE TOOLS OR APIS?",
      a: "Yes. You can use open-source libraries, APIs, and frameworks, but the core implementation must be built during the hackathon.",
    },
    {
      q: "DO I NEED TO SUBMIT A DEMO?",
      a: "Yes. Every project must include a demo video explaining the project.",
    },
    {
      q: "HOW DO I REGISTER?",
      a: "Registrations are hosted on MLH. Use the Register button on the website to go directly to the official DevQueens page.",
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
    <div className="min-h-screen bg-[#eef7f0] text-black" style={{ fontFamily: "Arial, sans-serif" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        .topo-bg {
          background-color: #eef7f0;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(0,0,0,0.03), transparent 20%),
            radial-gradient(circle at 80% 30%, rgba(0,0,0,0.03), transparent 22%),
            radial-gradient(circle at 60% 70%, rgba(0,0,0,0.03), transparent 20%),
            linear-gradient(transparent 96%, rgba(0,0,0,0.02) 100%);
          background-size: 220px 220px, 260px 260px, 280px 280px, 40px 40px;
        }
        .chevron-bg {
          background-color: #eef7f0;
          background-image: repeating-linear-gradient(
            135deg,
            rgba(34, 139, 94, 0.07) 0,
            rgba(34, 139, 94, 0.07) 42px,
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
          background: linear-gradient(90deg, #84cc16 0%, #22c55e 45%, #065f46 100%);
        }
        .soft-shadow {
          box-shadow: 0 14px 28px rgba(0,0,0,0.18);
        }
        .card-shadow {
          box-shadow: 0 16px 30px rgba(0,0,0,0.22);
        }
        .dev-btn {
          background: #14532d;
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

      <header className="sticky top-0 z-50 bg-[#0b1f14] text-white border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-md bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-md bg-[#0b1f14] text-lg font-bold">D</div>
            </div>
            <div className="title-font text-2xl tracking-[0.35em] sm:text-3xl">DEVQUEENS</div>
          </div>

          <nav className="hidden items-center gap-10 text-lg font-semibold lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-lime-300">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://events.mlh.io/events/13847-devqueens"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border-2 border-green-300 px-5 py-2 text-xl font-bold transition hover:bg-white hover:text-[#0b1f14]"
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
                <div className="rounded-full border border-black/15 bg-white/70 px-4 py-2">Co-hosted by HackUnion</div>
              </div>

              <div className="relative inline-block">
                <div className="absolute bottom-4 left-0 h-5 w-full bg-green-200/80" />
                <h1 className="title-font relative text-[3.1rem] leading-none tracking-[0.12em] sm:text-[4.5rem] lg:text-[5.6rem]">
                  DEVQUEENS
                </h1>
              </div>

              <p className="mt-3 text-2xl font-semibold tracking-[0.2em] text-[#166534] sm:text-3xl">
                WOMEN&apos;S HACKATHON
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-8 sm:text-2xl sm:leading-10">
                <span className="font-black text-[#15803d]">Queens Don&apos;t Wait. They Innovate.</span>
                <br />
                DevQueens Hackathon is an initiative designed to empower and encourage women developers to build innovative technology solutions.
                This hackathon provides a collaborative environment where participants can learn, build, and showcase their skills while solving real-world problems.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://events.mlh.io/events/13847-devqueens"
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

              <div className="mt-10 grid grid-cols-4 gap-3 rounded-[28px] bg-[radial-gradient(circle_at_top,#14532d,#064e3b_55%,#022c22)] p-4 card-shadow sm:gap-6 sm:p-5">
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
                        ? "border-green-100/30 bg-gradient-to-br from-[#14532d] to-[#15803d]"
                        : "border-white/20 bg-[radial-gradient(circle_at_top,#1f3b2d,#0b1f14)]"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-black sm:text-3xl">{card.title}</h3>
                      <span className="text-xl">›</span>
                    </div>
                    <div className="mb-4 border-t-2 border-dotted border-white/60" />
                    <div className="space-y-4 text-lg sm:text-[1.35rem]">
                      {card.items.map((item) => (
                        <div key={item} className="border-b-2 border-dotted border-green-200/40 pb-2 last:border-b-0">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[26px] border border-black p-5 soft-shadow bg-[#e7f5ea]">
                <div className="futuristic-font text-2xl font-black uppercase text-green-800 sm:text-4xl">Problem Statements</div>
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
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700" />
              <h2 className="title-font text-5xl sm:text-7xl">About</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex justify-center">
                <div className="relative h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f7fee7,#d9f99d_45%,#bbf7d0_46%,#bbf7d0_100%)]">
                  <div className="absolute left-1/2 top-1/2 h-52 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[60px] border-[10px] border-[#166534] bg-[#86efac]" />
                  <div className="absolute left-1/2 top-[28%] h-14 w-14 -translate-x-1/2 rounded-full bg-[#4ade80]" />
                  <div className="absolute left-[26%] top-[26%] h-24 w-10 rounded-full bg-[#14532d]" />
                  <div className="absolute right-[26%] top-[26%] h-24 w-10 rounded-full bg-[#14532d]" />
                </div>
              </div>

              <div className="border-[6px] border-green-500 bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(220,252,231,0.75))] p-7 text-xl leading-10 sm:text-[2rem] sm:leading-[1.9]">
                DevQueens Hackathon is an initiative designed to empower and encourage women developers to build innovative
                technology solutions. This hackathon provides a collaborative environment where participants can learn,
                build, and showcase their skills while solving real-world problems.
                <br />
                <br />
                Co-hosted by HackUnion, the event brings together aspiring developers, mentors, and industry professionals
                to create impactful projects and foster a supportive tech community.
                <br />
                <br />
                Whether you&apos;re a beginner or an experienced developer, DevQueens Hackathon is the perfect opportunity to build,
                experiment, and connect.
              </div>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              <div className="grid items-center gap-6 lg:grid-cols-[160px_1fr]">
                <div className="flex justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-[#dcfce7] text-6xl">👩‍💻</div>
                </div>
                <div>
                  <div className="title-font text-5xl text-green-800 sm:text-6xl">VISION</div>
                  <div className="mt-4 border-[5px] border-green-500 bg-[radial-gradient(circle_at_top_right,#166534,#14532d_60%,#0b1f14)] p-6 text-lg leading-9 text-white sm:text-[1.65rem] sm:leading-[1.7]">
                    To create an inclusive tech ecosystem where women innovators can build impactful solutions, lead
                    technological change, and inspire the next generation of developers through confidence, creativity,
                    and community.
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-6 lg:grid-cols-[1fr_160px]">
                <div>
                  <div className="mt-2 border-[5px] border-green-500 bg-[radial-gradient(circle_at_top_right,#166534,#14532d_60%,#0b1f14)] p-6 text-lg leading-9 text-white sm:text-[1.65rem] sm:leading-[1.7]">
                    DevQueens aims to empower women in technology through collaborative innovation, hands-on building,
                    mentorship, and real-world problem solving. The event encourages participants to learn, create, and
                    leave a meaningful impact through technology.
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#dcfce7] text-7xl">🎯</div>
                </div>
                <div className="lg:col-span-2 lg:pl-[calc(100%-13rem)]">
                  <div className="title-font text-5xl text-green-800 sm:text-6xl">MISSION</div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="border-[5px] border-green-500 bg-[radial-gradient(circle_at_bottom_right,#166534,#14532d_60%,#0b1f14)] p-7 text-white">
                <div className="mb-5 text-4xl font-black text-[#d9f99d]">Themes / Tracks</div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tracks.map((track) => (
                    <div key={track} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-lg font-semibold">
                      {track}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-[5px] border-green-500 bg-[radial-gradient(circle_at_bottom_right,#166534,#14532d_60%,#0b1f14)] p-7 text-white">
                <div className="mb-5 text-4xl font-black text-[#d9f99d]">What You Can Build</div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {buildItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-lg font-semibold">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[28px] border-[5px] border-green-500 bg-white/80 p-7 soft-shadow">
                <div className="title-font text-4xl text-green-800 sm:text-5xl">Rules</div>
                <div className="mt-6 space-y-4 text-lg leading-8 sm:text-2xl sm:leading-[1.7]">
                  {rules.map((rule) => (
                    <div key={rule} className="rounded-2xl border-2 border-dotted border-green-700/35 px-5 py-4">
                      {rule}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-lg font-bold sm:text-2xl">
                  Code of Conduct:{" "}
                  <a
                    className="text-green-700 underline"
                    href="https://hackunion.in/coc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    hackunion.in/coc
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border-[5px] border-green-500 bg-white/80 p-7 soft-shadow">
                <div className="title-font text-4xl text-green-800 sm:text-5xl">Submission Requirements</div>
                <div className="mt-6 space-y-4 text-lg leading-8 sm:text-2xl sm:leading-[1.7]">
                  {submissionRequirements.map((item) => (
                    <div key={item} className="rounded-2xl border-2 border-dotted border-green-700/35 px-5 py-4">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[28px] border-[5px] border-green-500 bg-[radial-gradient(circle_at_bottom_right,#166534,#14532d_60%,#0b1f14)] p-7 text-white">
                <div className="mb-5 text-4xl font-black text-[#d9f99d]">Who Can Attend?</div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {eligibility.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-lg font-semibold">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border-[5px] border-green-500 bg-[radial-gradient(circle_at_bottom_right,#166534,#14532d_60%,#0b1f14)] p-7 text-white">
                <div className="mb-5 text-4xl font-black text-[#d9f99d]">Join Our Socials</div>
                <div className="space-y-4 text-lg font-semibold sm:text-2xl">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    Instagram:{" "}
                    <a
                      className="underline"
                      href="https://www.instagram.com/devqueens_hackathon/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @devqueens_hackathon
                    </a>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    Discord:{" "}
                    <a
                      className="underline"
                      href="https://discord.gg/3rutJ8USPd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      discord.gg/3rutJ8USPd
                    </a>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    MLH:{" "}
                    <a
                      className="underline"
                      href="https://events.mlh.io/events/13847-devqueens"
                      target="_blank"
                      rel="noreferrer"
                    >
                      events.mlh.io/events/13847-devqueens
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="chevron-bg border-y border-white/80 px-4 py-16 shadow-[inset_0_20px_30px_rgba(34,197,94,0.16)] lg:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex items-center gap-5">
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700" />
              <h2 className="title-font text-5xl sm:text-7xl">Schedule</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div className="absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 bg-[#16a34a] lg:block" />
              <div className="space-y-12 lg:space-y-16">
                {timeline.map((item) => (
                  <div
                    key={item.title}
                    className={`relative grid gap-5 lg:grid-cols-2 ${item.side === "right" ? "" : ""}`}
                  >
                    <div className={`${item.side === "right" ? "lg:order-1" : "lg:order-0"} ${item.side === "right" ? "lg:col-start-2" : ""}`}>
                      <div className="rounded-[28px] border border-[#22c55e] bg-[#f7faf7] p-6 soft-shadow">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                          <div className="futuristic-font rounded-full bg-gradient-to-r from-[#16a34a] to-[#15803d] px-5 py-2 text-xl font-black text-white sm:text-2xl">
                            {item.title}
                          </div>
                          <div className="futuristic-font text-xl font-black text-[#166534] sm:text-3xl">{item.date}</div>
                        </div>
                        <p className="text-lg leading-9 sm:text-[1.55rem] sm:leading-[1.8]">{item.description}</p>
                      </div>
                    </div>
                    <div className={`${item.side === "right" ? "lg:order-0" : "lg:order-1"} hidden lg:block`} />
                    <div className="absolute left-1/2 top-10 hidden h-7 w-7 -translate-x-1/2 rounded-full border-[6px] border-[#86efac] bg-[#15803d] lg:block" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[28px] border border-black/20 bg-white/85 p-7 soft-shadow">
                <div className="title-font text-4xl sm:text-5xl">Judging Criteria</div>
                <div className="mt-6 space-y-4 text-lg font-semibold sm:text-2xl">
                  {[
                    "Technology",
                    "Design",
                    "Completion",
                    "Learning",
                    "Originality / Functionality",
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
                  <div><span className="font-black">Time:</span> 8:30 AM to 7:00 PM IST</div>
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
            <div className="mb-12 flex items-center gap-5">
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700" />
              <h2 className="title-font text-5xl sm:text-7xl">Sponsors</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="mx-auto max-w-3xl rounded-[28px] border border-[#22c55e] bg-[linear-gradient(90deg,rgba(220,252,231,0.9),rgba(209,250,229,0.88))] p-8 soft-shadow">
              <div className="grid gap-6 sm:grid-cols-[120px_1fr] sm:items-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-4xl font-black text-[#14532d] shadow-md">
                  LI
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.35em] text-black/60">
                    Title Sponsor
                  </div>
                  <div className="mt-2 text-3xl font-black sm:text-5xl">
                    Lords Institute of Engineering & Technology
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-3xl rounded-[28px] border border-[#22c55e] bg-[linear-gradient(90deg,rgba(220,252,231,0.9),rgba(209,250,229,0.88))] p-8 soft-shadow">
              <div className="grid gap-6 sm:grid-cols-[120px_1fr] sm:items-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-[#0b1f14] text-4xl font-black text-white shadow-md">
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

            <div className="mt-16 flex items-center gap-5">
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700" />
              <h2 className="title-font text-5xl sm:text-7xl">Partners</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Co-Host", value: "HackUnion" },
                { label: "Title Partner", value: "Lords Institute" },
                { label: "Gold Sponsor", value: "GitHub" },
                { label: "Education Partner", value: "LSA" },
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
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700" />
              <h2 className="title-font text-5xl sm:text-7xl">FAQs</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="space-y-6">
              {faqs.map((faq) => (
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
              <div className="h-16 w-16 rounded-[18px] bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700" />
              <h2 className="title-font text-5xl sm:text-7xl">Contacts</h2>
              <div className="gradient-line hidden flex-1 sm:block" />
            </div>

            <div className="mb-8 rounded-[28px] border border-black/15 bg-white/80 p-6 soft-shadow">
              <div className="text-lg leading-9 sm:text-2xl sm:leading-[1.8]">
                <span className="font-black">Instagram:</span>{" "}
                <a className="text-green-700 underline" href="https://www.instagram.com/devqueens_hackathon/" target="_blank" rel="noreferrer">
                  @devqueens_hackathon
                </a>
                <br />
                <span className="font-black">Discord:</span>{" "}
                <a className="text-green-700 underline" href="https://discord.gg/3rutJ8USPd" target="_blank" rel="noreferrer">
                  discord.gg/3rutJ8USPd
                </a>
                <br />
                <span className="font-black">MLH:</span>{" "}
                <a className="text-green-700 underline" href="https://events.mlh.io/events/13847-devqueens" target="_blank" rel="noreferrer">
                  events.mlh.io/events/13847-devqueens
                </a>
                <br />
                <span className="font-black">Code of Conduct:</span>{" "}
                <a className="text-green-700 underline" href="https://hackunion.in/coc" target="_blank" rel="noreferrer">
                  hackunion.in/coc
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {contacts.map((person) => (
                <div key={person.name} className="rounded-[26px] bg-white/85 p-6 text-center soft-shadow">
                  <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-[6px] border-green-500 bg-[#ecfdf5] text-5xl font-black text-[#1d1d1d]">
                    {person.initials}
                  </div>
                  <div className="mt-6 text-3xl font-black sm:text-4xl">{person.name}</div>
                  <div className="mt-2 text-xl text-black/75 sm:text-2xl">{person.role}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] bg-[#0b1f14] p-6 text-white soft-shadow">
              <div className="text-2xl font-black sm:text-3xl">Organizing Team</div>
              <div className="mt-3 text-lg leading-8 text-white/80 sm:text-xl">
                DevQueens is organized by a passionate team of students and faculty from Lords Institute of Engineering & Technology,
                along with dedicated volunteers from HackUnion.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1f14] px-4 py-5 text-white lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm: items-centre sm:justify-between sm:text-lg">
          <div>© 2026 DevQueens Hackathon. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/devqueens_hackathon/" target="_blank" rel="noreferrer" className="text-lime-300 hover:underline">
              Instagram
            </a>
            <a href="https://events.mlh.io/events/13847-devqueens" target="_blank" rel="noreferrer" className="text-lime-300 hover:underline">
              MLH
            </a>
            <a href="https://discord.gg/3rutJ8USPd" target="_blank" rel="noreferrer" className="text-lime-300 hover:underline">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
