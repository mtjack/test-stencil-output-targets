import { Meta } from '@storybook/html'
import { IconsList } from '../sds-icon/IconsList'

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: `This is the <strong><code><sds-btn /></code></strong> component. It is used to create a button with a label and/or icon. <br/><br/>
          <h3>Available props:</h3>
          <ul class='p-0 m-0'>
            <li><strong>appearance</strong>: The appearance of the button. Options are <code>primary</code>, <code>primaryondark</code>, <code>secondary</code>, <code>secondaryondark</code>, <code>type</code>, <code>type_sm</code>, <code>typeondark</code>, <code>typeondark_sm</code>, <code>typeicon</code>, <code>typeiconondark</code>, <code>destructive</code></li>
            <li><strong>label</strong>: The text label of the button</li>
            <li><strong>type</strong>: The type attribute of the button (button, submit, reset)</li>
            <li><strong>icon</strong>: The icon glyph name as defined in IconsList.ts</li>
            <li><strong>disabled</strong>: Disables the button</li>
            <li><strong>loading</strong>: Displays the loading animation</li>
            <li><strong>loaded</strong>: Displays the loaded animation</li>
          </ul>
          <h3>Important note:</h3>
          <p>The <strong>loading</strong> and <strong>loaded</strong> props can only be applied to <strong>primary</strong>, <strong>secondary</strong> and the <strong>destructive</strong> button types.</p>
          <p>The <strong>loaded</strong> attribute will override the <strong>loading</strong> attribute if both are present. (you can see this below by toggling the attributes)</p>
          <p>The loading and loaded attributes are not tied to any specific events or actions and there are no listeners attached to the buttons by default, they are simply visual states that can be toggled on and off within your app.</p>
          `,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#00305d' },
      ],
    },
  },
  argTypes: {
    appearance: {
      control: {
        disable: true,
      },
    },
    icon: {
      options: Object.keys(IconsList),
      control: { type: 'select' },
      description: 'The icon glyph name as defined in IconsList.ts',
      defaultValue: '',
    },
  },
} as Meta

interface SDSButtonArgs {
  appearance: string
  label: string
  loading?: boolean
  loaded?: boolean
  disabled?: boolean
  type?: string // defaults to 'button'
  icon?: string // adds sds-icon component if passed
}

const Template = (args: SDSButtonArgs): string =>
  `<sds-btn
    appearance="${args.appearance}"
    type="${args.type || 'button'}"
    ${args.icon ? `icon='${args.icon}'` : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.loading ? 'loading' : ''}
    ${args.loaded ? 'loaded' : ''}
  >${args.label && args.label}</sds-btn>`.replace(/^\s*\n/gm, '') // removes line-breaking whitespace in storybook code snippet

// ? Button instances
export const Primary = Template.bind({})
export const PrimaryOnDark = Template.bind({})
export const Secondary = Template.bind({})
export const SecondaryOnDark = Template.bind({})
export const Type = Template.bind({})
export const TypeSmall = Template.bind({})
export const TypeOnDark = Template.bind({})
export const TypeOnDarkSmall = Template.bind({})
export const TypeIcon = Template.bind({})
export const TypeIconOnDark = Template.bind({})
export const Destructive = Template.bind({})

Primary.parameters = {
  backgrounds: { default: 'light' },
  controls: { exclude: ['icon', 'appearance'] },
}

Primary.args = {
  label: 'Text label',
  disabled: false,
  loading: false,
  loaded: false,
  appearance: 'primary',
}

PrimaryOnDark.parameters = {
  backgrounds: { default: 'dark' },
  controls: { exclude: ['icon', 'appearance'] },
}

PrimaryOnDark.args = {
  label: 'Text label',
  disabled: false,
  loading: false,
  loaded: false,
  appearance: 'primaryondark',
}

Secondary.parameters = {
  backgrounds: { default: 'light' },
  controls: { exclude: ['icon', 'appearance'] },
}

Secondary.args = {
  label: 'Text label',
  disabled: false,
  loading: false,
  loaded: false,
  appearance: 'secondary',
}

SecondaryOnDark.parameters = {
  backgrounds: { default: 'dark' },
  controls: { exclude: ['icon', 'appearance'] },
}

SecondaryOnDark.args = {
  label: 'Text label',
  disabled: false,
  loading: false,
  loaded: false,
  appearance: 'secondaryondark',
}

Type.parameters = {
  backgrounds: { default: 'light' },
  controls: { exclude: ['icon', 'appearance'] },
}

Type.args = {
  label: 'Text label',
  appearance: 'type',
}

TypeSmall.parameters = {
  backgrounds: { default: 'light' },
  controls: { exclude: ['icon', 'appearance'] },
}

TypeSmall.args = {
  label: 'Text label',
  appearance: 'type_sm',
}

TypeOnDark.parameters = {
  backgrounds: { default: 'dark' },
  controls: { exclude: ['icon', 'appearance'] },
}

TypeOnDark.args = {
  label: 'Text label',
  appearance: 'typeondark',
}

TypeOnDarkSmall.parameters = {
  backgrounds: { default: 'dark' },
  controls: { exclude: ['icon', 'appearance'] },
}

TypeOnDarkSmall.args = {
  label: 'Text label',
  appearance: 'typeondark_sm',
}

TypeIcon.parameters = {
  backgrounds: { default: 'light' },
  controls: { exclude: ['appearance'] },
}

TypeIcon.args = {
  label: 'Text label',
  appearance: 'typeicon',
  icon: 'ArrowRight',
}

TypeIconOnDark.parameters = {
  backgrounds: { default: 'dark' },
  controls: { exclude: ['appearance'] },
}

TypeIconOnDark.args = {
  label: 'Text label',
  appearance: 'typeiconondark',
  icon: 'ArrowRight',
}

Destructive.parameters = {
  backgrounds: { default: 'light' },
  controls: { exclude: ['icon', 'appearance'] },
}

Destructive.args = {
  label: 'Text label',
  loading: false,
  loaded: false,
  appearance: 'destructive',
}
