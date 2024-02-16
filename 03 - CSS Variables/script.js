const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const baseColor = document.querySelector("#base");
const root = document.querySelector(':root');

spacing.addEventListener('change', (e) => {
  const value = e.target.value
  root.style.setProperty('--spacing', `${value}px`)

} );

blur.addEventListener('change', (e) => {
  const value = e.target.value
  root.style.setProperty('--blur', `${value}px`)

} );

baseColor.addEventListener('change', (e) => {
  const value = e.target.value
  root.style.setProperty('--base', `${value}`)
} );

