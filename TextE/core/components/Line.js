
export default class Line {
  key = ''
  align = 'left'
  data = { val: '' }

  get print() {
    return {
      key: this.key,
      align: this.align,
      data: this.data
    }
  }

  constructor(key, changes_obsv) {
    this.key = key
    this.changes_obsv = changes_obsv

    const $Line = document.createElement('div')

    $Line.classList.add('text-e__line')
    $Line.setAttribute('contentEditable', '')
    $Line.setAttribute('align', this.align)
    $Line.addEventListener('keydown', this.down)
    $Line.addEventListener('keyup', this.up)

    this.ele = $Line
  }

  // Private

  down = ev => {
    if (ev.shiftKey) {
      let oldAlign = this.align

      switch (ev.key) {
        case 'L': this.align = 'left'  ; break
        case 'R': this.align = 'right' ; break
        case 'C': this.align = 'center'; break
      }

      if (oldAlign !== this.align) {
        ev.preventDefault()
        this.ele.setAttribute('align', this.align)
      }
    }

    this.changes_obsv(this.key, ev)
  }

  up = ev => {
    this.data.val = ev.target.innerText

    this.changes_obsv(this.key, ev)
  }
}
