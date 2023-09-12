import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'sds-spinner',
  styles: `.check {
    height: 34px;
    width: 34px;
  }
  
  .check path {
    fill: none;
    stroke-width: 2.25;
    stroke-dasharray: 23;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  .check.animating path {
    animation: draw 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) backwards;
    animation-direction: reverse;
  }
  
  @keyframes draw {
    to {
      stroke-dashoffset: -23;
    }
  }
  `,
  shadow: false,
})
export class SdsSpinner {
  @Prop() color = '' // tailwind currentColor class by default to same text color as button parent
  @Prop() loading: boolean
  @Prop() loaded: boolean

  render() {
    return (
      <span
        class={`${this.color} spinner-container pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-current`}
      >
        <svg
          class={`${this.loading ? 'visible' : 'invisible'} ${
            this.loaded ? 'invisible' : ''
          }`}
          width='31px'
          height='31px'
          viewBox='0 0 66 66'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <animateTransform
              attributeName='transform'
              type='rotate'
              values='0 33 33;270 33 33'
              begin='0s'
              dur='1.4s'
              fill='freeze'
              repeatCount='indefinite'
            />
            <circle
              fill='none'
              stroke-width='7'
              stroke-linecap='round'
              cx='33'
              cy='33'
              r='30'
              stroke-dasharray='187'
              stroke-dashoffset='610'
            >
              <animate
                attributeName='stroke'
                values='currentColor'
                begin='0s'
                dur='5.6s'
                fill='freeze'
                repeatCount='indefinite'
              />
              <animateTransform
                attributeName='transform'
                type='rotate'
                values='0 33 33;135 33 33;450 33 33'
                begin='0s'
                dur='1.4s'
                fill='freeze'
                repeatCount='indefinite'
              />
              <animate
                attributeName='stroke-dashoffset'
                values='187;46.75;187'
                begin='0s'
                dur='1.4s'
                fill='freeze'
                repeatCount='indefinite'
              />
            </circle>
          </g>
        </svg>
        <svg
          class={`${
            this.loaded ? 'animating visible' : 'invisible'
          } check absolute top-0 stroke-current stroke-[3px]`}
          stroke-linejoin='round'
          stroke-linecap='round'
          viewBox='0 0 24 24'
        >
          <path d='M4.1 12.7L9 17.6 20.3 6.3' fill='none' />
        </svg>
      </span>
    )
  }
}
