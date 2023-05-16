import { BsFillGridFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { FaFeatherAlt } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';

export const MENU_ITEMS = [
  {
    title: 'Dashboard',
    Icon: BsFillGridFill,
    path: '/',
    target: '_self',
  },
  {
    title: 'Practice',
    Icon: IoRocketSharp,
    path: '/practice',
    target: '_self',
  },
  {
    title: 'Articles',
    Icon: FaFeatherAlt,
    path: '/articles',
    disabled: true,
    target: '_self',
  },
  {
    title: 'Login',
    Icon: FaUserAlt,
    path: '/login',
    target: '_self',
  },
];

export const USER_MENU_ITEMS = [
  {
    title: 'Dashboard',
    Icon: BsFillGridFill,
    path: '/',
    target: '_self',
  },
  {
    title: 'Practice',
    Icon: IoRocketSharp,
    path: '/practice',
    target: '_self',
  },
  {
    title: 'Articles',
    Icon: FaFeatherAlt,
    path: '/articles',
    disabled: true,
    target: '_self',
  },
];

export const BOTTOM_MENU_ITEMS = [
  {
    title: 'Docs',
    Icon: HiOutlineDocumentText,
    path: '/docs',
    disabled: true,
    target: '_self',
  },
  {
    title: 'Github',
    Icon: AiFillGithub,
    path: 'https://github.com/Trendyol/codex',
    target: '_blank',
  },
];
