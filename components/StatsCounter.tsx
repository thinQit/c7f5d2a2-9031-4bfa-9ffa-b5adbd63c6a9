"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [
    { value: '250K+', label: 'Orders Delivered' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '12K+', label: '5-Star Reviews' },
    { value: '48h', label: 'Average Dispatch Time' },
  ],
  bgColor,
}: Partial<StatsCounterProps>) {
  return (
    <section className={'py-16 ' + (bgColor || 'bg-primary text-primary-foreground')}>
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className={'grid gap-8 text-center ' + ('grid-cols-2 md:grid-cols-' + Math.min(stats.length || 1, 4))}>
          {stats.map(function (stat, i) {
            return (
              <div key={i}>
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
