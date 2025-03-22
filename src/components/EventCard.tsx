
import React from 'react';
import { Calendar, MapPin, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
    price: number;
    currency: string;
    category: string;
    featured?: boolean;
    attendance?: number;
    rating?: number;
  };
  variant?: 'default' | 'featured' | 'compact';
}

const EventCard = ({ event, variant = 'default' }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (variant === 'featured') {
    return (
      <div className="event-card group relative overflow-hidden rounded-xl shadow-lg h-[350px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
        <img 
          src={event.image} 
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
          {event.featured && (
            <div className="px-2 py-1 bg-primary text-xs text-white rounded-sm mb-2 w-fit">FEATURED</div>
          )}
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <div className="flex items-center text-white/90 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(event.date)}</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-white/70"></div>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md flex items-center">
                <Users className="h-3 w-3 mr-1" />
                <span className="text-xs">{event.attendance || '0'} attending</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md">
                <span className="text-xs">{event.rating || '0'}★</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium">
              {event.currency} {event.price}
            </div>
          </div>
          
          <Link 
            to={`/events/${event.id}`}
            className="absolute inset-0 z-30"
            aria-label={`View details for ${event.title}`}
          />
        </div>
      </div>
    );
  }
  
  if (variant === 'compact') {
    return (
      <div className="event-card flex rounded-xl overflow-hidden shadow-md h-24 bg-white">
        <div className="w-24 h-full relative">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          {event.featured && (
            <div className="absolute top-1 left-1 px-1 py-0.5 bg-primary text-[10px] text-white rounded">
              HOT
            </div>
          )}
        </div>
        <div className="flex-1 p-3 overflow-hidden">
          <h3 className="font-medium text-sm mb-1 truncate">{event.title}</h3>
          <div className="flex items-center text-muted-foreground text-xs mb-1">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 inline mr-1" />
              {event.location}
            </div>
            <div className="text-xs font-medium text-primary">
              {event.currency} {event.price}
            </div>
          </div>
          <Link 
            to={`/events/${event.id}`}
            className="absolute inset-0"
            aria-label={`View details for ${event.title}`}
          />
        </div>
      </div>
    );
  }

  // Default card style
  return (
    <div className="event-card group relative bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute right-3 top-3 z-20">
          <button className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-foreground/70 hover:text-primary transition-colors" />
          </button>
        </div>
        {event.featured && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-xs text-white rounded-sm z-20">
            FEATURED
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-2">
          {event.category}
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{event.title}</h3>
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-sm font-medium">
            <span className="text-primary">{event.currency} {event.price}</span>
          </div>
          <Link 
            to={`/events/${event.id}`}
            className="text-xs font-medium text-foreground/80 hover:text-primary group-hover:underline transition-all"
          >
            View Details
          </Link>
        </div>
        
        <Link 
          to={`/events/${event.id}`}
          className="absolute inset-0"
          aria-label={`View details for ${event.title}`}
        />
      </div>
    </div>
  );
};

export default EventCard;
