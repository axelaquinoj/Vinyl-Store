
export const sample_vinyls: any[] = [
    {
      id: 1,
      name: 'Views',
      albumLength: '10-20',
      price: 10,
      favorite: false,
      artist: ['Drake'],
      stars: 4.5,
      imageUrl: 'assets/views.jpg',
      tags: ['Rap', 'Hip-Hop', 'R&B','Drake'],
    },
    {
      id: 2,

      name: '2014 Forest Hills Drive',
      price: 20,
      albumLength: '20-30',
      favorite: true,
      artist: ['J.Cole'],
      stars: 4.7,
      imageUrl: 'assets/2014ForestHillsDrive.jpg',
      tags: ['Hip-Hop', 'Rap', 'J.Cole'],
    },
    {
      id: 3,

      name: 'Savage Mode II',
      price: 5,
      albumLength: '10-15',
      favorite: false,
      artist: ['21 Savage', 'Metro Boomin'],
      stars: 3.5,
      imageUrl: 'assets/savagemode2.png',
      tags: ['Hip-Hop', 'Rap'],
    },
    {
      id: 4,

      name: 'ye',
      price: 2,
      albumLength: '15-20',
      favorite: true,
      artist: ['Kanye West'],
      stars: 3.3,
      imageUrl: 'assets/ye.jpeg',
      tags: ['Hip-Hop', 'Rap'],
    },
    {
      id: 5,

      name: 'Double or Nothing',
      price: 11,
      albumLength: '40-50',
      favorite: false,
      artist: ['Big Sean', 'Metro Boomin'],
      stars: 3.0,
      imageUrl: 'assets/dbleornth.png',
      tags: ['Hip-Hop', 'Rap'],
    },
    {
      id: 6,
      name: 'KIDS SEE GHOSTS',
      price: 9,
      albumLength: '40-50',
      favorite: false,
      artist: ['KIDS SEE GHOSTS', 'Kanye West', 'Kid Cudi'],
      stars: 4.0,
      imageUrl: 'assets/ksg.png',
      tags: ['Hip-Hop', 'Rap'],
    },
]
export const sample_tags:any[] = [
  { name: 'All', count: 6 },
  { name: 'Hip-Hop', count: 4 },
  { name: 'Rap', count: 2 },
  { name: 'Big Sean', count: 3 },
  { name: 'Rap', count: 2 },
  { name: 'R&B', count: 1 },
  { name: 'J.Cole', count: 1 },
  { name: 'Drake', count: 1 },
]
export const sample_users: any[] =[
  {
    name: 'John Doe',
    email:'johndoe@gmail.com',
    password: '12345',
    address: 'Toronto On',
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email:'janedoe@gmail.com',
    password: '12345',
    address: 'Shanghai',
    isAdmin: false,
  }
]