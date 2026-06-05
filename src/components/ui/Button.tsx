import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type Variant = 'primary' | 'ghost' | 'outline' | 'gold';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: 'button';
}
interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  as: 'a';
}
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

export function Button({ variant = 'primary', size = 'md', as, ...props }: Props) {
  const cls = clsx(base, variantClass[variant], sizeClass[size], (props as ButtonProps).className);
  if (as === 'a') {
    const { className: _, ...rest } = props as AnchorProps;
    return <a className={cls} {...rest} />;
  }
  const { className: _, ...rest } = props as ButtonProps;
  return <button className={cls} {...rest} />;
}
