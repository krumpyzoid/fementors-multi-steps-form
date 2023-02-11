import IconArcade from './assets/icon-arcade.svg';
import IconAdvanced from './assets/icon-advanced.svg';
import IconPro from './assets/icon-pro.svg';

interface step {
    number: number;
    title: string;
};
export const steps: step[] = [
    {
        number: 1,
        title: 'your info',
    },
    {
        number: 2,
        title: 'select plan',
    },
    {
        number: 3,
        title: 'add-ons',
    },
    {
        number: 4,
        title: 'summary',
    }
];

interface plan {
    value: string;
    name: string;
    monthly: number;
    yearly: number;
    bonus: number;
    icon: string;
};
export const plans: plan[] = [
    {
        value: 'arcade',
        name: 'Arcade',
        monthly: 9,
        yearly: 90,
        bonus: 2,
        icon: IconArcade,
    },
    {
        value: 'advanced',
        name: 'Advanced',
        monthly: 9,
        yearly: 90,
        bonus: 2,
        icon: IconAdvanced,
    },
    {
        value: 'pro',
        name: 'Pro',
        monthly: 9,
        yearly: 90,
        bonus: 2,
        icon: IconPro,
    },
];

interface addon {
    id: string;
    title: string;
    subtitle: string;
    monthly: number;
    yearly: number;
};
export const addons: addon[] = [
    {
        id: '1e14df',
        title: 'Online service',
        subtitle: 'Access to multiplayer games',
        monthly: 1,
        yearly: 10,
    },
    {
        id: '2eoakl',
        title: 'Larger storage',
        subtitle: 'Extra 1TB of cloud save',
        monthly: 2,
        yearly: 20,
    },
    {
        id: '3ozdkk',
        title: 'Customizable profile',
        subtitle: 'Custom theme on your profile',
        monthly: 2,
        yearly: 20,
    },
];

export interface IForm {
    name: string;
    email: string;
    phone: string;
    plan: 'arcade' | 'advanced' | 'pro';
    billing: 'monthly' | 'yearly';
    addons: string[];
};
export const initialValues: IForm = {
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    billing: 'monthly',
    addons: [],
};