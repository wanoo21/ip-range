import {
  Component,
  Prop,
  Element,
  Event,
  EventEmitter,
  ComponentInterface
} from '@stencil/core';

@Component({
  tag: 'ip-slider',
  styleUrl: 'ip-slider.scss',
  shadow: true
})
export class IpSLider implements ComponentInterface {
  @Element()
  private el: HTMLElement;

  private range: HTMLInputElement;

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
  private input: EventEmitter;

  componentDidLoad() {
    this.range = this.el.shadowRoot.querySelector('input');
    this._setAttributes();
  }

  componentDidUpdate() {
    this._setAttributes();
  }

  private _setAttributes() {
    this.el.setAttribute('aria-disabled', `${this.disabled}`);
    this.el.setAttribute('aria-valuemax', `${this.max}`);
    this.el.setAttribute('aria-valuemin', `${this.min}`);
    this.el.setAttribute('aria-valuenow', `${+this.value}`);
    this.el.setAttribute('value', `${+this.value}`);
  }

  private _onInput(srcEvent: Event) {
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
        onInput={ev => this._onInput(ev)}
        disabled={this.disabled}
        min={this.min}
        max={this.max}
        step={this.step}
        value={this.value}
      />
    );
  }
}
