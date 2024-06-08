import type { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta: Meta<typeof App> = {
    title: 'Компоненты/Главная',
    component: App,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof App>;

export const Primary: Story = {
    args: {},
};
