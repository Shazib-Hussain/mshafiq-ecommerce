export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#0d0d0d] border border-white/5 hover:border-[#c9a84c]/20 p-8 transition-all duration-500 group">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/60 text-sm leading-relaxed font-light mb-8 italic">
        &ldquo;{testimonial.comment}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
          <span className="text-[#c9a84c] text-xs font-semibold tracking-wider">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <p className="text-white text-sm font-medium tracking-wide">{testimonial.name}</p>
          <p className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase font-light">
            {testimonial.perfumeName}
          </p>
        </div>
      </div>
    </div>
  );
}
