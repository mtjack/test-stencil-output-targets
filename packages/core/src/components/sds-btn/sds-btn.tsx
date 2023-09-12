import { Component, Prop, h } from '@stencil/core'

export type buttonAppearance =
  | 'primary'
  | 'primaryondark'
  | 'secondary'
  | 'secondaryondark'
  | 'destructive'
  | 'type'
  | 'type_sm'
  | 'typeondark'
  | 'typeondark_sm'
  | 'typeicon'
  | 'typeiconondark'

/* define a type for button appearance; */
@Component({
  tag: 'sds-btn',
  styles: `:host {
    display: block;
  }`,
  shadow: false,
})
export class SdsBtn {
  @Prop() type?: string = 'button' // can be button, submit, reset
  @Prop() label: string = 'Text label'
  @Prop() appearance: buttonAppearance = 'primary'
  @Prop() icon?: string = ''
  @Prop() link?: string = null
  @Prop() outbound?: boolean = false
  @Prop() fullwidth?: boolean = false

  @Prop() disabled?: boolean = false
  @Prop() loading?: boolean = false
  @Prop() loaded?: boolean = false

  styles = {
    disabled: [
      'disabled:active:translate-y-0 disabled:border-transparent disabled:outline-offset-0 disabled:shadow-none disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:active:outline-0 disabled:text-white disabled:border-neutral-400',
    ].join(' '),
    primary: [
      'sds-btn sds-btn--primary relative font-semibold border border-purple-500 px-10 py-3 rounded-xl shadow-[0_2px_0_0_rgba(0,0,0,0.1)] min-w-[158px] min-h-[56px] text-base', // default classes for main buttons
      'bg-purple-500 text-white', // colours
      'hover:bg-purple-550 text-neutral-100', // hover state
      'focus:outline-none focus:outline-info-500 focus:shadow-none focus:outline-2 outline-offset-2', // focus state
      'active:transform active:translate-y-0.5 active:outline-none active:outline-offset-0 active:outline-0', // active state
    ].join(' '),
    primaryondark: [
      'sds-btn sds-btn--primary-dark relative font-semibold border border-purple-500 px-10 py-3 rounded-xl shadow-[0_2px_0_0_rgba(0,0,0,0.1)] min-w-[158px] min-h-[56px] text-base', // default classes for main buttons
      'focus:outline-none focus:outline-info-500 focus:shadow-none focus:outline-2 outline-offset-2', // focus state
      'active:transform active:translate-y-0.5 active:outline-none active:outline-offset-0 active:outline-0', // active state
      'bg-white text-neutral-600 border-transparent', // mode
      'hover:bg-neutral-100 hover:text-neutral-600', // hover state
      'focus:bg-neutral-100 focus:outline-white focus:text-neutral-600 focus:shadow-none focus:outline-offset-2 focus:outline-1', // focus
      'active:bg-neutral-100 active:text-neutral-600 active:shadow-none active:outline-offset-0 active:outline-0 ', // active
    ].join(' '),
    secondary: [
      'sds-btn sds-btn--secondary relative font-semibold border border-neutral-400 px-10 py-3 rounded-xl shadow-[0_2px_0_0_rgba(0,0,0,0.1)] min-w-[158px] min-h-[56px] text-base', // default classes for main buttons
      'bg-white text-neutral-600', // colours
      'hover:bg-neutral-150 hover:border-transparent', // hover state
      'focus:bg-neutral-150 focus:border-transparent focus:outline-none focus:shadow-none focus:outline-neutral-400 focus:outline-1 focus:outline-offset-2 ', // focus state
      'active:transform active:translate-y-0.5 active:outline-offset-0 active:outline-0', // active state
    ].join(' '),
    secondaryondark: [
      'sds-btn sds-btn--secondary-dark relative font-semibold border border-neutral-400 px-10 py-3 rounded-xl shadow-[0_2px_0_0_rgba(0,0,0,0.1)] min-w-[158px] min-h-[56px] text-base', // default classes for main buttons
      'focus:bg-neutral-900/20 focus:outline-none focus:border-current focus:outline-neutral-400 focus:outline-1 focus:outline-offset-2 ', // focus state
      'active:transform active:translate-y-0.5 active:outline-offset-0 active:outline-0', // active state
      'bg-transparent outline-offset-transparent text-white border-transparent border-white', // dark mode
      'hover:bg-neutral-900/20', // dark hover state
      'focus:outline-white focus:outline-1', // dark focus
      'active:shadow-none active:outline-offset-0 active:outline-0 ', // dark active
    ].join(' '),
    type: [
      'sds-btn sds-btn--type relative font-semibold border-current group rounded-[2px] text-base',
      'text-purple-500', // colours
      'hover:text-purple-900', // hover state
      'focus:before:content-[""] focus:shadow-none focus:outline-none focus:before:top-[65%] focus:before:left-1/2 focus:before:-translate-x-1/2 focus:before:-translate-y-1/2 focus:before:transform focus:before:border-current focus:before:border-2 focus:before:absolute focus:before:w-[calc(100%+1.5rem)] focus:before:h-[calc(100%+1rem)] before:rounded-[5px]',
    ].join(' '),
    type_sm: [
      'sds-btn sds-btn--type relative font-semibold border-current group rounded-[2px] text-md',
      'text-purple-500', // colours
      'hover:text-purple-900', // hover state
      'focus:before:content-[""] focus:shadow-none focus:outline-none focus:before:top-[65%] focus:before:left-1/2 focus:before:-translate-x-1/2 focus:before:-translate-y-1/2 focus:before:transform focus:before:border-current focus:before:border-2 focus:before:absolute focus:before:w-[calc(100%+1.5rem)] focus:before:h-[calc(100%+1rem)] before:rounded-[5px]',
    ].join(' '),
    typeondark: [
      'sds-btn sds-btn--type relative font-semibold border-current group text-base',
      'text-white', // colours
      'focus:before:content-[""] focus:shadow-none focus:outline-none focus:before:top-[65%] focus:before:left-1/2 focus:before:-translate-x-1/2 focus:before:-translate-y-1/2 focus:before:transform focus:before:border-current focus:before:border-2 focus:before:absolute focus:before:w-[calc(100%+1.5rem)] focus:before:h-[calc(100%+1rem)] before:rounded-[5px]',
    ].join(' '),
    typeondark_sm: [
      'sds-btn sds-btn--type relative font-semibold border-current group text-md',
      'text-white', // colours
      'focus:before:content-[""] focus:shadow-none focus:outline-none focus:before:top-[65%] focus:before:left-1/2 focus:before:-translate-x-1/2 focus:before:-translate-y-1/2 focus:before:transform focus:before:border-current focus:before:border-2 focus:before:absolute focus:before:w-[calc(100%+1.5rem)] focus:before:h-[calc(100%+1rem)] before:rounded-[5px]',
    ].join(' '),
    typeicon: [
      'sds-btn sds-btn--type relative font-semibold border-current group text-base',
      'text-purple-500', // colours
      'hover:text-purple-900', // hover state
      'focus:before:content-[""] focus:shadow-none focus:outline-none focus:before:top-[45%] focus:before:left-1/2 focus:before:-translate-x-1/2 focus:before:-translate-y-1/2 focus:before:transform focus:before:border-current focus:before:border-2 focus:before:absolute focus:before:w-[calc(100%+1.75rem)] focus:before:h-[calc(100%+1rem)] before:rounded-[5px]',
    ].join(' '),
    typeiconondark: [
      'sds-btn sds-btn--type relative font-semibold rounded border-current group text-base',
      'text-white', // colours
      'focus:before:content-[""] focus:shadow-none focus:outline-none focus:before:top-[45%] focus:before:left-1/2 focus:before:-translate-x-1/2 focus:before:-translate-y-1/2 focus:before:transform focus:before:border-current focus:before:border-2 focus:before:absolute focus:before:w-[calc(100%+1.75rem)] focus:before:h-[calc(100%+1rem)] before:rounded-[5px]',
    ].join(' '),
    destructive: [
      'sds-btn sds-btn--destructive relative font-semibold px-10 py-3 border border-error-500 rounded-xl shadow-[0_2px_0_0_rgba(0,0,0,0.1)] min-w-[158px] min-h-[56px] text-base',
      'bg-error-500 text-white', // colours
      'hover:bg-error-700 hover:border-error-700', // hover state
      'focus:outline-none focus:shadow-none focus:bg-error-700 focus:outline-error-500 outline-offset-2 focus:outline-2', // focus state
      'active:transform active:translate-y-0.5 active:outline-offset-0 active:outline-0', // active state
    ].join(' '),
  }

  // some conditional rendering here as some attributes aren't
  // valid on anchor / button tags
  render() {
    const ButtonLink = this.link ? 'a' : 'button'
    return (
      <ButtonLink
        {...(this.link && { href: this.link })}
        {...(!this.link && {
          type: this.type,
          disabled: this.disabled,
        })}
        {...(this.outbound === true && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        aria-busy={this.loading ? 'true' : 'false'}
        class={`sds-btn sds-btn--${this.appearance} ${
          this.styles[this.appearance]
        } ${
          this.disabled && this.styles.disabled
        } inline-block w-full whitespace-nowrap text-center ${
          this.fullwidth ? '' : 'md:!w-auto'
        }`}
      >
        <span
          class={`
          ${
            this.loading || this.loaded
              ? 'relative inline-block text-transparent'
              : 'relative inline-block'
          } ${
            this.appearance === 'type' ||
            this.appearance === 'type_sm' ||
            this.appearance === 'typeondark' ||
            this.appearance === 'typeondark_sm'
              ? 'after:w-100 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:transform after:bg-current after:duration-300 after:content-[""]'
              : ''
          }`}
        >
          <slot />
          {this.icon && (
            <span class='icon duration-400 relative ml-2 inline-block align-text-bottom text-current transition-transform group-hover:translate-x-1 group-focus:translate-x-1'>
              <sds-icon icon={this.icon} />
            </span>
          )}
        </span>
        <sds-spinner loading={this.loading} loaded={this.loaded} />
      </ButtonLink>
    )
  }
}
