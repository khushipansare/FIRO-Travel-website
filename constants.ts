import { Destination } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Majestic Ladakh',
    region: 'Leh Ladakh',
    description: 'Experience the stark beauty of high-altitude deserts and azure lakes.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    priceStart: 18500,
    hotels: [
      { name: 'The Grand Dragon', rating: 5 },
      { name: 'Zostel Leh', rating: 4 },
      { name: 'Stok Palace Heritage', rating: 5 }
    ],
    touristPoints: [
      { name: 'Pangong Lake' },
      { name: 'Magnetic Hill' },
      { name: 'Nubra Valley' }
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Royal Rajasthan',
    region: 'Rajasthan',
    description: 'Immerse yourself in the land of kings, palaces, and endless desert dunes.',
    imageUrl: 'https://picsum.photos/800/800?random=2', // Portrait
    priceStart: 22000,
    hotels: [
      { name: 'Rambagh Palace', rating: 5 },
      { name: 'Umaid Bhawan', rating: 5 },
      { name: 'The Johri', rating: 4 }
    ],
    touristPoints: [
      { name: 'Amer Fort' },
      { name: 'Hawa Mahal' },
      { name: 'Thar Desert' }
    ]
  },
  {
    id: '3',
    name: 'Serene Kashmir',
    region: 'Kashmir',
    description: 'Discover paradise on earth with blooming tulip gardens and houseboats on Dal Lake.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    priceStart: 15999,
    hotels: [
      { name: 'The Lalit Grand Palace', rating: 5 },
      { name: 'Khyber Himalayan Resort', rating: 5 },
      { name: 'Heritage Houseboats', rating: 4 }
    ],
    touristPoints: [
      { name: 'Dal Lake' },
      { name: 'Gulmarg Gondola' },
      { name: 'Shalimar Bagh' }
    ]
  },
  {
    id: '4',
    name: 'Himachal Heights',
    region: 'Himachal Pradesh',
    description: 'Retreat to the snowy peaks and lush pine forests of the Himalayas.',
    imageUrl: 'https://picsum.photos/800/900?random=4', // Portrait
    priceStart: 12500,
    hotels: [
      { name: 'Wildflower Hall', rating: 5 },
      { name: 'The Oberoi Cecil', rating: 5 },
      { name: 'Norbu The Montanna', rating: 4 }
    ],
    touristPoints: [
      { name: 'Rohtang Pass' },
      { name: 'Spiti Valley' },
      { name: 'Solang Valley' }
    ]
  },
  {
    id: '5',
    name: 'Spiritual Uttarakhand',
    region: 'Uttarakhand',
    description: 'Find inner peace in the yoga capital of the world and trek through majestic valleys.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    priceStart: 10500,
    hotels: [
      { name: 'Ananda In The Himalayas', rating: 5 },
      { name: 'The Roseate Ganges', rating: 5 }
    ],
    touristPoints: [
      { name: 'Rishikesh' },
      { name: 'Valley of Flowers' }
    ]
  },
  {
    id: '6',
    name: 'Vibrant Gujarat',
    region: 'Gujarat',
    description: 'Explore the white desert and the rich cultural tapestry of western India.',
    imageUrl: 'https://picsum.photos/800/500?random=6',
    priceStart: 14200,
    hotels: [
      { name: 'Rann Riders', rating: 4 },
      { name: 'The Fern', rating: 4 }
    ],
    touristPoints: [
      { name: 'Rann of Kutch' },
      { name: 'Gir National Park' }
    ]
  }
];

export const MOCK_USER = {
  name: 'Aarav Patel',
  email: 'aarav@example.com'
};
