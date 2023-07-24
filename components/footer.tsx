"use client";

// import { AnimatePresence, motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { DateTime } from "luxon";
import { useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS));

  setTimeout(() => {
    setTime(DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS));
  }, 1000);

  // TODO: Add keyboard shortcuts
  // TODO: Add right click menu

  // TODO: Add calendar when clicked on time
  // TODO: Add a quote generator
  // TODO: Add a chatbot (GPT-3.5 or GPT-4)
  // TODO: Add a proxy checker (HTTP/S)
  // TODO: Add a terminal (with a few commands)

  // const [isVisible, setIsVisible] = useState(true);

  return (
    <footer className="flex items-center justify-between rounded-b-lg bg-stone-900/50 px-8 py-2 text-xs">
      {/* <AnimatePresence>
        {isVisible && (
          <motion.div
            animate={{ opacity: 1 }}
            className="flex items-center text-white/90 blur-[3px] transition hover:blur-none"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            This world is cruel yet so beautiful.
          </motion.div>
        )}
      </AnimatePresence> */}

      <div className="flex gap-4 text-white/90">
        <button className="transition-transform hover:scale-125 hover:animate-pulse">
          <a href="https://instagram.com/iov92i" rel="noopener noreferrer" target="_blank">
            <Instagram size={24} strokeWidth={1.0} />
          </a>
        </button>
        <button className="transition-transform hover:scale-125 hover:animate-pulse">
          <a href="https://twitter.com/wtsrz4" rel="noopener noreferrer" target="_blank">
            <Twitter size={24} strokeWidth={1.0} />
          </a>
        </button>
        <button className="transition-transform hover:scale-125 hover:animate-pulse">
          <a
            href="https://linkedin.com/in/vila-de-aquila"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin size={24} strokeWidth={1.0} />
          </a>
        </button>
        <button className="transition-transform hover:scale-125 hover:animate-pulse">
          <a href="https://github.com/vt92i" rel="noopener noreferrer" target="_blank">
            <Github size={24} strokeWidth={1.0} />
          </a>
        </button>
      </div>

      <div className="flex items-center text-white/90 blur-[3px] transition hover:blur-none">
        This world is cruel yet so beautiful.
      </div>

      <div className="text-white/90">
        <ul className="flex gap-2">
          <li className="w-32 p-2 text-center transition-colors hover:bg-stone-900/50">{time}</li>
          {/* <li
            className="p-2 text-white/50 transition-colors hover:bg-stone-900/50"
            onClick={() => setIsVisible(!isVisible)}
          >
            Quote
          </li>
          <li className="p-2 text-white/50 transition-colors hover:bg-stone-900/50">ChatGPT</li>
          <li className="p-2 text-white/50 transition-colors hover:bg-stone-900/50">
            Proxy Checker
          </li>
          <li className="p-2 text-white/50 transition-colors hover:bg-stone-900/50">Terminal</li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
