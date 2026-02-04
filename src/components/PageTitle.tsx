interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 py-16 mb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 animate-fadeInUp">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-slate-400 max-w-2xl animate-slideInLeft animation-delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
