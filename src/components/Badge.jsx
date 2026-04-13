export default function Badge({ children, variant = 'soft' }) {
  const styles = {
    soft: 'bg-[#efe5d9] text-[#5f4a42]',
    success: 'bg-[#dcebdc] text-[#386147]',
    accent: 'bg-[#c46d5a] text-white',
    light: 'bg-[#f3ece4] text-[#8b7569]',
  }

  return (
    <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}