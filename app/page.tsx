"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TypeformModal } from "@/components/TypeformModal";

// Accordion-style FAQ item
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

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I know nothing about trading?",
      answer:
        "That’s completely fine! Our program is beginner-friendly and provides full training materials, guidance, and community support to help you learn everything from the ground up.",
    },
    {
      question: "Why is it free?",
      answer:
        "Our broker partnership and sponsors cover the costs for us, so you don’t have to. Vantage (our official partner) is an award-winning trading platform that funds member access to our community. As long as you trade through Vantage with us, our education, support, and resources are completely free — making it a no-brainer.",
    },
    {
      question: "How do I start and what is needed?",
      answer:
        "Joining is simple — just click the Discord invite link at the top of the page to get started. It’s completely free to join our community, and the only funds you’ll ever need are your own trading funds when you’re ready to start trading live.",
    },
    {
      question: "How much money do I need to start?",
      answer:
        "Vantage has a minimum deposit of £50 to open a live trading account, but we generally recommend starting with at least £300 to make proper use of trade opportunities and risk management. Ultimately, the amount you start with is completely up to you.",
    },
    {
      question: "What is the IB/Partner Program and how does it work?",
      answer:
        "The IB (Introducing Broker) or Partner Program is an opportunity to build genuine long-term passive income by partnering directly with PipVault. As an IB, you’ll earn substantial commissions for every trader you refer through your link — and because everything is automated on our end, your only focus is growing your personal brand and community. Many of our partners have scaled their referrals into 4–5 figure monthly incomes simply by promoting PipVault authentically through their social platforms.",
    },
    {
      question: "Can I trade and also become a Partner?",
      answer:
        "Absolutely — many of our members start as traders and naturally transition into partners once they see results. You can trade for your own growth while building a passive income stream by simply sharing your journey with others.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen flex flex-col font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.img
          src="/og-image.png"
          alt="PipVault Branding"
          className="relative z-10 w-48 sm:w-60 md:w-72 mb-8 rounded-2xl shadow-2xl border border-gray-800"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 relative z-10">
          PipVault:{" "}
          <span className="text-emerald-400">Your Path to Prosperity</span>
        </h1>

        <div className="w-full max-w-2xl mb-12">
          <div className="relative aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 hover:border-emerald-500 transition-colors cursor-pointer">
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
              <p className="text-gray-400">
                🎥 Video Placeholder — Your introduction video goes here
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed relative z-10">
          I'm <span className="font-semibold text-emerald-400">Aidan</span>, a founder of PipVault — a
          community built to help traders, entrepreneurs, and creators thrive
          through mindset, markets, and mentorship. What started as a small
          signals group is now an ecosystem powered by automation, real support
          teams, and our trusted broker partnership with{" "}
          <span className="font-semibold text-emerald-400">Vantage</span>.
        </p>

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

        {/* Social Proof */}
        <p className="text-gray-400 mt-3 text-sm">
          Over <span className="text-emerald-400 font-semibold">100+</span> traders joined this month.
        </p>
      </section>

      {/* Copy Trading Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-950 text-center">
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
          ❌ No setup costs • ❌ No monthly fees • ❌ No contracts ever
        </p>

        <ol className="text-gray-300 max-w-2xl mx-auto space-y-2 text-left text-sm sm:text-base mb-10">
          <li>1️⃣ Click the Discord button above to begin setup</li>
          <li>2️⃣ Follow instructions in our support chat</li>
          <li>3️⃣ Once verified, join our VIP Group</li>
        </ol>

        <p className="text-gray-500 italic mb-10 text-xs sm:text-sm">
          (This is NOT financial advice. Past profits do not guarantee future
          results.)
        </p>
      </section>

      {/* Partner / IB Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-950 to-black text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-emerald-400">
          👑 Become a PipVault Partner
        </h2>

        {/* Urgency Note */}
        <p className="text-emerald-400 text-sm mb-4 italic">
          🔥 Spots are limited — next intake closes soon.
        </p>

        <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-base sm:text-lg">
          Our plug-and-play business model gives you a ready-made system to earn
          commissions for referring traders. The entire backend — onboarding,
          automation, and support — is handled by our internal team.
        </p>

        <ul className="text-gray-300 max-w-2xl mx-auto text-left space-y-3 mb-10 text-sm sm:text-base">
          <li>💼 Automated backend systems & support</li>
          <li>🎙️ Access to a podcast studio in Marbella</li>
          <li>🏝️ Paid luxury content retreats</li>
          <li>💰 Commission per verified trader</li>
          <li>🧠 Mentorship from 7–8 figure earners</li>
        </ul>

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
              <li>• Stay <span className="text-emerald-400">authentic</span></li>
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
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full max-w-3xl mx-auto mb-24 px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          💡 Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-20 bg-black text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-emerald-400">
          💬 What Our Members Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "James T.",
              text: "PipVault completely changed how I approach trading. The mindset and support are unmatched.",
            },
            {
              name: "Sophie M.",
              text: "Joined for the signals, stayed for the community. I've learned more here in 2 months than in 2 years alone.",
            },
            {
              name: "Liam R.",
              text: "The partnership program gave me financial freedom — the system truly works if you follow it.",
            },
          ].map((t, i) => (
            <Card
              key={i}
              className="bg-gray-900 border border-gray-800 text-left shadow-lg"
            >
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic text-sm sm:text-base">
                  "{t.text}"
                </p>
                <p className="text-emerald-400 font-semibold text-sm sm:text-base">
                  — {t.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-950">
        © {new Date().getFullYear()} PipVault. All rights reserved.
      </footer>

      {/* Floating Discord Button */}
      <a
        href="https://discord.gg/3EAgVbYhEz"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 rounded-full shadow-lg animate-pulse z-50"
      >
        Join Discord 💬
      </a>

      {/* Typeform Modal */}
      <TypeformModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        typeformUrl="https://form.typeform.com/to/XT5ryUFU"
      />
    </main>
  );
}
