
"use client"

import { MobileContainer } from '@/components/layout/MobileContainer';
import { BottomNav } from '@/components/layout/BottomNav';
import { Hero } from '@/components/home/Hero';
import { CategoryChip } from '@/components/ui/CategoryChip';
import { PlaceCard } from '@/components/ui/PlaceCard';
import { CATEGORIES, PLACES } from '@/lib/data';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  // Logic: Top 5 places ordered by rating (descending)
  const topRatedPlaces = [...PLACES]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/search?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <MobileContainer className="pb-32 bg-background" noPadding>
      <Hero />
      
      <div className="px-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-foreground">Explora por categorías</h2>
        </div>
        
        <div className="flex gap-5 overflow-x-auto pb-6 hide-scrollbar -mx-5 px-5">
          {CATEGORIES.map((category) => (
            <CategoryChip 
              key={category.id}
              name={category.name}
              iconName={category.icon}
              onClick={() => handleCategoryClick(category.name)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mb-5 mt-4">
          <h2 className="text-foreground">Los más valorados</h2>
          <span className="text-primary text-[13px] font-bold">Top 5</span>
        </div>

        <div className="flex flex-col gap-4 pb-8">
          {topRatedPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} horizontal />
          ))}
        </div>
      </div>

      <BottomNav />
    </MobileContainer>
  );
}
