import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type Variant = 'primary' | 'ghost' | 'outline' | 'gold';
type Size    = 'sm' | 'md' | 'lg';

interface BaseProps { variant?: Variant; size?: Size; }

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };
type Props = ButtonProps | AnchorProps;

const variantClass: Record<Variant, string> = {
  primary: 'bg-[#8A1538] text-white shadow-[0_4px_16px_rgba(138,21,56,0.30)] hover:bg-[#6b1029] active:scale-[0.98]',
  ghost:   'bg-transparent text-[#8A1538] hover:bg-[#8A1538]/8',
  outline: 'border border-[#8A1538] text-[#8A1538] bg-transparent hover:bg-[#8A1538] hover:text-white',
  gold:    'bg-[#C9A86A] text-white shadow-[0_4px_16px_rgba(201,168,106,0.35)] hover:bg-[#b8944d] active:scale-[0.98]',
};
const sizeClass: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};
const base = 'inline-flex items-center justify-center gap-2 font-bold rounded-[16px] transition-all duration-200 focus-visible:outline-[#8A1538] select-none';

export function Button(props: Props) {
  const { variant = 'primary', size = 'md' } = props;
  const cls = clsx(base, variantClass[variant], sizeClass[size]);

  if (props.as === 'a') {
    const { as: _a, variant: _v, size: _s, className, ...rest } = props as AnchorProps;
    return <a className={clsx(cls, className)} {...rest} />;
  }
  const { as: _a, variant: _v, size: _s, className, ...rest } = props as ButtonProps;
  return <button className={clsx(cls, className)} {...rest} />;
}
