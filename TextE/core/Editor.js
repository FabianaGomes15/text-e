import Line from './components/Line.js'


export default class Editor {
  lines = []

  get print() {
    return this.lines.map(ln => ln.print)
  }

  constructor(ele, changes_obsv) {
    this.ele = ele
    this.changes_obsv = changes_obsv

    this.setup()
    this.add_line()
  }

  setup() {
    this.ele.addEventListener('keydown', ev => {
      if (ev.key === 'Enter' && !ev.shiftKey) {
        ev.preventDefault()
        this.add_line()
      }
    })
  }

  // Private

  add_line() {
    const line = new Line(this.lines.length, this.line_down)

    this.lines.push(line)
    this.ele.appendChild(line.ele)

    this.lines[this.lines.length - 1].ele.focus()
  }

  line_down = (key, ev) => {
    if (ev.key === 'ArrowDown')
    {
      if (this.lines.length - 1 > key) {
        this.lines[key + 1].ele.focus()
      }
    }

    if (ev.key === 'ArrowUp')
    {
      if (key > 0) {
        this.lines[key - 1].ele.focus()
      }
    }

    this.changes_obsv(this)
  }
}
