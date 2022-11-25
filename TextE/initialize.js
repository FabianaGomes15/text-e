import Editor from './core/Editor.js'


export default () => {
  const $Editors = document.querySelectorAll('text-e')
  const $Editors_test = document.querySelectorAll('pre.text-e__tester')

  $Editors.forEach((ele, idx) =>
    new Editor(
      ele,
      editor => {
        if ($Editors_test[idx])
          $Editors_test[idx].innerText = JSON.stringify(editor.print, null, 2)
      }
    )
  )
}
