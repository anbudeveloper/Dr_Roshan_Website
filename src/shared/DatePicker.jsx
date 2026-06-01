import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

const DAYS   = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

function toDateStr(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function formatDisplay(dateStr) {
  if (!dateStr) return null
  const [y, m, d] = dateStr.split('-').map(Number)
  return `${MONTHS[m - 1]} ${d}, ${y}`
}

/**
 * variant: 'light' | 'dark'
 * Uses a React Portal so the calendar is never clipped by overflow:hidden parents.
 */
export default function DatePicker({ value, onChange, variant = 'light' }) {
  const today    = new Date()
  const todayStr = toDateStr(today.getFullYear(), today.getMonth(), today.getDate())

  const [open, setOpen]           = useState(false)
  const [rect, setRect]           = useState(null)
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [viewYear, setViewYear]   = useState(today.getFullYear())
  const triggerRef                = useRef(null)
  const calendarRef               = useRef(null)
  const isDark                    = variant === 'dark'

  const calcRect = useCallback(() => {
    if (!triggerRef.current) return
    const r = triggerRef.current.getBoundingClientRect()
    setRect({ top: r.bottom + 6, left: r.left, width: Math.max(r.width, 280) })
  }, [])

  const handleOpen = () => {
    if (!open && value) {
      const [y, m] = value.split('-').map(Number)
      setViewYear(y); setViewMonth(m - 1)
    }
    calcRect()
    setOpen((o) => !o)
  }

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

  useEffect(() => {
    const onDown = (e) => {
      if (triggerRef.current?.contains(e.target)) return
      if (calendarRef.current?.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1) }
    else setViewMonth((m) => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1) }
    else setViewMonth((m) => m + 1)
  }

  /* ── Build 42-cell grid ── */
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth    = new Date(viewYear, viewMonth + 1, 0).getDate()
  const daysInPrev     = new Date(viewYear, viewMonth, 0).getDate()
  const prevMon = viewMonth === 0 ? 11 : viewMonth - 1
  const prevYr  = viewMonth === 0 ? viewYear - 1 : viewYear
  const nextMon = viewMonth === 11 ? 0 : viewMonth + 1
  const nextYr  = viewMonth === 11 ? viewYear + 1 : viewYear

  const cells = []
  for (let i = firstDayOfWeek - 1; i >= 0; i--)
    cells.push({ day: daysInPrev - i, month: prevMon, year: prevYr, outside: true })
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, month: viewMonth, year: viewYear, outside: false })
  while (cells.length < 42)
    cells.push({ day: cells.length - firstDayOfWeek - daysInMonth + 1, month: nextMon, year: nextYr, outside: true })

  /* ── Style tokens ── */
  const triggerCls = isDark
    ? 'w-full flex items-center justify-between gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-[14px] text-white outline-none backdrop-blur-sm transition hover:bg-white/20'
    : 'w-full flex items-center justify-between gap-2 rounded-xl border border-[#e5edf8] bg-[#f8faff] px-4 py-3 text-[14px] text-[#07133f] outline-none transition hover:border-[#ff2638]/40'

  const panelCls = isDark
    ? 'rounded-2xl border border-white/15 bg-[#071340]/96 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
    : 'rounded-2xl border border-[#e5edf8] bg-white shadow-[0_20px_50px_rgba(8,29,82,0.16)]'

  const divider  = isDark ? 'border-white/10'  : 'border-[#f0f4ff]'
  const navBtn   = isDark
    ? 'p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition'
    : 'p-1.5 rounded-lg text-[#5a6a8a] hover:text-[#ff2638] hover:bg-[#fff0f2] transition'
  const dayHdr   = isDark ? 'text-white/35' : 'text-[#b0bcd0]'
  const footerLk = isDark ? 'text-white/50 hover:text-white' : 'text-[#5a6a8a] hover:text-[#ff2638]'

  return (
    <div className="relative w-full" ref={triggerRef}>
      {/* Trigger */}
      <button type="button" onClick={handleOpen} className={triggerCls}>
        <span className={value ? '' : (isDark ? 'text-white/45' : 'text-[#8a9ab8]')}>
          {value ? formatDisplay(value) : 'Select Date'}
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-60">
          <rect x="3" y="4" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Calendar portal */}
      {open && rect && createPortal(
        <div
          ref={calendarRef}
          style={{ position: 'fixed', top: rect.top, left: rect.left, width: '280px', zIndex: 99999 }}
        >
          <div className={panelCls}>
            {/* Month nav */}
            <div className={`flex items-center justify-between px-4 py-3 border-b ${divider}`}>
              <span className={`text-[15px] font-black ${isDark ? 'text-white' : 'text-[#07133f]'}`}>
                {MONTHS[viewMonth]}, {viewYear}
              </span>
              <div className="flex gap-0.5">
                <button type="button" onClick={prevMonth} className={navBtn} aria-label="Previous month">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M9.5 3.5L6 7.5l3.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" onClick={nextMonth} className={navBtn} aria-label="Next month">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M5.5 3.5L9 7.5l-3.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 px-3 pt-3 pb-1">
              {DAYS.map((d) => (
                <div key={d} className={`text-center text-[11px] font-bold tracking-wide ${dayHdr}`}>{d}</div>
              ))}
            </div>

            {/* Cells */}
            <div className="grid grid-cols-7 px-3 pb-2 gap-y-0.5">
              {cells.map((cell, i) => {
                const ds         = toDateStr(cell.year, cell.month, cell.day)
                const isSelected = ds === value
                const isToday    = ds === todayStr
                const outside    = cell.outside

                let cls = 'h-8 w-8 mx-auto flex items-center justify-center rounded-full text-[13px] font-semibold transition duration-150 cursor-pointer '
                if (isSelected)
                  cls += 'bg-[#ff2638] text-white shadow-[0_4px_14px_rgba(255,38,56,0.45)] '
                else if (isToday)
                  cls += isDark ? 'border-2 border-white/60 text-white ' : 'border-2 border-[#07133f] text-[#07133f] '
                else if (outside)
                  cls += isDark ? 'text-white/18 ' : 'text-[#d4dbe8] '
                else
                  cls += isDark ? 'text-white/80 hover:bg-white/12 ' : 'text-[#24314f] hover:bg-[#fff0f2] hover:text-[#ff2638] '

                return (
                  <button
                    key={i}
                    type="button"
                    className={cls}
                    onClick={() => { onChange(ds); setOpen(false) }}
                  >
                    {cell.day}
                  </button>
                )
              })}
            </div>

            {/* Footer */}
            <div className={`flex items-center justify-between px-4 py-3 border-t ${divider}`}>
              <button
                type="button"
                onClick={() => { onChange(''); setOpen(false) }}
                className={`text-[13px] font-bold transition ${footerLk}`}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => { onChange(todayStr); setOpen(false) }}
                className="text-[13px] font-bold text-[#ff2638] hover:text-[#cc1f2f] transition"
              >
                Today
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
