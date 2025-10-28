"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TypeformModal } from "@/components/TypeformModal";

/* FAQ Component */
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="border border-gray-800 rounded-xl bg-gray-900/50 overflow-hidden transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-900 transition-colors"
      >
        <span className="font-semibold text-gray-100 text-lg">{question}</span>
        <motion.span
          className="text-emerald-400 text-2xl inline-block"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {isOpen ? "−" : "+"}
        </motion.span>
      </button>
      <AnimatePresence initial={false} mode="sync">
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-5 pb-5 text-gray-300 text-sm sm:text-base border-t border-gray-800 will-change-transform"
          >
            <div className="pt-3">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* === Landing Page === */
export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setOpenFAQ(openFAQ === i ? null : i);
  };

  /* FAQ Data */
  const faqs = [
    {
      question: "How do I start and what is needed?",
      answer:
        "Joining is simple and completely free. Just click the 'Join Discord' button at the top of the page, and you'll be guided through setup. You'll only need your own trading funds to get started — no sign-up fees or contracts.",
    },
    {
      question: "What if I know nothing about trading?",
      answer:
        "That's perfectly fine! PipVault was designed for beginners as much as advanced traders. You'll receive educational resources, trade breakdowns, and community mentorship to help you learn step-by-step at your own pace.",
    },
    {
      question: "Why is it free?",
      answer:
        "Our broker partnership and sponsors cover all our operational costs, so you don't have to. Vantage, our official partner, is an award-winning trading platform that funds your access to the PipVault server. As long as you trade with us there, everything remains 100% free — making it a complete no-brainer.",
    },
    {
      question: "How much money do I need to start?",
      answer:
        "Vantage has a minimum deposit of just £50, but we recommend starting with at least £300 for better flexibility and growth potential. You're always in control of your funds, and how much you start with is entirely up to you.",
    },
    {
      question: "What are the benefits of becoming a PipVault Partner?",
      answer:
        "Our partners gain access to one of the most lucrative affiliate-style systems in trading. You'll earn substantial commissions for every active client you bring in, with some members scaling to five figures per month in passive income. All you have to do is promote your personal brand — we handle the backend, mentorship, and automation.",
    },
    {
      question: "Can I trade and also become a Partner?",
      answer:
        "Absolutely — many of our members start as traders and transition into partners once they see results. You can trade for your own growth while building a second stream of income by simply sharing your journey with others.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen flex flex-col font-sans scroll-smooth">

      {/* ========================== */}
      {/* 1. HERO + ABOUT YOU SECTION */}
      {/* ========================== */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Animated Glow */}
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500 opacity-20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Branding Image */}
        <motion.img
          src="/og-image.png"
          alt="PipVault Branding"
          className="relative z-10 w-48 sm:w-60 md:w-72 mb-8 rounded-2xl shadow-2xl border border-gray-800"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 relative z-10 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
          Automate Your Trading. Elevate Your Income.
        </h1>

        {/* === Video Placeholder (Re-added) === */}
        <div className="w-full max-w-2xl mb-10 relative z-10">
          <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 hover:border-emerald-500 transition-colors cursor-pointer">
            <div className="flex flex-col items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-3.028A1 1 0 008 9.028v5.944a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-400 text-sm">
                🎥 Video Placeholder — Your intro video goes here
              </p>
            </div>
          </div>
        </div>

        {/* About Text */}
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed relative z-10">
          I'm <span className="font-semibold text-emerald-400">Aidan</span>, a
          digital entrepreneur with a background in software engineering and a
          passion for trading. After multiple ventures that didn’t work out, I
          found a system that’s profitable, scalable, and accessible — and I’m
          on a mission to share it. Through PipVault, I mentor traders,
          entrepreneurs, and creators to master markets, mindset, and
          automation.
        </p>

        {/* CTA */}
        <motion.p
          className="text-lg font-semibold text-emerald-400 mt-6 mb-3 animate-bounce relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          👇 Tap here to start now
        </motion.p>

        <a
          href="https://discord.gg/3EAgVbYhEz"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center justify-center bg-emerald-500 text-black font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:bg-emerald-400 transition w-full sm:w-auto"
        >
          Join Our Discord Community
        </a>

        <p className="text-gray-400 mt-4 text-sm">
          💬 Over{" "}
          <span className="text-emerald-400 font-semibold">100+</span> traders
          joined this month
        </p>
      </section>

      {/* ========================== */}
      {/* 2. WHY PIPVAULT SECTION */}
      {/* ========================== */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-gray-950 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-emerald-400">
          ⚡ Why Choose PipVault
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed text-base sm:text-lg">
          Unlike most trading groups that broadcast signals and vanish, PipVault
          is a thriving ecosystem of verified results, real mentorship, and a
          team of 7–8 figure earners who care about your growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {[
            {
              title: "✅ Verified Results",
              desc: "Transparent performance and live-tracked trades — no fake screenshots or hidden losses.",
            },
            {
              title: "🧠 Real Mentorship",
              desc: "Guidance from seasoned traders and entrepreneurs focused on mindset, strategy, and growth.",
            },
            {
              title: "🤝 True Community",
              desc: "A collaborative hub — not a one-way signal feed. Every member is valued and supported.",
            },
            {
              title: "💻 Automation Ready",
              desc: "Our in-development auto trader lets you copy trades automatically for free.",
            },
            {
              title: "🌍 Global Network",
              desc: "Join traders and partners worldwide scaling their passive income through PipVault.",
            },
            {
              title: "📈 Scalable Opportunity",
              desc: "Trade, partner, or both — every path leads to personal and financial growth.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border border-gray-800 shadow-lg hover:border-emerald-500 transition">
                <CardContent className="p-6">
                  <h3 className="text-emerald-400 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== */}
      {/* 3. RESULTS SECTION */}
      {/* ========================== */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-950 to-black text-center overflow-hidden"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-emerald-400">
          💹 Real Results. Real Traders.
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
          Proof over promises — here’s a look at some of the verified profits
          shared by our community members.
        </p>

        <motion.div
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 1 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-72 h-48 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 text-sm snap-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Screenshot Placeholder {i + 1}
              {/* Replace with actual image e.g.
              <img src="/results/result1.png" className="w-full h-full object-cover rounded-xl" /> */}
            </motion.div>
          ))}
        </motion.div>
        <p className="text-gray-500 text-sm mt-4 italic">
          (Replace placeholders with your 8 client profit screenshots)
        </p>
      </motion.section>

      {/* ========================== */}
      {/* 4. HOW TO START COPY TRADING */}
      {/* ========================== */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-gray-950 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-emerald-400">
          🚀 How to Start Copy Trading Now
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed text-base sm:text-lg">
          Join the{" "}
          <span className="text-emerald-400 font-semibold">
            PipVault FREE VIP Group
          </span>{" "}
          for daily trades, mindset support, and community mentorship — all
          without fees or contracts.
        </p>

        <ul className="text-gray-300 max-w-2xl mx-auto space-y-3 mb-10 text-left text-sm sm:text-base">
          <li>✅ 5–7+ high-quality trades per day</li>
          <li>✅ 85% success rate on gold signals</li>
          <li>✅ Step-by-step trade guidance</li>
          <li>✅ Weekly mindset coaching</li>
          <li>✅ Trusted broker partnership</li>
        </ul>

        <p className="text-gray-400 mb-10 text-sm">
          ✗ No setup costs • ✗ No monthly fees • ✗ No contracts ever
        </p>
      </motion.section>

      {/* ========================== */}
      {/* 5. PARTNER PROGRAM */}
      {/* ========================== */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-950 to-black text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-emerald-400">
          👑 Become a PipVault Partner
        </h2>
        <p className="text-emerald-400 text-sm mb-4 italic">
          🔥 Spots are limited — next intake closes soon.
        </p>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-base sm:text-lg">
          Our plug-and-play business model gives you a ready-made system to earn
          commissions for referring traders. The entire backend — onboarding,
          automation, and support — is handled by our internal team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-10 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
              What We Provide:
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
              <li>• Done-for-you <span className="text-emerald-400">Discord Group Setup</span></li>
              <li>• Daily Content Posted (Trading wins, results, success stories)</li>
              <li>• Step-by-Step <span className="text-emerald-400">Growth Guide</span></li>
              <li>• Mentorship on Building Long-Term Passive Income</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
              Your Role:
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
              <li>• Stay authentic</li>
              <li>• Post your lifestyle and daily updates</li>
              <li>• Invite your audience to our pre-made Discord community</li>
              <li>• Let the system and results <span className="text-emerald-400">do the talking</span></li>
            </ul>
          </div>
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold px-8 py-4 rounded-xl shadow-lg w-full sm:w-auto"
        >
          💼 Apply to Become a Partner
        </Button>

        <p className="text-emerald-400 text-sm mt-4">
          No experience needed — we'll train you personally.
        </p>
      </motion.section>

      {/* ========================== */}
      {/* 6. FAQ SECTION */}
      {/* ========================== */}
      <section className="py-20 px-6 md:px-20 bg-gray-950 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-emerald-400">
          ❓ Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === i}
              onClick={() => toggleFAQ(i)}
            />
          ))}
        </div>
        <p className="text-gray-400 mt-8 text-sm italic">
          Still have questions? Jump in the{" "}
          <a
            href="https://discord.gg/3EAgVbYhEz"
            className="text-emerald-400 underline hover:text-emerald-300"
          >
            Discord
          </a>{" "}
          — our team replies fast.
        </p>
      </section>

      {/* ========================== */}
      {/* FOOTER + CTA */}
      {/* ========================== */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-950">
        © {new Date().getFullYear()} PipVault. All rights reserved.
      </footer>

      <a
        href="https://discord.gg/3EAgVbYhEz"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 rounded-full shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 z-50"
      >
        Join Discord 💬
      </a>

      <TypeformModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        typeformUrl="https://form.typeform.com/to/XT5ryUFU"
      />
    </main>
  );
}
