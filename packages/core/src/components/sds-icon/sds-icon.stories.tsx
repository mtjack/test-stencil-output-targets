import { Meta } from '@storybook/html'
import { IconsList } from './IconsList'

export default {
  title: 'Foundations/Icons',
  parameters: {
    docs: {
      description: {
        component:
          'Component for displaying the [DSM functional icons](https://skillsdevelopmentscotland.invisionapp.com/dsm/skillsdevelopmentscotland/new-design-system/nav/635f870519ff18c257f0e0cc/folder/635f870519ff18b7e9f0e0ba).',
      },
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(IconsList),
      control: { type: 'select' },
      description: 'The icon glyph name as defined in IconsList.ts',
      defaultValue: 'Info',
    },
  },
} as Meta

interface IconArgs {
  icon: string
}

const Template = (args: IconArgs) =>
  `<sds-icon icon="${args.icon}" class="text-info-700"></sds-icon>`

export const Icons = Template.bind({})
Icons.args = {
  icon: 'Info',
}
Icons.parameters = {
  docs: {
    description: {
      story:
        'Icon styling is done on the `<sds-icon>` element directly, the `<svg>` element has `fill: currentColor` set.',
    },
  },
}
