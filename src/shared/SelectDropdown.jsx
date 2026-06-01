import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

/**
 * variant: 'light' | 'dark'
 * Renders the dropdown via a React Portal so it is never clipped
 * by parent overflow:hidden or stacking-context constraints.
 */
export default function SelectDropdown({ options, value, onChange, variant = 'light' }) {
  const [open, setOpen]   = useState(false)
  const [rect, setRect]   = useState(null)
  const triggerRef        = useRef(null)
  const dropdownRef       = useRef(null)
  const isDark            = variant === 'dark'

  const calcRect = useCallback(() => {
    if (!triggerRef.current) return
    const r = triggerRef.current.getBoundingClientRect()
    setRect({ top: r.bottom + 6, left: r.left, width: r.width })
  }, [])

  const handleToggle = () => {
    calcRect()
    setOpen((o) => !o)
  }

  /* Reposition on scroll / resize while open */
  useEffect(() => {
    if (!open) return
    const update = () => calcRect()
    window.addEventListener('scroll', update, true)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update, true)
      window.removeEventListener('resize', update)
    }
  }, [open, calcRect])

  /* Close on outside click */
  useEffect(() => {
    const onDown = (e) => {
      if (triggerRef.current?.contains(e.target)) return
      if (dropdownRef.current?.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  /* ── Style tokens ── */
  const triggerCls = isDark
    ? 'w-full flex items-center justify-between gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-[14px] text-white outline-none backdrop-blur-sm transition hover:bg-white/20'
    : 'w-full flex items-center justify-between gap-2 rounded-xl border border-[#e5edf8] bg-[#f8faff] px-4 py-3 text-[14px] text-[#07133f] outline-none transition hover:border-[#ff2638]/40 focus:border-[#ff2638]'

  const panelCls = isDark
    ? 'overflow-hidden rounded-xl border border-white/20 bg-[#071340]/96 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.5)]'
    : 'overflow-hidden rounded-xl border border-[#e5edf8] bg-white shadow-[0_16px_40px_rgba(8,29,82,0.16)]'

  const itemBase    = 'w-full px-4 py-3 text-left text-[14px] font-semibold transition duration-150 cursor-pointer flex items-center justify-between gap-2'
  const itemActive  = 'bg-[#ff2638] text-white'
  const itemDefault = isDark ? 'text-white/90 hover:bg-white/10' : 'text-[#24314f] hover:bg-[#fff0f2] hover:text-[#ff2638]'

  return (
    <div className="relative w-full" ref={triggerRef}>
      <button type="button" className={triggerCls} onClick={handleToggle} aria-haspopup="listbox" aria-expanded={open}>
        <span className={value ? '' : (isDark ? 'text-white/45' : 'text-[#8a9ab8]')}>
          {value || 'Select Treatment'}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && rect && createPortal(
        <div
          ref={dropdownRef}
          style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, zIndex: 99999 }}
        >
          <div className={panelCls}>
            <div className="max-h-[240px] overflow-y-auto py-1">
              {options.map((opt) => {
                const sel = opt === value
                return (
                  <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={sel}
                    className={`${itemBase} ${sel ? itemActive : itemDefault}`}
                    onClick={() => { onChange(opt); setOpen(false) }}
                  >
                    <span>{opt}</span>
                    {sel && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
