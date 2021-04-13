# Random Choice Picker

![screen recording](https://media.giphy.com/media/gvY0vT8CAXK71Zwdam/giphy.gif)

#### project notes

1. HTML

- p: Enter all of the choices divided by a comma(','). Press enter when you're done.
- textarea
- inputs

2. CSS

- input colour
- random picker colour

3. JavaScript

- keyup event listener
- random picker: `Math.floor(Manth.random() * choices.length)`

* Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- no cols, rows for the textarea. styled in css
- use span for the choice tag

2. CSS
3. JavaScript

- `Element.focus()` makes cursor in the element when the page loading

```
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if ( e.key === 'Enter' ) {
    setTimeout(() => {
      e.target.value = '';
    }, 10)
    randomSelect();
  }
})
function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

  tagsEl.innterHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  })
}
function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100)
  }, 100)
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100)
  }, times * 100)
}
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag) {
  tag.classList.add('highlight')
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
```
