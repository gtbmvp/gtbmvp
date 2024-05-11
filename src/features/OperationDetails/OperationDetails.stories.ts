import type { Meta, StoryObj } from '@storybook/react';
import OperationDetails from './OperationDetails';

const meta: Meta<typeof OperationDetails> = {
    title: 'Компоненты/OperationDetails',
    component: OperationDetails,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OperationDetails>;

export const Primary: Story = {
    args: {
        date: new Date(),
        sum: 500,
        category: 'Products',
        name: 'Potato',
        description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
};
