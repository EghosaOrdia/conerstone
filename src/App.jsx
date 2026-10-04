import "./App.css";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Play,
} from "lucide-react";
import { useState } from "react";

/*
  IMAGE SLOTS: drop your own photos into src/assets with these names
  (or change the filenames below).

  hero-site.jpg          Portrait. A completed Nigerian building or tower, ideally golden hour (about 1200x1600)
  site-works.jpg         Landscape. Close-up of construction or a finished facade (about 1008x704)
  estate-homes.jpg       Landscape. A finished estate or residential development (about 1008x912)
  city-skyline.jpg       Wide. Lagos or Abuja skyline (about 1920x704)
  site-team.jpg          Landscape. Engineers and site team in hard hats on site (about 1408x912)
  project-lekki.jpg      Landscape. Mixed-use or commercial project (about 1200x912)
  project-maitama.jpg    Landscape. Residential project (about 1200x912)
*/
import heroSite from "./assets/project.jpg";
import siteWorks from "./assets/rainy.jpg";
import siteWorks2 from "./assets/project-1.jpg";
import estateHomes from "./assets/project-singapore.jpg";
import skyline from "./assets/city-skyline.jpg";
import siteTeam from "./assets/leadership-team.jpg";
import projectLekki from "./assets/project-singapore.jpg";
import projectMaitama from "./assets/project-singapore.jpg";

const COMPANY = "cornerstone";
const COMPANY_LEGAL = "Cornerstone Construction Ltd";
const PHONE = "+234 800 000 0000";
const EMAIL = "hello@cornerstone.ng";

function ArrowLink({ children, href = "#projects" }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-semibold transition-colors hover:border-lime hover:text-foreground"
    >
      {children}
      <span className="grid size-7 place-items-center rounded-full bg-lime text-foreground">
        <ArrowUpRight size={14} />
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const projectList = [
    {
      name: "Lekki Bay Plaza",
      place: "Lagos · Mixed-use",
      img: projectLekki,
      number: "01",
    },
    {
      name: "Maitama Heights",
      place: "Abuja · Residential",
      img: projectMaitama,
      number: "02",
    },
  ];

  return (
    <main className="overflow-hidden bg-background text-foreground font-bricolage">
      <header className="fixed w-full top-5 z-20 mx-auto max-w-375 px-5 pt-5 sm:px-8 lg:px-12">
        <nav className="flex h-17 items-center justify-between rounded-full border border-border bg-background/95 px-5 shadow-soft sm:px-8">
          <a
            href="#top"
            aria-label={`${COMPANY} home`}
            className="flex items-center gap-2  text-[23px] font-extrabold tracking-tight"
          >
            <span className="grid text-4xl size-7 place-items-center rounded-full bg-lime text-foreground">
              <span className="size-2.5 rotate-45 rounded-xs bg-background" />
            </span>
            {COMPANY}
          </a>
          <div className="hidden items-center gap-8 text-[13px] font-semibold md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#insights">
              News
            </a>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="text-[11px] font-semibold text-muted-foreground">
              Call us&nbsp; {PHONE}
            </span>
            <a
              href="#contact"
              className="rounded-full bg-lime px-5 py-3 text-xs font-bold transition-transform hover:scale-[1.03]"
            >
              Request a quote <ArrowUpRight className="ml-2 inline" size={14} />
            </a>
          </div>
          <button
            aria-label="Open navigation"
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={18} />
          </button>
        </nav>
        {menuOpen && (
          <div className="absolute left-5 right-5 top-23 z-30 grid gap-1 rounded-2xl border border-border bg-background p-4 shadow-lg md:hidden">
            <a
              className="mobile-link"
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              className="mobile-link"
              href="#services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="mobile-link"
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              className="mobile-link"
              href="#insights"
              onClick={() => setMenuOpen(false)}
            >
              News
            </a>
            <a
              className="mobile-link font-bold"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Request a quote ↗
            </a>
          </div>
        )}
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-[1600px] gap-7 px-5 pb-20 pt-5 sm:px-8 lg:grid-cols-[1.03fr_.97fr] lg:gap-8 lg:px-12 lg:pb-28 lg:pt-6"
      >
        <div className="relative min-h-120 overflow-hidden rounded-[26px] sm:min-h-155 lg:min-h-172.5">
          <img
            src={heroSite}
            width={1200}
            height={1600}
            alt="Completed high-rise building in Nigeria at sunset"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/45 via-transparent to-foreground/5" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-background/40 bg-background/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-background backdrop-blur-md sm:bottom-8 sm:left-8">
            <span className="size-2 rounded-full bg-lime" /> Proudly Nigerian.
            Built to last.
          </div>
          <div className="absolute bottom-6 right-6 grid size-12 place-items-center rounded-full bg-lime text-foreground sm:bottom-8 sm:right-8">
            <ArrowDownRight size={20} />
          </div>
        </div>

        <div className="flex min-h-120 flex-col justify-between rounded-[26px] bg-surface px-7 py-8 sm:min-h-155 sm:px-12 sm:py-12 lg:min-h-172.5 lg:px-14 lg:py-14">
          <div>
            <p className="eyebrow mb-7">
              <span className="eyebrow-dot" />
              Registered builders and engineers. Delivering across Nigeria.
            </p>
            <h1 className="max-w-180  text-[clamp(3.1rem,6.2vw,6.4rem)] font-extrabold leading-[.91]">
              Building
              <br />
              Nigeria's
              <br />
              future<span className="text-lime">.</span>
            </h1>
            <p className="mt-7 max-w-107.5 text-base leading-7 text-muted-foreground sm:text-[17px]">
              From homes and estates to offices and roads, we deliver quality
              construction on time, on budget, and built to last.
            </p>
            <div className="mt-8">
              <ArrowLink>See our projects</ArrowLink>
            </div>
          </div>
          <div className="mt-12 flex items-end justify-between gap-4 border-t border-border pt-7">
            <div className="flex items-center gap-4 sm:gap-5">
              <span className="relative  text-[58px] font-extrabold leading-none sm:text-[72px]">
                <span className="absolute -left-5 top-1.5 z-0 size-14.5 rounded-full bg-lime sm:size-17" />
                <span className="relative z-10">25</span>
              </span>
              <span className="max-w-21.25 text-xs font-bold leading-[1.35]">
                years of
                <br />
                experience
              </span>
            </div>
            <a
              href="#about"
              className="group relative h-19.5 w-[48%] overflow-hidden rounded-full sm:h-23 sm:w-[52%]"
            >
              <img
                src={siteWorks}
                width={1008}
                height={704}
                alt="Construction crew at work on a building site"
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-foreground/35" />
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-xs font-semibold text-background">
                <span className="grid size-8 place-items-center rounded-full bg-lime text-foreground">
                  <Play size={12} fill="currentColor" />
                </span>{" "}
                How we build
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-345 px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5">01 / The difference</p>
              <h2 className="max-w-190  text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-[64px]">
                We build homes, offices
                <br className="hidden sm:block" /> and infrastructure.
              </h2>
            </div>
            <p className="max-w-70 pb-1 text-sm leading-6 text-muted-foreground">
              From site survey to handover, every stage is managed by our own
              engineers and project managers.
            </p>
          </div>
          <div id="services" className="grid gap-4 md:grid-cols-3 md:gap-5">
            <article className="flex relative min-h-85 flex-col justify-between rounded-[22px] bg-ink p-7 text-on-ink sm:min-h-100 sm:p-9">
              <div className="">
                <span className="font-mono text-xs text-on-ink/50">01.</span>
                <div className="h-px bg-on-ink/50"></div>
              </div>

              <div>
                <h3 className=" text-3xl font-bold">What we do</h3>
                <p className="mt-4 max-w-75 text-sm leading-6 text-on-ink/65">
                  Design and build, general contracting, civil works and project
                  management for residential, commercial and public clients.
                </p>
                <a
                  href="#projects"
                  aria-label="Explore what we do"
                  className="absolute -right-2 -bottom-2 border-6 border-white mt-7 grid size-14 place-items-center rounded-full bg-lime text-foreground transition-transform duration-300 hover:scale-110"
                >
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
            <article className="flex relative min-h-85 flex-col rounded-[22px] bg-lime p-7 text-foreground overflow-hidden sm:min-h-100 sm:p-9">
              <div className="">
                <span className="font-mono text-xs text-foreground/55">
                  02.
                </span>
                <div className="h-px bg-foreground/55"></div>
              </div>
              <div>
                <h3 className=" text-3xl font-bold mt-4">Our impact</h3>
                <p className="mt-3 max-w-77.5 text-sm leading-5 text-foreground/75">
                  We hire locally, source materials in Nigeria where we can, and
                  train young artisans on every site.
                </p>
                <div className="absolute -bottom-2 -left-2 mt-5 h-29.5 overflow-hidden rounded-[14px]">
                  <img
                    src={siteWorks}
                    width={1008}
                    height={704}
                    alt="Finished building facade with workers on site"
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </article>
            <article className="group relative flex min-h-85 flex-col justify-end overflow-hidden rounded-[22px] p-7 text-background sm:min-h-100 sm:p-9">
              <img
                src={estateHomes}
                width={1008}
                height={912}
                alt="Completed residential estate in Nigeria"
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-linear-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="relative">
                <span className="mb-4 block font-mono text-xs text-background/65">
                  03.
                </span>
                <h3 className=" text-3xl font-bold">Core values</h3>
                <p className="mt-3 max-w-75 text-sm leading-6 text-background/80">
                  Honesty in pricing, safety on site, and workmanship that
                  stands up to Nigerian weather.
                </p>
                <a
                  href="#approach"
                  aria-label="Discover our values"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Read more <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="border-y border-border bg-background py-5"
        aria-label="Our strengths"
      >
        <div className="mx-auto flex max-w-345 flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:gap-x-12">
          <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">
            Delivered on schedule
          </span>
          <span className="hidden w-40 h-10 overflow-hidden rounded-full sm:block">
            <img
              src={estateHomes}
              width={1008}
              height={912}
              alt=""
              loading="lazy"
              className="size-full object-cover"
            />
          </span>
          <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">
            Safe, certified sites
          </span>
          <span className="hidden w-40 h-10 overflow-hidden rounded-full sm:block">
            <img
              src={siteWorks}
              width={1008}
              height={704}
              alt=""
              loading="lazy"
              className="size-full object-cover"
            />
          </span>
          <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">
            Built to last
          </span>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-ink py-20 text-on-ink sm:py-28"
        aria-label="Our impact"
      >
        <img
          src={skyline}
          width={1920}
          height={704}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/80 to-ink/45" />
        <div className="mx-auto max-w-345 px-5 sm:px-8 lg:px-12">
          <p className="eyebrow eyebrow-invert mb-14">02 / Our track record</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-10">
            <Metric number="120+" label="Completed projects" />
            <Metric number="35+" label="Projects in progress" />
            <Metric number="₦85b+" label="Total project value" />
            <Metric number="2m+" label="Square metres built" />
          </div>
        </div>
      </section>

      <section id="projects" className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-345 px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-5">03 / Selected work</p>
              <h2 className=" text-4xl font-extrabold sm:text-5xl">
                Projects we're proud of.
              </h2>
            </div>
            <ArrowLink>View all projects</ArrowLink>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={projectList[activeProject]?.img}
              width={1200}
              height={912}
              alt={`${projectList[activeProject]?.name} development`}
              loading="lazy"
              className="h-97.5 w-full object-cover transition-all duration-500 sm:h-140"
            />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-background sm:bottom-10 sm:left-10 sm:right-10 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[.14em] text-background/70">
                  {projectList[activeProject]?.number} / Featured project
                </p>
                <h3 className=" text-3xl font-bold sm:text-5xl">
                  {projectList[activeProject]?.name}
                </h3>
                <p className="mt-2 text-sm text-background/80">
                  {projectList[activeProject]?.place}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveProject(
                      (activeProject + projectList.length - 1) %
                        projectList.length,
                    )
                  }
                  aria-label="Previous project"
                  className="grid size-11 place-items-center rounded-full border border-background/60 transition-colors hover:bg-background hover:text-foreground"
                >
                  <ArrowRight className="rotate-180" size={16} />
                </button>
                <button
                  onClick={() =>
                    setActiveProject((activeProject + 1) % projectList.length)
                  }
                  aria-label="Next project"
                  className="grid size-11 place-items-center rounded-full bg-lime text-foreground transition-transform hover:scale-105"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {projectList.map((project, index) => (
              <button
                key={project.number}
                onClick={() => setActiveProject(index)}
                aria-label={`Show ${project.name}`}
                className={`h-1.5 rounded-full transition-all ${index === activeProject ? "w-8 bg-lime" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-345 gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
          <div>
            <p className="eyebrow mb-5">04 / Our people</p>
            <h2 className=" text-4xl font-extrabold leading-[1.04] sm:text-5xl">
              Strong buildings
              <br />
              start with
              <br />
              <span className="text-lime-deep">skilled people.</span>
            </h2>
            <p className="mt-6 max-w-97.5 text-sm leading-6 text-muted-foreground">
              Our engineers, architects, quantity surveyors and site managers
              work as one team, so you deal with people who know your project
              from day one.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold"
            >
              Meet our team <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={siteTeam}
              width={1408}
              height={912}
              alt={`${COMPANY_LEGAL} engineers and site team on a project`}
              loading="lazy"
              className="h-82.5 w-full object-cover sm:h-115"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold backdrop-blur">
              One team. One standard.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-12">
        <div className="mx-auto flex max-w-345 flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="eyebrow mb-2">Accreditations</p>
            <p className=" text-xl font-bold">Registered and certified.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-xs font-semibold sm:flex sm:flex-wrap sm:gap-12">
            <span>
              <span className="mr-2 text-lime-deep">✳</span> CORBON
            </span>
            <span>
              <span className="mr-2 text-lime-deep">✳</span> COREN
            </span>
            <span>
              <span className="mr-2 text-lime-deep">✳</span> Nigerian Institute
              of Building
            </span>
            <span>
              <span className="mr-2 text-lime-deep">✳</span> Nigerian Society of
              Engineers
            </span>
          </div>
        </div>
      </section>

      <section id="insights" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-345 px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-5">05 / News and insights</p>
              <h2 className=" text-4xl font-extrabold sm:text-5xl">
                From the field.
              </h2>
            </div>
            <a
              aria-label="All news"
              href="#contact"
              className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:bg-lime"
            >
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="group">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={siteWorks}
                  width={1008}
                  height={704}
                  alt="Builders working on a concrete structure"
                  loading="lazy"
                  className="aspect-[1.5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="eyebrow mb-3 mt-5">Materials / 6 min read</p>
              <h3 className="max-w-130  text-xl font-bold sm:text-2xl">
                Building for the rainy season: what lasts in Nigerian climates.
              </h3>
            </article>
            <article className="group">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={siteWorks2}
                  width={1920}
                  height={704}
                  alt="Lagos skyline at dusk"
                  loading="lazy"
                  className="aspect-[1.5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="eyebrow mb-3 mt-5">Cities / 4 min read</p>
              <h3 className="max-w-130  text-xl font-bold sm:text-2xl">
                Housing demand in Lagos and Abuja: what builders should plan
                for.
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-lime py-16 sm:py-24">
        <div className="mx-auto flex max-w-345 flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div>
            <p className="eyebrow mb-5">Have a project in mind?</p>
            <h2 className="max-w-185  text-4xl font-extrabold leading-none sm:text-6xl">
              Let's build your
              <br className="hidden sm:block" /> next project.
            </h2>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-bold text-on-ink transition-transform hover:-translate-y-0.5"
          >
            Request a quote <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <footer className="bg-ink py-10 text-on-ink">
        <div className="mx-auto flex max-w-345 flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a
            href="#top"
            className="flex items-center gap-2  text-xl font-extrabold"
          >
            <span className="grid size-6 place-items-center rounded-full bg-lime">
              <span className="size-2 rotate-45 rounded-[2px] bg-ink" />
            </span>
            {COMPANY}
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-on-ink/70">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#insights">News</a>
            <a href="#contact">Contact</a>
          </div>
          <span className="text-xs text-on-ink/50">
            © 2026 {COMPANY_LEGAL}. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}

function Metric({ number, label }) {
  return (
    <div className="border-l border-on-ink/25 pl-5 sm:pl-7">
      <p className=" text-4xl font-extrabold leading-none sm:text-6xl">
        {number.replace(/[+]/g, "")}
        <span className="text-lime">{number.endsWith("+") ? "+" : ""}</span>
      </p>
      <p className="mt-3 max-w-32.5 text-[11px] font-semibold uppercase leading-5 tracking-widest text-on-ink/60">
        {label}
      </p>
    </div>
  );
}

export default App;
