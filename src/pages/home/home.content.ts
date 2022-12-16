import { EnumServiceItems } from 'components/shared/SwitchButton';
import { Direction } from 'components/shared/InfiniteLooper';

export const SwitchButtonList: EnumServiceItems = [
  { id: 1, title: 'Candidates' },
  { id: 2, title: 'Employers' }
];

export const InfiniteLooperContent = [
  {
    speed: 60,
    direction: 'right' as Direction,
    images: [
      {
        url: '/avatar1.jpg'
      },
      {
        url: '/avatar2.jpg'
      },
      {
        url: '/avatar3.jpg'
      },
      {
        url: '/avatar4.jpg'
      }
    ]
  },
  {
    speed: 80,
    direction: 'right' as Direction,
    images: [
      {
        url: '/avatar1.jpg'
      },
      {
        url: '/avatar2.jpg'
      },
      {
        url: '/avatar3.jpg'
      },
      {
        url: '/avatar4.jpg'
      }
    ]
  },
  {
    speed: 70,
    direction: 'right' as Direction,
    images: [
      {
        url: '/avatar1.jpg'
      },
      {
        url: '/avatar2.jpg'
      },
      {
        url: '/avatar3.jpg'
      },
      {
        url: '/avatar4.jpg'
      }
    ]
  }
];
