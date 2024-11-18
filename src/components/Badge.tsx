interface BadgeProps {
  text: string;
}

export function Badge({ text }: BadgeProps) {
  return (
    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm border border-orange-200 hover:bg-orange-200 transition-colors">
      {text}
    </span>
  );
}