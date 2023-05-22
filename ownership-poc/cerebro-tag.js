(function(window) {
  const documents = [window.document]
  const getCerebroTags = doc => Array.from(doc.querySelectorAll('[data-cerebro]'))
  const tags = documents.flatMap(doc => getCerebroTags(doc).map(el => ({
    id: el.dataset.cerebro,
    coords: el.getBoundingClientRect()
  })))

  const overlay = document.createElement('div')
  overlay.className = 'opacity-0 absolute inset-0 hover:opacity-100'
  tags.forEach((tag, index) => {
    const el = document.createElement('div')
    const { id, coords } = tag
    const { width, height, left, top } = coords

    el.style = `width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px; z-index: ${index}`
    el.className = 'absolute p-1 border-1 bg-blue-500/30 border-blue-500 border-4 border-dashed opacity-0 hover:opacity-100'
    el.innerHTML = id

    overlay.appendChild(el)
  })

  document.body.appendChild(overlay)
}(window))
