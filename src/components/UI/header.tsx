export default function GlassNavbar() {
  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <nav className="backdrop-blur-xl bg-white/5 border border-white/10 
                      rounded-full px-8 py-3 flex items-center justify-between 
                      w-full max-w-5xl shadow-lg">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Logo placeholder */}
          <span className="text-white font-medium text-lg">LuminaFlare</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a className="text-white/80 hover:text-white font-medium" href="#">
            Home
          </a>
          <a className="text-white/80 hover:text-white font-medium" href="#">
            Docs
          </a>
        </div>
      </nav>
    </div>
  );
}
