import { Component, Prop, h } from '@stencil/core'
import { IconsList } from './IconsList'

@Component({
  tag: 'sds-icon',
  shadow: false,
})
export class SdsIcon {
  /**
   * The glyph key name as defined in IconsList.ts
   */
  @Prop() icon!: string

  render() {
    /**
     * Prop validation
     */
    if (this.icon in IconsList === false) {
      throw new Error(
        `The glyph name "${this.icon}" does not exist, please check the spelling and casing or refer to the IconsList.ts file.`,
      )
    }

    return (
      <svg
        width='24px'
        height='24px'
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='none' fill-rule='evenodd'>
          <path d='M0 0h24v24H0z' />
          <path d={IconsList[this.icon]} fill='currentColor'></path>
        </g>
      </svg>
    )
  }
}
