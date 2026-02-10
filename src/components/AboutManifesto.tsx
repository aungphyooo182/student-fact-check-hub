import { useState } from "react";
import { motion } from "framer-motion";

const AboutManifesto = () => {
  // code ထဲကနေ ဒီ state လေးနဲ့ပဲ ထိန်းပေးရုံပါပဲ
  const [isMyanmar, _] = useState(true);

  const content = {
    en: {
      font: "inherit", // မူလ system font သို့မဟုတ် sans-serif
      label: "The Motivation",
      title: (
        <>
          In a world of <br />
          <span className="text-slate-500 italic">
            infinite scroll,
          </span> <br /> truth is the anchor.
        </>
      ),
      p1: "Facebook has become the modern town square for students, but the algorithm prioritizes engagement over accuracy. We noticed a gap: rumors spread in minutes, while verification takes hours.",
      p2: "We created this hub to empower the next generation of digital citizens. It’s not just about what is true; it’s about learning the skill of questioning.",
      mission: "Our Mission",
      missionDesc:
        "To transform passive scrollers into active investigators. We provide the methodology and the tools needed to verify news.",
      vision: "Our Vision",
      visionDesc:
        "A digital landscape where misinformation loses its power because every student has the 'internal filter' to recognize it.",
    },
    mm: {
      font: "var(--font-khithaungg)", // မြန်မာလိုဆိုရင် ခေတ်ဟောင်း style သုံးမယ်
      label: "တွန်းအား",
      title: (
        <>
          အဆုံးမဲ့{" "}
          <span className="text-slate-500 italic">ပွတ်ဆွဲနေတဲ့လောကမှာ</span>{" "}
          <br /> အမှန်တရားဟာ ကျောက်ဆူးတစ်ခုပါ။
        </>
      ),
      p1: "Facebook ဟာ ကျောင်းသားတွေအတွက် ခေတ်သစ်လူမှုရင်ပြင်တစ်ခု ဖြစ်လာပေမဲ့ Algorithm တွေက တိကျမှုထက် စိတ်ဝင်စားမှုကိုပဲ ဦးစားပေးနေပါတယ်။ ကောလာဟလတွေက မိနစ်ပိုင်းအတွင်း ပျံ့နှံ့နေချိန်မှာ အမှန်အတည်ပြုချက်က နာရီပေါင်းများစွာ ကြာမြင့်နေတာကို ကျွန်တော်တို့ သတိပြုမိခဲ့ပါတယ်။",
      p2: "ဒစ်ဂျစ်တယ်မျိုးဆက်သစ်တွေအတွက် ဒီ Hub ကို ဖန်တီးခဲ့တာပါ။ ဒါဟာ အမှန်တရားကို သိဖို့တင်မကဘဲ ပြန်လည်မေးခွန်းထုတ်တတ်တဲ့ အရည်အချင်းကို လေ့ကျင့်ပေးဖို့လည်း ဖြစ်ပါတယ်။",
      mission: "ရည်မှန်းချက်",
      missionDesc:
        "Passive ဆန်ဆန် ကြည့်ရုံသက်သက်ကနေ တက်ကြွတဲ့ စုံစမ်းစစ်ဆေးသူတွေအဖြစ် ပြောင်းလဲပေးဖို့ပါ။",
      vision: "မျှော်မှန်းချက်",
      visionDesc:
        "ကျောင်းသားတိုင်းမှာ သတင်းမှားကို ချက်ချင်းခွဲခြားနိုင်တဲ့ 'Internal Filter' ကိုယ်စီရှိလာစေဖို့ပါ။",
    },
  };

  const current = isMyanmar ? content.mm : content.en;

  return (
    <section
      id="about"
      className="bg-midnight text-white py-24 lg:py-40"
      style={{ fontFamily: current.font }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Testing Switch (Code ထဲမှာ state change ရုံနဲ့ ရပါတယ်) */}
        {/* <button
          onClick={() => setIsMyanmar(!isMyanmar)}
          className="mb-8 text-[10px] opacity-50 border border-white/20 px-2 py-1 rounded uppercase tracking-widest hover:opacity-100 transition-opacity"
        >
          {isMyanmar ? "Switch to English" : "မြန်မာစာသို့ ပြောင်းရန်"}
        </button> */}

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div
            key={isMyanmar ? "mm" : "en"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              {current.label}
            </span>
            <h2
              className={`font-bold mb-8 leading-tight ${isMyanmar ? "text-4xl md:text-5xl leading-[1.3]" : "text-4xl md:text-6xl font-display"}`}
            >
              {current.title}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {current.p1}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              {current.p2}
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <div className="w-full lg:w-1/2 aspect-[4/5] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent z-10" />
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 scale-110" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              key={`m-${isMyanmar}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${isMyanmar ? "font-[var(--font-press)]" : ""}`}
              >
                {current.mission}
              </h3>
              <p className="text-slate-400">{current.missionDesc}</p>
            </motion.div>
            <motion.div
              key={`v-${isMyanmar}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${isMyanmar ? "font-[var(--font-press)]" : ""}`}
              >
                {current.vision}
              </h3>
              <p className="text-slate-400">{current.visionDesc}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManifesto;
