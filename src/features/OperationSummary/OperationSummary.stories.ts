import type { Meta, StoryObj } from '@storybook/react';
import OperationSummary from './OperationSummary';

const meta: Meta<typeof OperationSummary> = {
    title: 'Компоненты/OperationSummary',
    component: OperationSummary,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OperationSummary>;

export const Primary: Story = {
    args: {
        sum: 500,
        category: 'Products',
        name: 'Potato',
        description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
};
