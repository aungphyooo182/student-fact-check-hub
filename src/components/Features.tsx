import React, { useState } from "react";
import { Zap, Search, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  // Code ထဲကနေ ဒီ true/false နဲ့ပဲ ထိန်းချုပ်ပါ
  const [isMyanmar, setIsMyanmar] = useState(true);

  const content = {
    en: [
      {
        title: "Identify Triggers",
        description:
          "We spot sensationalist language and emotional triggers common in Facebook rumors.",
        icon: <Zap className="text-accent" size={32} />,
      },
      {
        title: "Source Investigation",
        description:
          "Tracing information back to its original creator or checking official government archives.",
        icon: <Search className="text-accent" size={32} />,
      },
      {
        title: "Integrity Standards",
        description:
          "Using the SIFT method to ensure every check is objective and non-partisan.",
        icon: <ShieldCheck className="text-accent" size={32} />,
      },
    ],
    mm: [
      {
        title: "လှုံ့ဆော်မှုများကို ရှာဖွေခြင်း",
        description:
          "Facebook ကောလာဟလတွေမှာ ပါလေ့ရှိတဲ့ စိတ်ခံစားချက်ကို လှုံ့ဆော်တဲ့ အသုံးအနှုန်းတွေကို ကျွန်တော်တို့ ရှာဖွေဖော်ထုတ်ပါတယ်။",
        icon: <Zap className="text-accent" size={32} />,
      },
      {
        title: "မူလအရင်းအမြစ်ကို စုံစမ်းခြင်း",
        description:
          "သတင်းအချက်အလက်တွေရဲ့ မူလဖန်တီးသူ သို့မဟုတ် အစိုးရရဲ့ တရားဝင် မှတ်တမ်းမှတ်ရာတွေအထိ နောက်ကြောင်းပြန် လိုက်ပါတယ်။",
        icon: <Search className="text-accent" size={32} />,
      },
      {
        title: "ဘက်မလိုက်သော စံနှုန်းများ",
        description:
          "စစ်ဆေးမှုတိုင်းဟာ ဘက်မလိုက်ဘဲ တိကျမှန်ကန်မှုရှိစေဖို့ SIFT နည်းလမ်းကို အသုံးပြုပြီး ဆောင်ရွက်ပါတယ်။",
        icon: <ShieldCheck className="text-accent" size={32} />,
      },
    ],
  };

  const items = isMyanmar ? content.mm : content.en;

  return (
    <section
      id="what-we-do"
      className="py-24 bg-midnight border-t border-white/5 transition-all duration-500"
      style={{ fontFamily: isMyanmar ? "var(--font-latyay)" : "inherit" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Toggle Debug (Testing purpose only) */}
        {/* <div className="flex justify-center mb-12">
          <button
            onClick={() => setIsMyanmar(!isMyanmar)}
            className="text-[10px] uppercase tracking-widest text-slate-500 border border-slate-800 px-4 py-2 rounded-full hover:bg-white/5 transition-all"
          >
            Language: {isMyanmar ? "Myanmar" : "English"}
          </button>
        </div> */}

        <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={`${isMyanmar}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 hover:border-accent/20 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              <h3
                className="text-2xl font-bold text-white mb-4 leading-snug"
                style={{
                  fontFamily: isMyanmar ? "var(--font-press)" : "inherit",
                }}
              >
                {item.title}
              </h3>

              <p
                className="text-slate-400 leading-relaxed text-base"
                style={{
                  fontFamily: isMyanmar ? "var(--font-cartoon)" : "inherit",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
