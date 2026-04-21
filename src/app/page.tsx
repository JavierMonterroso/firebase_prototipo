
import { MobileContainer } from '@/components/layout/MobileContainer';
import { BottomNav } from '@/components/layout/BottomNav';
import { Hero } from '@/components/home/Hero';
import { CategoryChip } from '@/components/ui/CategoryChip';
import { MapPlaceholder } from '@/components/home/MapPlaceholder';
import { PlaceCard } from '@/components/ui/PlaceCard';
import { CATEGORIES, PLACES } from '@/lib/data';

export default function Home() {
  const featuredPlaces = PLACES.filter(p => p.featured);

  return (
    <MobileContainer className="pb-32 bg-background" noPadding>
      <Hero />
      
      <div className="px-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-foreground">Explora por categorías</h2>
          <button className="text-primary text-[13px] font-bold px-3 py-1 bg-primary/5 rounded-full">Ver todas</button>
        </div>
        
        <div className="flex gap-5 overflow-x-auto pb-6 hide-scrollbar -mx-5 px-5">
          {CATEGORIES.map((category) => (
            <CategoryChip 
              key={category.id}
              name={category.name}
              iconName={category.icon}
            />
          ))}
        </div>

        <MapPlaceholder />

        <div className="flex items-center justify-between mb-5 mt-4">
          <h2 className="text-foreground">Imperdibles</h2>
          <button className="text-primary text-[13px] font-bold px-3 py-1 bg-primary/5 rounded-full">Ver más</button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-8 hide-scrollbar -mx-5 px-5">
          {featuredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
        
        <div className="mt-2">
          <h2 className="text-foreground mb-5">Novedades para ti</h2>
          <div className="flex flex-col gap-4">
            {PLACES.filter(p => !p.featured).slice(0, 3).map((place) => (
              <PlaceCard key={place.id} place={place} horizontal />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileContainer>
  );
}
