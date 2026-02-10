const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: CTA & Branding */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-full">
            <h2 className="font-display text-3xl font-bold text-white mb-6 tracking-tighter">
              TRUTH<span className="text-accent">HUB.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Empowering students to navigate the complexities of digital
              information with clarity and integrity.
            </p>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            ©{currentYear} Student Fact Check Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
