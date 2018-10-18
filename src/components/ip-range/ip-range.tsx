import {
  Component,
  Prop,
  Element,
  Event,
  EventEmitter,
  ComponentInterface
} from '@stencil/core';

@Component({
  tag: 'ip-range',
  styleUrl: 'ip-range.scss',
  shadow: true
})
export class IpRange implements ComponentInterface {
  @Element()
  el: HTMLElement;

  range: HTMLInputElement;

  @Prop({ attr: 'value', mutable: true })
  value: number = 0;

  @Prop({ attr: 'min' })
  min: number = 0;

  @Prop({ attr: 'max' })
  max: number = 100;

  @Prop({ attr: 'step' })
  step: number = 1;

  @Prop({ attr: 'disabled', reflectToAttr: true })
  disabled: boolean = false;

  @Event()
  input: EventEmitter;

  componentDidLoad() {
    this.range = this.el.shadowRoot.querySelector('input');
    this.setAttributes();
  }

  componentDidUpdate() {
    this.setAttributes();
  }

  setAttributes() {
    this.el.setAttribute('aria-disabled', `${this.disabled}`);
    this.el.setAttribute('aria-valuemax', `${this.max}`);
    this.el.setAttribute('aria-valuemin', `${this.min}`);
    this.el.setAttribute('aria-valuenow', `${+this.value}`);
    this.el.setAttribute('value', `${+this.value}`);
  }

  onInput(srcEvent: Event) {
    srcEvent.stopPropagation();
    const { value, min, max, step } = this.range;
    this.value = +value;
    this.input.emit({
      srcEvent,
      value: +value,
      min: +min,
      max: +max,
      step: +step
    });
  }

  render() {
    return (
      <input
        type="range"
        onInput={ev => this.onInput(ev)}
        disabled={this.disabled}
        min={this.min}
        max={this.max}
        step={this.step}
        value={this.value}
      />
    );
  }
}
