import type { Meta, StoryObj } from '@storybook/react';
import InputModal from './InputModal';

const meta: Meta<typeof InputModal> = {
    title: 'Компоненты/InputModal',
    component: InputModal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputModal>;

export const Primary: Story = {
    args: {},
};
