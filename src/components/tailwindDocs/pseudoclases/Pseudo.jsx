/**
 * group- hover, focus, active, target, other states
 * hover es cursor encima, active es mientras persiono el click y focus es luego de presionar o usar tab
 * los links tienen :target y :visited, 
 * :empty para visibity o display hidden cuando se use algún .map
 * hay otros como first, last, odd e even usados en css, pero menos usados en tailwindcss
 * si se quiere modificar al hijo a partir de pseudoclase en padre se usa el group-x
 * el checked: es útil para checkcbox y radio
 * los data-attributes son interesantes y más usados con js, ahora varias UI kits ya hacen el trabajo sucio, me gustan shadcn, flowbite y nextUI por su personalización con tailwind
 * el dark: para el modo oscuro ez xd
 * selection: para la selección de textos
 * marker: para los li, file: para los file inputs, placeholder ez xd
 * before: y after: son más usados para dibujar sobre texto, se usan junto a content, display block, z index -1 y clip para la forma, son más artísticos que funcionales
 * se puede anidar group-hover usando el group-hover/x : o buenísimo
 * el peer-checked es similar al group-hover para checkbox, pero funciona entre siblings y no de padre a hijo
 * si se quiere ir de hijo a padre, se debe usar el has-[:checked], por ejemplo, la doc oficial está god
 */

const Pseudo = () => {
  return (
    <h1>Ga</h1>
  )
}

export default Pseudo